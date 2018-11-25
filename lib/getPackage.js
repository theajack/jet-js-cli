const fs = require('fs');
let package;
try {
    package = JSON.parse(fs.readFileSync('build.config.json'));
} catch (error) {
    package = null;
}

module.exports=package;