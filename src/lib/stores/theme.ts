import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const userPrefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme: Theme = typeof localStorage !== 'undefined' && localStorage.getItem('theme') as Theme || (userPrefersDark ? 'dark' : 'light');

export const theme = writable<Theme>(initialTheme);

theme.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', value);
  }
  if (typeof document !== 'undefined') {
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

export function toggleTheme() {
  theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
}