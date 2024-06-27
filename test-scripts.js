import { jp_scrollDirection } from './jpScrollDirection.js';

window.addEventListener('scroll', () => {
	console.log('jp_scrollDirection = ', jp_scrollDirection);
}, {passive:true});
