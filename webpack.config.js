var path = require('path');

function buildConfig(env) {
    return require(path.resolve(__dirname, 'build.' + env + '.js'));
}

module.exports = buildConfig;
