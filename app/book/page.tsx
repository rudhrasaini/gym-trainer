"use client";
import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const timeSlots = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
  const services = ["Personal Training", "Nutrition Planning", "Group Training", "Online Coaching", "Competition Prep", "Recovery & Mobility"];
  const inputClass = "w-full bg-card border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-muted focus:border-white/30 focus:outline-none transition text-sm";

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-6">
          <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-3xl mx-auto mb-8">✓</div>
          <h1 className="text-4xl font-bold mb-2">Booking <span className="font-serif italic font-normal text-muted">Confirmed!</span></h1>
          <p className="text-muted text-lg mb-10">We&apos;ll reach out shortly to confirm your session.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-black px-8 py-4 rounded-full font-medium">Back to Home</Link>
            <a href="https://wa.me/918447786332" target="_blank" className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all">💬 WhatsApp</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/" className="text-muted hover:text-white transition text-sm mb-8 inline-block">← Back to Home</Link>
        <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-6">( Appointment )</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Book a <span className="font-serif italic font-normal text-muted">Session</span>
        </h1>
        <p className="text-muted mb-10">Fill in the form and I&apos;ll get back to you within 24 hours.</p>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" required placeholder="Full Name" className={inputClass} />
            <input type="tel" required placeholder="Phone Number" className={inputClass} />
          </div>
          <input type="email" required placeholder="Email Address" className={inputClass} />
          <select required className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="date" required className={inputClass} />
            <select required className={inputClass}>
              <option value="">Select time</option>
              {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <textarea rows={4} placeholder="Tell me about your fitness goals..." className={`${inputClass} resize-none`} />
          <button type="submit" className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
            Confirm Booking <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-xs">↗</span>
          </button>
          <p className="text-center text-muted text-sm">Or reach out on <a href="https://wa.me/918447786332" target="_blank" className="text-white font-medium hover:underline">WhatsApp</a></p>
        </form>
      </div>
    </main>
  );
}
