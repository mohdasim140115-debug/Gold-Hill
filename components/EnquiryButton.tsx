"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { offer } from "@/lib/site";
import { pushLeadEvent, sendEnquiry, whatsappFallback } from "@/lib/enquiry";

type Props = {
  packageName?: string;
  label?: string;
  className?: string;
};

export function EnquiryButton({
  packageName,
  label = "Enquire Now",
  className = "",
}: Props) {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const payload = {
      name: String(f.get("name") || ""),
      phone: String(f.get("phone") || ""),
      date: String(f.get("date") || ""),
      pax: String(f.get("pax") || ""),
      message: String(f.get("message") || ""),
      package: packageName ?? "Custom / not sure",
      source: "package-modal",
    };

    setBusy(true);
    const ok = await sendEnquiry(payload);
    pushLeadEvent(payload.package);

    // If the email API isn't reachable, don't lose the lead — open WhatsApp.
    if (!ok) window.open(whatsappFallback(payload), "_blank");

    router.push(`/thank-you?p=${encodeURIComponent(payload.package)}`);
  }

  const field =
    "w-full rounded-lg border border-brand-900/15 bg-white px-3 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-brand-900/80 p-4 py-8 sm:items-center"
      onClick={() => !busy && setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => !busy && setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          ✕
        </button>

        <div className="rounded-t-2xl bg-brand-800 px-6 py-5 text-white">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-gold">
            🪔 {offer.badge}
          </p>
          <h3 className="mt-1 text-lg font-bold leading-tight">
            Get a free quote &amp; itinerary
          </h3>
          <p className="mt-1 text-xs text-white/70">
            {packageName ?? "Custom Kashmir trip"} · use code{" "}
            <strong className="text-white">{offer.code}</strong> for 25% off
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3 px-6 py-5">
          <input name="name" required placeholder="Your name" className={field} />
          <input
            name="phone"
            required
            inputMode="tel"
            placeholder="Phone / WhatsApp number"
            className={field}
          />
          <div className="grid grid-cols-2 gap-3">
            <label className="text-[0.7rem] font-medium text-brand-900/55">
              Travel date
              <input
                name="date"
                type="date"
                min={today}
                className={`${field} mt-1`}
              />
            </label>
            <label className="text-[0.7rem] font-medium text-brand-900/55">
              Travellers
              <input
                name="pax"
                placeholder="e.g. 2 adults"
                className={`${field} mt-1`}
              />
            </label>
          </div>
          <textarea
            name="message"
            rows={3}
            placeholder="Anything specific? (optional)"
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-60"
          >
            {busy ? "Sending…" : "Send my enquiry"}
          </button>
          <p className="text-center text-[0.7rem] leading-relaxed text-brand-900/45">
            By submitting you agree to be contacted about your trip. We never
            share your number.
          </p>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ||
          "w-full rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
        }
      >
        {label}
      </button>

      {open && mounted && createPortal(modal, document.body)}
    </>
  );
}
