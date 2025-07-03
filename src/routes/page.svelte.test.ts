import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';
import data from '../lib/data.json';

describe('/+page.svelte', () => {
	it('should render h1 with name', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
		await expect.element(heading).toHaveTextContent(data.name);
	});

	it('should render title', async () => {
		render(Page);
		const title = page.getByText(data.title);
		await expect.element(title).toBeInTheDocument();
	});

	it('should render all main sections', async () => {
		render(Page);

		await expect.element(page.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
		await expect.element(page.getByRole('heading', { name: /Experience/i })).toBeInTheDocument();
		await expect.element(page.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
		await expect.element(page.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
		await expect.element(page.getByRole('heading', { name: /Contact/i })).toBeInTheDocument();

		if (data.projects.length > 0) {
			await expect.element(page.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
		}
	});
});