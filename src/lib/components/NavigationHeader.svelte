<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  import { Menu, X } from 'lucide-svelte';
  import { headerHeight } from '../stores/headerHeight';
  import Logo from './Logo.svelte';

  let menuOpen = $state(false);
  let navElement: HTMLElement;

  $effect(() => {
    if (navElement) {
      const observer = new ResizeObserver(() => {
        headerHeight.set(navElement.offsetHeight);
      });
      observer.observe(navElement);
      return () => observer.disconnect();
    }
  });

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element && navElement) {
      const headerOffset = navElement.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
      menuOpen = false; // Close menu after clicking a link
    }
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav bind:this={navElement} class="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md dark:shadow-lg py-4 z-20">
  <div class="container mx-auto flex justify-between items-center max-w-4xl px-8">
    <div class="flex items-center">
      <a href="#top" onclick={(event) => { event.preventDefault(); scrollToSection('about'); }}>
        <Logo class="h-8 w-auto" />
      </a>
    </div>

    <!-- Hamburger menu button for small screens -->
    <div class="md:hidden flex items-center">
      <ThemeToggle />
      <button onclick={toggleMenu} class="ml-4 text-gray-600 dark:text-gray-300 focus:outline-none">
        {#if menuOpen}
          <X size={28} />
        {:else}
          <Menu size={28} />
        {/if}
      </button>
    </div>

    <!-- Navigation links and ThemeToggle for medium and larger screens -->
    <div class="hidden md:flex items-center space-x-4">
      <ul class="flex space-x-4">
        <li><a href="#about" onclick={(event) => { event.preventDefault(); scrollToSection('about'); }} class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">About</a></li>
        <li><a href="#skills" onclick={(event) => { event.preventDefault(); scrollToSection('skills'); }} class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Skills</a></li>
        <li><a href="#experience" onclick={(event) => { event.preventDefault(); scrollToSection('experience'); }} class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Experience</a></li>
        <li><a href="#education" onclick={(event) => { event.preventDefault(); scrollToSection('education'); }} class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Education</a></li>
        <!-- <li><a href="#projects" onclick={(event) => { event.preventDefault(); scrollToSection('projects'); }} class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Projects</a></li> -->
        <li><a href="#contact" onclick={(event) => { event.preventDefault(); scrollToSection('contact'); }} class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Contact</a></li>
      </ul>
      <ThemeToggle />
    </div>
  </div>

  <!-- Mobile menu (conditionally displayed) -->
  {#if menuOpen}
    <div class="md:hidden mt-4 space-y-2 px-8">
      <ul class="flex flex-col space-y-2">
        <li><a href="#about" onclick={(event) => { event.preventDefault(); scrollToSection('about'); }} class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2">About</a></li>
        <li><a href="#skills" onclick={(event) => { event.preventDefault(); scrollToSection('skills'); }} class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2">Skills</a></li>
        <li><a href="#experience" onclick={(event) => { event.preventDefault(); scrollToSection('experience'); }} class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2">Experience</a></li>
        <li><a href="#education" onclick={(event) => { event.preventDefault(); scrollToSection('education'); }} class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2">Education</a></li>
        <!-- <li><a href="#projects" onclick={(event) => { event.preventDefault(); scrollToSection('projects'); }} class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2">Projects</a></li> -->
        <li><a href="#contact" onclick={(event) => { event.preventDefault(); scrollToSection('contact'); }} class="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2">Contact</a></li>
      </ul>
    </div>
  {/if}
</nav>