import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import type { Action } from 'svelte/action';

export const fadeIn: Action<HTMLElement> = (node) => {
  const animation = gsap.from(node, {
    autoAlpha: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
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
}
