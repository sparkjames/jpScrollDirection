var o,n;n=0,window.addEventListener("scroll",function(){try{var e=window.pageYOffset||window.scrollY||document.documentElement.scrollTop;o=e>n?"down":"up",n=e<=0?0:e}catch(o){console.log("Error with scroll direction detection:",o)}return o},{passive:!0}),window.addEventListener("scroll",function(){console.log("jp_scrollDirection = ",o)},{passive:!0});
//# sourceMappingURL=index.js.map
