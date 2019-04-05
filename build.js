const fs = require('fs');
const browserify = require('browserify');
const minify = require("babel-minify");

(async () => {
	const name = JSON.parse(fs.readFileSync('package.json', 'utf-8')).name;

	await (() => new Promise((resolve, reject) => {
		browserify(['index.js'], { standalone: name })
			.bundle()
			.pipe(fs.createWriteStream(`dist/${ name }.js`))
			.on('finish', resolve);
	}))();

	const plain = fs.readFileSync(`dist/${ name }.js`, 'utf-8');
	const { code } = minify(plain);
	fs.writeFile(`dist/${ name }.min.js`, code, (err) => { if (err) throw err; });
})();
