import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col justify-between overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <div className="flex-grow">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-[#111714]/80 p-4 backdrop-blur-sm">
          <button className="text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">GreenMatch</h2>
          <div className="w-8"></div>
        </header>
        <div className="p-4 space-y-6">
          <div className="flex items-start gap-3">
            <img alt="GreenMatch avatar" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAqfjyeBnjtSdu-62GusSyjwoSRicXhh4wNwoAbeIO272P0An3EMZ8mEbfrpA7ERtXRck7mxXbM3q6GSQlrTj_rojgvcj2c9mD3bML2z5YazZOt8oYLhS98scddpogppX5t1XTGQL9PpWBvA9rVZ2d_CTYa7_lLH75t-8-tvpiV9EXn7y6SJ1Jl9mWjNw8CEY45YHsvCtkKz73VwC6zRhmFhCyJda62bsFwA8Dr4zpdBlU3RR-Eka0iRtE9c5SY2Ny5V6nQ0hH6Dk" />
            <div className="flex flex-col gap-1.5 items-start">
              <p className="text-[#9eb7a8] text-sm font-medium">GreenMatch</p>
              <p className="text-base font-normal leading-normal rounded-xl rounded-tl-none px-4 py-3 bg-[#29382f] text-white max-w-[280px]">
                Hola, soy GreenMatch, tu asistente de jardinería personal. ¿En qué puedo ayudarte hoy?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[#111714] pb-safe">
        <div className="flex items-center p-4 gap-3">
          <div className="flex-1 relative">
            <input className="form-input w-full min-w-0 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border-none bg-[#29382f] h-12 placeholder:text-[#9eb7a8] px-5 text-base font-normal leading-normal" placeholder="Escribe un mensaje..." />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#9eb7a8] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">add_a_photo</span>
            </button>
          </div>
          <button className="flex items-center justify-center size-12 rounded-full bg-[var(--primary-color)] text-black">
            <span className="material-symbols-outlined text-2xl">arrow_upward</span>
          </button>
        </div>
        <div className="flex justify-around border-t border-[#29382f] bg-[#1c2620] px-4 py-2">
          <a className="flex flex-col items-center justify-end gap-1 text-[var(--primary-color)]" href="#">
            <span className="material-symbols-outlined text-2xl">chat</span>
            <p className="text-xs font-medium tracking-wide">Chat</p>
          </a>
          <a className="flex flex-col items-center justify-end gap-1 text-[#9eb7a8] hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined text-2xl">eco</span>
            <p className="text-xs font-medium tracking-wide">Mis plantas</p>
          </a>
          <a className="flex flex-col items-center justify-end gap-1 text-[#9eb7a8] hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined text-2xl">calendar_today</span>
            <p className="text-xs font-medium tracking-wide">Mi horario</p>
          </a>
          <a className="flex flex-col items-center justify-end gap-1 text-[#9eb7a8] hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined text-2xl">favorite</span>
            <p className="text-xs font-medium tracking-wide">Wants</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
