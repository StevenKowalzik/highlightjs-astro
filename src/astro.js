/*
Language: Astro
Requires: xml.js, javascript.js, typescript.js, css.js
Author: Steven Kowalzik
Description: Astro Files
*/

export function hljsDefineAstro(hljs) {
  console.log("Loading Astro language definition");
  return {
    subLanguage: "xml",
    contains: [
      hljs.COMMENT("<!--", "-->", {
        relevance: 10,
      }),
      {
        begin: /^(\s*)(---)/gm,
        end: /^(\s*)(---)/gm,
        subLanguage: "typescript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style(\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "css",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<script>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true,
      },
    ],
  };
}

