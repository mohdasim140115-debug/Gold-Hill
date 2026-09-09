import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gold Hill Luxe on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-brand-400"
    >
      <span aria-hidden>✆</span>
    </a>
  );
}
