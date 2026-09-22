"use client";

import { useEffect, useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

const SESSION_KEY = "ghl_welcome_popup_shown";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // storage blocked (private mode etc.) — just show it once for this mount
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <EnquiryModal
      open={open}
      onClose={() => setOpen(false)}
      source="welcome-popup"
      heading="Plan your Kashmir trip — get 25% off"
    />
  );
}
