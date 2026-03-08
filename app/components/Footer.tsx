export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif italic text-lg">FitPro</p>
          <div className="flex gap-6">
            {[
              { label: "WhatsApp", href: "https://wa.me/918447786332" },
              { label: "Instagram", href: "https://instagram.com" },
              { label: "YouTube", href: "https://youtube.com" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" className="text-muted hover:text-white transition-colors text-sm">{l.label}</a>
            ))}
          </div>
          <p className="text-muted text-xs">© 2026 FitPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
