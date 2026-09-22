"use client";

import { useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

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
  const [open, setOpen] = useState(false);

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

      <EnquiryModal
        open={open}
        onClose={() => setOpen(false)}
        packageName={packageName}
        source="package-modal"
      />
    </>
  );
}
