export default function Testimonials() {
  const reviews = [
    { name: "Arun", role: "Strength gain in 3 months", text: "I could barely do 5 push-ups when I started. In just 3 months, Kuldeep helped me build real strength with a structured program. My deadlift went from 40kg to 100kg. The results are unreal!", avatar: "A" },
    { name: "Prasad", role: "Got abs in 4 months", text: "Always dreamed of having visible abs but never knew how. Kuldeep designed a perfect mix of training and diet that got me there in 4 months. Friends can't believe the transformation!", avatar: "P" },
    { name: "Riddhi", role: "Lost 30 lbs in 4 months", text: "I had tried every diet and gym routine before but nothing worked long-term. Kuldeep's approach was different — sustainable nutrition and workouts I actually enjoyed. Down 30 lbs and keeping it off!", avatar: "R" },
    { name: "Chinmay", role: "Muscle building in 3 months", text: "As a skinny guy, I struggled to gain muscle for years. Kuldeep's bulking program with proper nutrition guidance helped me gain 8kg of lean muscle in just 3 months. Best investment I've made!", avatar: "C" },
    { name: "Dhanya", role: "Weight loss in 4 months", text: "Post-pregnancy weight was really affecting my confidence. Kuldeep created a safe, effective program tailored to my needs. Lost all the extra weight in 4 months and feel stronger than ever!", avatar: "D" },
    { name: "Sadhana", role: "Strength Transformation", text: "I wanted to feel strong and confident, not just lose weight. Kuldeep focused on building my overall strength with compound movements and yoga. I've never felt this powerful in my life!", avatar: "S" },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-6">( Testimonials )</span>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-14 max-w-2xl">
          Our happy clients give us impactful and{" "}
          <span className="font-serif italic font-normal text-muted">positive feedback</span> on our training programs.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-white/5 rounded-[24px] p-8 hover:border-white/10 transition-all duration-500">
              <p className="text-white/70 leading-relaxed mb-8">{r.text}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold">{r.avatar}</div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-muted text-xs">{r.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">{Array(5).fill(null).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
