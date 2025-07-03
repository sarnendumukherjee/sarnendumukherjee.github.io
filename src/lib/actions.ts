import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import type { Action } from 'svelte/action';

interface AnimateOnScrollOptions {
  y?: number;
  duration?: number;
  stagger?: number;
}

export const animateOnScroll: Action<HTMLElement, AnimateOnScrollOptions | undefined> = (node, options) => {
  const { y = 50, duration = 1, stagger } = options || {};

  const targets = stagger ? Array.from(node.children) : node;

  const animation = gsap.from(targets, {
    autoAlpha: 0,
    y,
    duration,
    ease: 'power3.out',
    stagger: stagger || 0,
    scrollTrigger: {
      trigger: node,
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });

  return {
    destroy() {
      animation.kill();
    }
  };
};
