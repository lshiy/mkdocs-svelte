import { writable, type Writable } from "svelte/store";


export const width = writable(0);
export const breakpoint = writable('');
export const breakpoints = {
  'xs': 379,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536
};
export const uaparser:Writable<UAParser.IResult> = writable();


export const widthUnsubscribe = width.subscribe(val=>{
  let type = 'xs';
  if(val>=379){type = 'sm';}
  if(val>=768){type = 'md';}
  if(val>=1024){type = 'lg';}
  if(val>=1280){type = 'xl';}
  if(val>=1536){type = '2xl';}
  breakpoint.set(type);
});