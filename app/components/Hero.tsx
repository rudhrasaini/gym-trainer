import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="anim-up flex items-center gap-3 mb-8">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm text-muted">Offering 1 Free Trial Session</span>
            </div>
            <h1 className="anim-up-d1 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
              <span className="font-serif italic font-normal text-muted">I&apos;m Kuldeep Saini</span><br />Your
            </h1>
            <h1 className="anim-up-d2 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-2">FITNESS</h1>
            <div className="anim-up-d2 flex items-center gap-4 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-warm flex items-center justify-center text-4xl md:text-5xl shrink-0">💪</div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight">TRAINER</h1>
            </div>
            <p className="anim-up-d3 text-muted text-lg max-w-md leading-relaxed mb-10">
              ACE certified professional trainer specializing in body transformation, strength building &amp; competition prep for bodybuilders and models.
            </p>
            <div className="anim-up-d3 flex flex-wrap gap-4">
              <a href="https://wa.me/918447786332" target="_blank" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all flex items-center gap-2">
                Book Free Session <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-xs">↗</span>
              </a>
              <a href="https://wa.me/918447786332" target="_blank" className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div className="anim-up-d2 relative">
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden">
              <Image
                src="/kuldeep.jpg"
                alt="Kuldeep Saini - Professional Fitness Trainer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-5 overflow-hidden bg-bg/50 backdrop-blur-sm">
        <div className="anim-marquee whitespace-nowrap flex gap-16 text-sm text-white font-medium">
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              {["CARDIO TRAINING", "WEIGHT LOSS", "STRENGTH BUILDING", "YOGA", "NUTRITION PLANNING", "BODYBUILDING", "STAMINA BUILDING"].map((t) => (
                <span key={t} className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-white/10" />{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
