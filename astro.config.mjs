// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({
		webAnalytics: { enabled: true }
	}),
	integrations: [
		starlight({
			title: 'fluxp',
			logo: {
				src: './public/favicon.svg',
			},
			description: '中文前端技术知识库',
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' }
			},
			customCss: [
				'./src/styles/tailwind.css',
				'./src/styles/custom.css',
			],
			components: {
			},
			expressiveCode: {
				themes: ['github-dark', 'github-light']
			},
			sidebar: [
				{ label: '首页', link: '/' },
				{
					label: 'JavaScript',
					collapsed: true,
					items: [{ autogenerate: { directory: 'js' } }]
				},
				{
					label: 'TypeScript',
					collapsed: true,
					items: [{ autogenerate: { directory: 'ts' } }]
				},
				{
					label: 'React',
					collapsed: true,
					items: [{ autogenerate: { directory: 'react' } }]
				},
				{
					label: 'Vue',
					collapsed: true,
					items: [{ autogenerate: { directory: 'vue' } }]
				},
				{
					label: 'CSS & Tailwind',
					collapsed: true,
					items: [{ autogenerate: { directory: 'css' } }]
				},
				{
					label: 'Next.js',
					collapsed: true,
					items: [{ autogenerate: { directory: 'nextjs' } }]
				},
				{
					label: 'Flutter',
					collapsed: true,
					items: [{ autogenerate: { directory: 'flutter' } }]
				},
				{
					label: '前端性能',
					collapsed: true,
					items: [{ autogenerate: { directory: 'performance' } }]
				},
				{
					label: 'Interview',
					collapsed: true,
					items: [{ autogenerate: { directory: 'Interview' } }]
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: {
		enabled: false
	}
});
