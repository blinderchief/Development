
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type FadeInProps = {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 500,
  className = '',
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'scale-95';
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : `opacity-0 ${getDirectionClass()}`,
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
