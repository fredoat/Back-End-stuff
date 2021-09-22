const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
const langsCode = franc(input);

if (langsCode === 'und') {
    console.log("SORRY COULDN'T FIGURE IT OUT")
} else {
    const language = langs.where('3', langsCode);
    console.log(`Our best guest is : ${language.name}`)
}