export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/favicon.png","assets/images/illustration.png","assets/images/zelda-dark-world.png","assets/images/zelda-light-world.png","assets/layers/1-landscape@2x.avif","assets/layers/2-plateau@2x.avif","assets/layers/3-astronaut-1@2x.avif","assets/layers/4-astronaut-2@2x.avif","assets/layers/5-plants-1@2x.avif","assets/layers/6-plants-2@2x.avif","assets/screenshots/annotations.png","assets/screenshots/back-to-top.png","assets/screenshots/consent.png","assets/screenshots/content-tabs-link.png","assets/screenshots/content-tabs.png","assets/screenshots/creating-your-site.png","assets/screenshots/feedback-report.png","assets/screenshots/hide-navigation-toc.png","assets/screenshots/hide-navigation.png","assets/screenshots/hide-toc.png","assets/screenshots/language-selection.png","assets/screenshots/navigation-expand.png","assets/screenshots/navigation-index-off.png","assets/screenshots/navigation-index-on.png","assets/screenshots/navigation-path-off.png","assets/screenshots/navigation-path-on.png","assets/screenshots/navigation-sections.png","assets/screenshots/navigation-tabs-collapsed.png","assets/screenshots/navigation-tabs-sticky.png","assets/screenshots/navigation-tabs.png","assets/screenshots/navigation.png","assets/screenshots/search-highlighting.png","assets/screenshots/search-share.png","assets/screenshots/search-suggestions.png","assets/screenshots/social-cards-accent.png","assets/screenshots/social-cards-debug.png","assets/screenshots/social-cards-invert.png","assets/screenshots/social-cards-layer-0.png","assets/screenshots/social-cards-layer-1.png","assets/screenshots/social-cards-layer-2.png","assets/screenshots/social-cards-layer-3.png","assets/screenshots/social-cards-layer-4.png","assets/screenshots/social-cards-layer-5.png","assets/screenshots/social-cards-layer-background-color.png","assets/screenshots/social-cards-layer-background-image.png","assets/screenshots/social-cards-layer-background.png","assets/screenshots/social-cards-layer-icon-circles.png","assets/screenshots/social-cards-layer-icon.png","assets/screenshots/social-cards-layer-size.png","assets/screenshots/social-cards-layer-typography-align.png","assets/screenshots/social-cards-layer-typography-ellipsis.png","assets/screenshots/social-cards-layer-typography-shrink.png","assets/screenshots/social-cards-layer-typography.png","assets/screenshots/social-cards-variant.png","assets/screenshots/social-cards.png","assets/screenshots/tags-index.png","assets/screenshots/tags-search.png","assets/screenshots/tags.png","assets/screenshots/toc-integrate.png","assets/screenshots/version-warning.png","assets/screenshots/versioning.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.aWHvbEKV.js","app":"_app/immutable/entry/app.D8ehwUe7.js","imports":["_app/immutable/entry/start.aWHvbEKV.js","_app/immutable/chunks/entry.BOxIQg-A.js","_app/immutable/chunks/scheduler.BcSwBRjs.js","_app/immutable/chunks/index.DXdTaG-u.js","_app/immutable/entry/app.D8ehwUe7.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.BcSwBRjs.js","_app/immutable/chunks/index.BirFgWRL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/archives",
				pattern: /^\/api\/archives\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/archives/_server.ts.js'))
			},
			{
				id: "/[...path]/[page=md]",
				pattern: /^(?:\/(.*))?\/([^/]+?)\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true},{"name":"page","matcher":"md","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: md } = await import ('../output/server/entries/matchers/md.js')
			return { md };
		},
		server_assets: {}
	}
}
})();
