<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '../stores/theme';
  import { tsParticles } from '@tsparticles/engine';
  import { loadSlim } from '@tsparticles/slim';
  import type { Container, ISourceOptions } from '@tsparticles/engine';

  let particlesContainer: HTMLElement;
  let particlesInstance: Container | undefined;

  // Function to get particle options based on theme and screen size
  function getParticlesOptions(currentTheme: 'light' | 'dark', isMobile: boolean): ISourceOptions {
    const particleColor = currentTheme === 'dark' ? "#ffffff" : "#333333";
    const lineColor = currentTheme === 'dark' ? "#555555" : "#cccccc";

    return {
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: !isMobile,
            mode: "push",
          },
          onHover: {
            enable: !isMobile,
            mode: "repulse",
          },
          resize: { enable: true },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: lineColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: isMobile ? 0.5 : 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: isMobile ? 30 : 80, // Fewer particles on mobile
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }

  onMount(() => {
    const isMobile = window.innerWidth < 768; // Example breakpoint
    let unsubscribeTheme: () => void;
    let handleResize: () => void;

    (async () => {
      await loadSlim(tsParticles); // Load the slim bundle into tsParticles

      particlesInstance = await tsParticles.load({element: particlesContainer});

      // Update particles when theme changes
      unsubscribeTheme = theme.subscribe(async (currentTheme) => {
        if (particlesInstance) {
          particlesInstance.options.load(getParticlesOptions(currentTheme, isMobile));
          await particlesInstance.refresh();
        }
      });

      // Handle resize to update particle options
      handleResize = () => {
        const newIsMobile = window.innerWidth < 768;
        if (particlesInstance) {
          particlesInstance.options.load(getParticlesOptions($theme, newIsMobile));
          particlesInstance.refresh();
        }
      };
      window.addEventListener('resize', handleResize);
    })();

    return () => {
      if (unsubscribeTheme) unsubscribeTheme();
      if (handleResize) window.removeEventListener('resize', handleResize);
      particlesInstance?.destroy();
    };
  });
</script>

<div bind:this={particlesContainer} id="tsparticles-hero" class="absolute inset-0 z-0"></div>