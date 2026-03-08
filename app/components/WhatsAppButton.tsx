export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/918447786332" target="_blank" className="fixed bottom-6 right-6 z-50 group" aria-label="Chat on WhatsApp">
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full anim-pulse-ring" />
        <div className="relative bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-green-500/20 transition-all duration-300 group-hover:scale-110">
          💬
        </div>
      </div>
    </a>
  );
}
