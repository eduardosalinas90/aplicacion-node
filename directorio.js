var fs = require('fs');
function directorio(page){
fs.readFileSync("public/"+page);
}

exports.directorio=directorio;
