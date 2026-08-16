import { contact } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}?text=Hai%20Sakluma!%20Saya%20nak%20order%20salai%20%F0%9F%94%A5`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Sakluma"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl shadow-lg shadow-black/40 hover:bg-green-500 md:bottom-6"
    >
      💬
    </a>
  );
}
