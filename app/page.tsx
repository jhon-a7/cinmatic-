'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import Works from '@/components/works';
import Contact from '@/components/contact';

export default function Page() {
  const [cinematicMode, setCinematicMode] = useState(true);

  return (
    <div className="film-grain">
      {/* Letterbox bars */}
      <div
        className={`letterbox-top ${!cinematicMode ? 'hidden' : ''}`}
        aria-hidden="true"
      />
      <div
        className={`letterbox-bottom ${!cinematicMode ? 'hidden' : ''}`}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className={`content-with-letterbox ${!cinematicMode ? 'no-letterbox' : ''}`}>
        <Header cinematicMode={cinematicMode} setCinematicMode={setCinematicMode} />
        <Hero cinematicMode={cinematicMode} />
        <About />
        <Experience />
        <Skills />
        <Works cinematicMode={cinematicMode} />
        <Contact cinematicMode={cinematicMode} />
      </div>
    </div>
  );
}
