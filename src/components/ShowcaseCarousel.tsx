import React, { useState } from 'react';

const ShowcaseCarousel = () => {
  const items = [
    { title: 'AI Wellness Engine', desc: 'Get real-time suggestions tailored to your health' },
    { title: 'NeuroSync Tracking', desc: 'Monitor sleep, mood, heart, and stress levels' },
    { title: 'Smart Integrations', desc: 'Syncs with smart home and health devices' },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 px-4 text-center scroll-reveal">
      <h2 className="text-3xl font-bold mb-6">🔄 Showcase Carousel</h2>
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 mx-auto max-w-xl">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{items[index].title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{items[index].desc}</p>
        <div className="mt-6 flex justify-center gap-6">
          <button onClick={() => setIndex((index - 1 + items.length) % items.length)} className="btn ripple">⬅</button>
          <button onClick={() => setIndex((index + 1) % items.length)} className="btn ripple">➡</button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCarousel;
