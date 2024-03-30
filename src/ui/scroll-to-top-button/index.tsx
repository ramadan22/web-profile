import { useState } from 'react';
import { cn } from '@/lib/classnames';
import Button from '@/components/button';

const ScrollToTopButton = () => {
  const [isShow, setIsShow] = useState(false);
  const isBrowser = () => typeof window !== 'undefined';

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const { pageYOffset }: { pageYOffset: number } = window;

      setIsShow(pageYOffset > 100);
    });
  }

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed z-[2] bottom-4 right-4">
      <Button
        type="button"
        onClick={() => scrollToTop()}
        className={cn(
          `bg-blue-500 text-white px-4 py-2 rounded z-10 
          right-0 animation-duration-[.5s]`,
          isShow ? 'animate-slide-right-to-left' : 'animate-hide-left-to-right',
        )}
      >
        Scroll to Top
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
