# jpScrollDirection
Simple helper listener to determine if the user is scrolling up or down.

## Import example
Include jp_scrollDirection in your own project.
```
import { jp_scrollDirection } from 'jpScrollDirection.js';
```

## Example usage
```
window.addEventListener( 'scroll', () => {
	console.log( 'jp_scrollDirection = ', jp_scrollDirection );

	if ( jp_scrollDirection === 'up' ) {
		// do something on scroll up
	} else if ( jp_scrollDirection === 'down' ) {
		// do something on scroll down
	}

}, { passive: true } );
```

## Demo
[Scroll direction demo here.](https://html-preview.github.io/?url=https://github.com/sparkjames/jpScrollDirection/blob/main/dist/test.html)
