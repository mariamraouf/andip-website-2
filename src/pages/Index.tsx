"use client";

import React from "react";
import { 
  MapPin, 
  ArrowRight, 
  Check, 
  Star, 
  Calendar, 
  Users, 
  Compass, 
  Instagram, 
  MessageSquare, 
  Mail
} from "lucide-react";

export default function Index() {
  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const expeditions = [
    {
      title: "Everest Base Camp Trek",
      tag: "MOST POPULAR",
      tagColor: "bg-orange-100 text-orange-800",
      rating: "4.9",
      duration: "14 Days",
      groupSize: "2-12 People",
      difficulty: "Challenging",
      price: "$1,450",
      image: "/waterfall.jpg"
    },
    {
      title: "Annapurna Circuit Adventure",
      tag: "BEST VIEWS",
      tagColor: "bg-blue-100 text-blue-800",
      rating: "4.8",
      duration: "12 Days",
      groupSize: "1-10 People",
      difficulty: "Strenuous",
      price: "$1,200",
      image: "/lake-trek.jpg"
    },
    {
      title: "Kathmandu Cultural Tour",
      tag: "SPIRITUAL",
      tagColor: "bg-amber-100 text-amber-800",
      rating: "5.0",
      duration: "3 Days",
      groupSize: "Any",
      difficulty: "Easy",
      price: "$350",
      image: "/temple.jpg",
      highlighted: true
    },
    {
      title: "Langtang Valley Trek",
      tag: "HIDDEN GEM",
      tagColor: "bg-emerald-100 text-emerald-800",
      rating: "4.7",
      duration: "8 Days",
      groupSize: "1-12 People",
      difficulty: "Moderate",
      price: "$750",
      image: "/hero-mountains.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-emerald-500 text-white p-2 rounded-xl">
              <Compass className="h-6 w-6" />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900">
              ANDIP<span className="text-emerald-500">!</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <button onClick={() => scrollToSection("vibe")} className="hover:text-slate-900 transition-colors">THE VIBE</button>
            <button onClick={() => scrollToSection("adventures")} className="hover:text-slate-900 transition-colors">ADVENTURES</button>
            <button onClick={() => scrollToSection("pics")} className="hover:text-slate-900 transition-colors">PICS</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-slate-900 transition-colors">HIT ME UP</button>
          </nav>

          {/* Book Now Button */}
          <div>
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-extrabold text-sm tracking-wider transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 hover:scale-105"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-mountains.jpg" 
            alt="Himalayan Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 py-12">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span>Based in Kathmandu, Nepal</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none animate-fade-in">
            Experience the <span className="text-orange-500">Himalayas</span> <br />
            with Andip
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in">
            From the peaks of Everest to the spiritual temples of Kathmandu. Discover the hidden gems of Nepal with a local expert who knows every trail.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection("adventures")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-extrabold text-base transition-all duration-300 shadow-lg shadow-orange-600/30 hover:scale-105"
            >
              Explore Tours
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-extrabold text-base backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Chat with Andip
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
        </div>
      </section>

      {/* About Section ("Namaste, I'm Andip.") */}
      <section id="vibe" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Image with floating badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="/andip-dogs.jpg" 
                  alt="Andip with his dogs in the mountains" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">EXPERIENCE</p>
                  <p className="text-lg font-black text-slate-900">10+ Years</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-orange-600 font-extrabold text-sm tracking-widest uppercase">YOUR LOCAL GUIDE</span>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  Namaste, I'm Andip.
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                I was born and raised in the shadows of the Himalayas. For over a decade, I've been sharing the magic of my homeland with travelers from all over the world. My mission is to provide more than just a tour—I want to give you a deep, authentic connection to the culture, people, and landscapes of Nepal.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Certified Professional Mountain Guide",
                  "Expert in Cultural & Spiritual Tours",
                  "Fluent in English, Nepali, and Hindi",
                  "Customized Itineraries for All Levels"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Social & Trust Stack */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                <a 
                  href="https://instagram.com/__andip__" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
                >
                  <Instagram className="h-4 w-4" />
                  @__andip__
                </a>

                {/* Avatar Stack */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                    ].map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt="Traveler" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-600">
                    <strong className="text-slate-900">500+</strong> Happy Travelers
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Popular Expeditions Section */}
      <section id="adventures" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-orange-600 font-extrabold text-sm tracking-widest uppercase">ADVENTURE AWAITS</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Popular Expeditions
              </h2>
            </div>
            <p className="text-slate-600 max-w-md font-medium text-base">
              Carefully curated experiences designed to show you the very best of Nepal's nature and heritage.
            </p>
          </div>

          {/* Expeditions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expeditions.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Tag */}
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider ${exp.tagColor}`}>
                    {exp.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Rating & Duration */}
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-4 w-4 fill-amber-500" />
                        <span>{exp.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-lg text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Details & Price */}
                  <div className="space-y-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{exp.groupSize}</span>
                      </div>
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                        {exp.difficulty}
                      </span>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">STARTING FROM</p>
                        <p className="text-xl font-black text-slate-900">{exp.price}</p>
                      </div>
                      <button 
                        onClick={() => scrollToSection("contact")}
                        className={`p-3 rounded-2xl transition-all duration-300 ${
                          exp.highlighted 
                            ? "bg-orange-600 text-white shadow-md shadow-orange-600/20" 
                            : "bg-slate-900 text-white hover:bg-orange-600"
                        }`}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Moments from the Trail (Gallery) */}
      <section id="pics" className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">VISUAL JOURNEY</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Moments from the Trail
            </h2>
            <p className="text-slate-400 font-medium text-base">
              A glimpse into the breathtaking landscapes and spiritual encounters we experience on our tours.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Left Image */}
            <div className="md:col-span-7 relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[500px] group">
              <img 
                src="/hero-mountains.jpg" 
                alt="Himalayan Peaks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-lg font-black">Himalayan Peaks</p>
              </div>
            </div>

            {/* Right Column Grid */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Top Right */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] group">
                <img 
                  src="/temple.jpg" 
                  alt="Spiritual Temple" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-lg font-black">Spiritual Temples</p>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] group">
                <img 
                  src="/waterfall.jpg" 
                  alt="Hidden Waterfall" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-lg font-black">Hidden Waterfalls</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section ("READY TO GO?") */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-mountains.jpg" 
            alt="Himalayan Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-12">
          <div className="space-y-4">
            <span className="text-orange-500 font-extrabold text-sm tracking-widest uppercase">READY TO GO?</span>
            <h2 className="text-6xl sm:text-7xl font-black tracking-tight">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">GO?</span>
            </h2>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
            {/* Instagram */}
            <a 
              href="https://instagram.com/__andip__" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-extrabold text-base hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="h-6 w-6 text-pink-600" />
              FOLLOW ME INSTAGRAM
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/9779823710900?text=Hi%20Andip,%20I%20am%20interested%20in%20planning%20a%20trip%20to%20Nepal!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-extrabold text-base hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageSquare className="h-6 w-6" />
              CHAT NOW WHATSAPP
            </a>
          </div>

          {/* Email */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold">
            <Mail className="h-4 w-4 text-orange-500" />
            <span>Or email me at: <a href="mailto:maharajanandip968@gmail.com" className="text-orange-400 hover:underline">maharajanandip968@gmail.com</a></span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 text-white p-2 rounded-xl">
              <Compass className="h-5 w-5" />
            </div>
            <span className="font-black text-xl tracking-tight">
              ANDIP<span className="text-emerald-500">!</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400">
            <button onClick={() => scrollToSection("vibe")} className="hover:text-white transition-colors">THE VIBE</button>
            <button onClick={() => scrollToSection("adventures")} className="hover:text-white transition-colors">ADVENTURES</button>
            <button onClick={() => scrollToSection("pics")} className="hover:text-white transition-colors">PICS</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">HIT ME UP</button>
          </div>

          {/* Made with Love in Nepal */}
          <div className="text-sm font-bold text-slate-400 tracking-wider">
            MADE WITH ❤️ IN NEPAL
          </div>
        </div>
      </footer>

    </div>
  );
}