<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let { class: className = '' }: { class?: string } = $props();
  let pathElement: SVGPathElement;

  $effect(() => {
    if (pathElement) {
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = String(length);
      pathElement.style.strokeDashoffset = String(length);

      gsap.to(pathElement, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pathElement,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }
  });
</script>

<div class="flex justify-center my-12">
  <svg
    class="w-full h-8 {className}"
    viewBox="0 0 100 10"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      bind:this={pathElement}
      d="M0 5 Q25 0 50 5 T100 5"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
    />
  </svg>
</div>