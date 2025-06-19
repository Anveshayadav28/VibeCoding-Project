import React, { useState } from 'react';

const PopupModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-16 text-center scroll-reveal">
      <button onClick={() => setOpen(true)} className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg ripple hover:bg-blue-700 transition">
        Learn More About NeuroSync
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl relative max-w-md w-full">
            <button onClick={() => setOpen(false)} className="absolute top-2 right-4 text-xl text-gray-700 dark:text-white">✖</button>
            <h3 className="text-2xl font-bold mb-4">About NeuroSync</h3>
            <p className="text-gray-700 dark:text-gray-300">NeuroSync Pro offers AI-powered tracking for better health decisions. Designed for the modern lifestyle.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
