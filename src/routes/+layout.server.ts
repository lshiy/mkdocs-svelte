import { UAParser } from 'ua-parser-js';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ request }) {
  const parser = new UAParser(request.headers.get('user-agent')||'unknown');
  const uaparser = parser.getResult();
  
  return {uaparser};
};