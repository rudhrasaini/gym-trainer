export default function About() {
  const details = [
    { label: "Born In", value: "Delhi, India" },
    { label: "Experience", value: "15+ Years" },
    { label: "Specialty", value: "Strength & Conditioning" },
    { label: "Clients", value: "500+ Handled" },
  ];
  const experience = [
    { place: "Elite Fitness Studio", role: "Head Trainer", year: "2022 - Present" },
    { place: "Gold's Gym", role: "Senior Personal Trainer", year: "2019 - 2022" },
    { place: "CrossFit Box", role: "Strength Coach", year: "2016 - 2019" },
    { place: "City Sports Club", role: "Fitness Trainer", year: "2014 - 2016" },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-8">( About Me )</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
              I am a certified personal trainer, known for my ability to turn{" "}
              <span className="font-serif italic font-normal text-muted">goals into reality.</span>
            </h2>
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
              <div className="bg-warm rounded-full w-14 h-14 flex items-center justify-center text-2xl font-black">15+</div>
              <p className="text-sm text-muted">Years of Experience in<br />Fitness & Training</p>
            </div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-6">Experience</h3>
            {experience.map((e, i) => (
              <div key={i} className="flex items-start justify-between py-5 border-t border-white/5">
                <div>
                  <p className="font-semibold">{e.place}</p>
                  <p className="text-sm text-muted">{e.role}</p>
                </div>
                <p className="text-xs text-muted bg-warm px-3 py-1 rounded-full shrink-0">{e.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
