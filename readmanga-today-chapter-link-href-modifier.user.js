// ==UserScript==
// @namespace    https://github.com/Jeni4/readmanga.today-chapter-link-href-modifier
// @updateURL    https://github.com/Jeni4/readmanga.today-chapter-link-href-modifier/raw/master/readmanga-today-chapter-link-href-modifier.user.js
// @downloadURL  https://github.com/Jeni4/readmanga.today-chapter-link-href-modifier/raw/master/readmanga-today-chapter-link-href-modifier.user.js
// @name         ReadManga.Today chapters container href modifier
// @version      0.1.1.4
// @description  Modifies the chapter link to go directly to the full chapter page (insted of just loading the first image of the chapter)
// @license      Creative Commons Attribution-Share Alike http://creativecommons.org/licenses/by-sa/3.0/
// @copyright    
// @match        http://www.readmanga.today/
// @match        http://readmanga.today/
// @grant        none
// ==/UserScript==

var mangaTitles = document.querySelectorAll( '.manga_updates a.manga_info' );
var mangaChapters = document.querySelectorAll( '.manga_updates dl dd a' );

for (var i=0; i<mangaTitles.length; i++) {
	mangaTitles[i].href = mangaTitles[i].href + '#chapters_container';
}

for (var j=0; j<mangaChapters.length; j++) {
	mangaChapters[j].href = mangaChapters[j].href + '/all-pages';
}
