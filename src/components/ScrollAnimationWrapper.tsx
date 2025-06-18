
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'blur' | 'bounce';
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'slideLeft': return 'scroll-slide-left';
      case 'slideRight': return 'scroll-slide-right';
      case 'scale': return 'scroll-scale-in';
      case 'rotate': return 'scroll-rotate-in';
      case 'blur': return 'scroll-blur-in';
      case 'bounce': return 'scroll-bounce-in';
      default: return 'scroll-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
