// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({
		webAnalytics: { enabled: true }
	}),
	integrations: [
		starlight({
			title: 'fluxp',
			description: '中文前端技术知识库',
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' }
			},
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/Head.astro',
				Header: './src/components/Header.astro',
				Sidebar: './src/components/Sidebar.astro',
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
	devToolbar: {
		enabled: false
	}
});
