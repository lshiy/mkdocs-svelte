

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C16qLf2q.js","_app/immutable/chunks/scheduler.BcSwBRjs.js","_app/immutable/chunks/index.BirFgWRL.js","_app/immutable/chunks/index.DXdTaG-u.js"];
export const stylesheets = ["_app/immutable/assets/0.DaBc_Ak1.css"];
export const fonts = [];
