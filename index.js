// Import jp_scrollDirection like this into your own project.
import { jp_scrollDirection } from './src/jpScrollDirection.js';

// Use a scroll listener and check if jp_scrollDirection is 'up' or 'down'.
window.addEventListener('scroll', () => {
	console.log('jp_scrollDirection = ', jp_scrollDirection);
}, {passive:true});
