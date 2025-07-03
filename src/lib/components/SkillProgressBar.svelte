<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let { skillName, proficiency }: { skillName: string; proficiency: number } = $props();

  let progressBar: HTMLElement;

  $effect(() => {
    if (progressBar) {
      gsap.fromTo(progressBar, 
        { width: 0 }, 
        { 
          width: `${proficiency}%`, 
          duration: 1.5, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: progressBar,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  });
</script>

<div class="mb-4">
  <div class="flex justify-between mb-1">
    <span class="text-base font-medium text-gray-700 dark:text-gray-300">{skillName}</span>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{proficiency}%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div
      bind:this={progressBar}
      class="h-2.5 rounded-full bg-blue-700 dark:bg-blue-500"
      style="width: 0%;"
    ></div>
  </div>
</div>