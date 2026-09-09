export type EnquiryPayload = {
  name?: string;
  phone: string;
  date?: string;
  pax?: string;
  message?: string;
  package?: string;
  source?: string;
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

/**
 * Email the lead via Web3Forms (client-side — their free plan blocks server calls).
 * Returns true on success. If no key is configured, returns false so the caller
 * falls back to WhatsApp.
 */
export async function sendEnquiry(p: EnquiryPayload): Promise<boolean> {
  if (!WEB3FORMS_KEY) return false;

  const summary =
    `Package: ${p.package || "Custom / not decided"}\n` +
    `Name: ${p.name || "-"}\n` +
    `Phone: ${p.phone}\n` +
    `Travel month: ${p.date || "-"}\n` +
    `Travellers: ${p.pax || "-"}\n` +
    `Notes: ${p.message || "-"}\n` +
    `Submitted from: ${p.source || "website"}`;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New enquiry — ${p.package || "Custom Kashmir trip"}`,
        from_name: "Gold Hill Luxe website",
        name: p.name || "Website visitor",
        phone: p.phone,
        travel_month: p.date || "-",
        travellers: p.pax || "-",
        message: summary,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean };
    return res.ok && json.success === true;
  } catch {
    return false;
  }
}

/** WhatsApp deep link used as a fallback if the email send fails. */
export function whatsappFallback(p: EnquiryPayload): string {
  const text = encodeURIComponent(
    `New Kashmir enquiry\n\n` +
      `Package: ${p.package || "Custom / not sure"}\n` +
      `Name: ${p.name || "-"}\n` +
      `Phone: ${p.phone}\n` +
      `Travel month: ${p.date || "-"}\n` +
      `Travellers: ${p.pax || "-"}\n` +
      `Notes: ${p.message || "-"}`,
  );
  return `https://wa.me/919541491305?text=${text}`;
}

/** Google Ads / GTM lead event. */
export function pushLeadEvent(pkg?: string) {
  type DL = { push: (o: Record<string, unknown>) => void };
  const w = window as unknown as { dataLayer?: DL };
  w.dataLayer?.push({ event: "generate_lead", lead_package: pkg ?? "custom" });
}
