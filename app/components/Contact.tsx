export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-card border border-white/5 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/5 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/5 rounded-full" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              LET&apos;S <span className="font-serif italic font-normal text-muted">
              <span className="inline-block w-14 h-14 md:w-16 md:h-16 rounded-full bg-warm mx-2 align-middle text-3xl md:text-4xl leading-[3.5rem] md:leading-[4rem] text-center">💪</span>
              TALK</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-md mx-auto">Get 1 free trial session! Reach out on WhatsApp or give me a call.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://wa.me/918447786332" target="_blank" className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                Book Free Session <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-xs">↗</span>
              </a>
              <a href="https://wa.me/918447786332" target="_blank" className="border border-white/20 px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-center">💬 WhatsApp Me</a>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: "📧", info: "rudhrasaini10@gmail.com" },
                { icon: "📞", info: "+91 84477 86332 / 83682 32364" },
                { icon: "⏰", info: "Mon-Sat: 6AM - 9PM" },
              ].map((c) => (
                <div key={c.info} className="bg-white/5 rounded-2xl p-5 text-left">
                  <span className="text-xl block mb-2">{c.icon}</span>
                  <p className="text-white/60 text-sm">{c.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
