debugger
/**this script will inject the global header into the #gheader div of each page**/



const INJECTION = '  <div id="global-preheader"><div class="bordered"><marquee><h1>Kipton\'s Personal Site</h1></marquee></div></div><div id="global-header"><ul id="nav-list"><li><a href="/hymiller/home.html">Home</a></li><li>Photos<ul><li><a href="/hymiller/photo-albums/index.html">no longer filler</a></li></ul></li><li>Videos<ul><li><a href="#">filler</a></li></ul></li><li>Personal<ul><li><a href="#">filler</a></li></ul></li><li><a href="/hymiller/web-dev">Web Dev</a><ul><li><a href="../wdsub/week1.html">Week 1</a></li><li><a href="../wdsub/recipe.html">Week 2</a></li><li><a href="../wdsub/anchors.html">Week 3</a></li><li><a href="../wdsub/poem.html">Week 4</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/review.html">Week 5</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/Ocean-Occurrences.html">Week 6</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/band-page.html">Week 7</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/to-do-list.html">Week 8</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/pythag.html">Randome</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/quadratic.html">Week 9</a></li><li><a href="https://yacs-2.github.io/hymiller/wdsub/ttt.html">Week 10</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
