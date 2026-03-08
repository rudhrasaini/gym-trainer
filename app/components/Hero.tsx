import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="anim-up flex items-center gap-3 mb-8">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm text-muted">Available for new clients</span>
            </div>
            <h1 className="anim-up-d1 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
              <span className="font-serif italic font-normal text-muted">Hi there!</span><br />I&apos;m a
            </h1>
            <h1 className="anim-up-d2 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-2">FITNESS</h1>
            <div className="anim-up-d2 flex items-center gap-4 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-warm flex items-center justify-center text-4xl md:text-5xl shrink-0">💪</div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight">TRAINER</h1>
            </div>
            <p className="anim-up-d3 text-muted text-lg max-w-md leading-relaxed mb-10">
              I am a certified personal trainer with 15+ years of experience, known for transforming lives through science-backed fitness programs.
            </p>
            <div className="anim-up-d3 flex flex-wrap gap-4">
              <a href="https://wa.me/918447786332" target="_blank" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all flex items-center gap-2">
                Book a Session <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-xs">↗</span>
              </a>
              <a href="https://wa.me/918447786332" target="_blank" className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div className="anim-up-d2 relative">
            <div className="relative aspect-[3/4] bg-warm rounded-[40px] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-[150px]">🏋️</div>
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4">
                <p className="text-3xl font-black">15+</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">Years of<br />Experience</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-2xl font-black">500+</p>
              <p className="text-xs text-muted">Clients Trained</p>
            </div>
            <div className="absolute top-1/2 -right-4 bg-white text-black rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-2xl font-black">98%</p>
              <p className="text-xs text-black/60">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-5 overflow-hidden bg-bg/50 backdrop-blur-sm">
        <div className="anim-marquee whitespace-nowrap flex gap-16 text-sm text-muted/40 font-medium">
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              {["STRENGTH TRAINING", "WEIGHT LOSS", "HIIT", "NUTRITION", "BOXING", "FUNCTIONAL FITNESS", "MOBILITY"].map((t) => (
                <span key={t} className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-white/10" />{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
