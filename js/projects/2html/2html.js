const fs = require("fs");


if(process.argv[2] === "--help" || process.argv[2] === "-h") {
	console.log(`Usage: node 2html [OPTIONS] [FILE] [ENCODING]
Encoding can be ascii, utf-8..., and file has
to be a valid path to a file.

Supported flags:
  -h, --help\tshows you this text.`);
	process.exit(0);
}

let filename = "text.txt"
if(process.argv.length > 2)
	filename = process.argv[2];

let encoding = "ascii";
if(process.argv.length > 3)
	encoding = process.argv[3];

var text;
try {
	text = fs.readFileSync(filename, encoding);
} catch (err) {
	console.error("Error reading file:", err);
	process.exit(1);
}

// successfully read text according to our args
let parity = true; // to differentiate item-a and item-b

// split into paragraphs and cover each paragraph
for(let para of text.split(/\r?\n\s*\r?\n/)) {
	console.log("<div class=\"item-"+(parity?"a":"b")+"\">");
	let lines = para.split(/\r?\n/);
	
	// parse the headers
	let headerText = lines[0];
	let startIndex = 0;
	let headers = "\t<span>";
	for(let endIndex = 0; endIndex <= headerText.length; ++endIndex) {
		if(endIndex === headerText.length){
			headers += headerText.slice(startIndex, endIndex);
			break;
		}
		if(headerText[endIndex] === ' '){
			headers += `${headerText.slice(startIndex, endIndex)}<br>`;
			startIndex = endIndex + 1;
		}
	}
	headers += "</span>";
	console.log(headers);

	process.stdout.write("\t<span>");
	let list = false;
	for(i = 1; i <= lines.length; ++i){
		if(!lines[i]) continue;

		if(lines[i].startsWith('\t')) {
			if ( list === false ) // list (ul) not started
				process.stdout.write("\n\t\t<ul>");
			list = true;

			process.stdout.write("\n\t\t\t<li>");
			process.stdout.write(lines[i].trim());
			process.stdout.write("</li>");
		} else {
			process.stdout.write(lines[i].trim());
		}
	}
	if ( list === true ) // if there was a list in the paragraph
		console.log("\n\t\t</ul>");
	if ( list === true) console.log("\t</span>");
	else console.log("</span>");
	console.log("</div>");
	
	parity = !parity;
}

process.exit(0);
