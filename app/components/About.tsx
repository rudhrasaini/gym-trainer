export default function About() {
  const details = [
    { label: "Based In", value: "Bengaluru, India" },
    { label: "Experience", value: "15+ Years" },
    { label: "Specialty", value: "Body Transformation" },
    { label: "Clients", value: "500+ Transformed" },
  ];
  const certifications = [
    { name: "American Council on Exercise (ACE)", type: "Certified Personal Trainer" },
    { name: "Reebok", type: "Step &amp; Stability Instructor" },
    { name: "EBFA", type: "Rehab Specialist" },
    { name: "IKFF", type: "Kettlebell Certification" },
    { name: "IAHF", type: "International Health &amp; Fitness" },
    { name: "Sports Nutrition", type: "Nutrition &amp; Supplementation" },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-8">( About Me )</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
              I&apos;m Kuldeep Saini, a professional fitness trainer dedicated to turning{" "}
              <span className="font-serif italic font-normal text-muted">your goals into reality.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              With over 15 years of experience training bodybuilders, models, and everyday fitness enthusiasts, I bring science-backed programs tailored to your unique goals. Whether it&apos;s weight loss, strength building, or competition prep — I&apos;ve got you covered.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {details.map((d) => (
                <div key={d.label} className="bg-card border border-white/5 rounded-2xl p-5">
                  <p className="text-xs text-muted mb-1">{d.label}</p>
                  <p className="font-semibold text-sm">{d.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-white/5 rounded-[30px] p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-warm rounded-full w-14 h-14 flex items-center justify-center text-2xl font-black">🏅</div>
              <p className="text-sm text-muted">Internationally Certified<br />Fitness Professional</p>
            </div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-6">Certifications</h3>
            {certifications.map((c, i) => (
              <div key={i} className="flex items-start justify-between py-5 border-t border-white/5">
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-muted">{c.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
