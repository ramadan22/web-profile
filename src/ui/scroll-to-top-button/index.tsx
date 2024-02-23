// 'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const isBrowser = () => typeof window !== 'undefined';

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const threshold = 300;
      setIsVisible(scrollY > threshold);
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed z-[2] bottom-4 right-4">
      {isVisible && (
      <button type="button" onClick={() => scrollToTop()} className="bg-blue-500 text-white px-4 py-2 rounded z-10 right-0">
        Scroll to Top
      </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
