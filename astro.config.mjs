import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://20051201.xyz',
    devToolbar: {
        enabled: false,
    },
    integrations: [sitemap()],
});
