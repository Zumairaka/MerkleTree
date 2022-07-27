const crypto = require('crypto');

// hash the data and return the hex string
function hash(data) {
    return data != 'null' ? crypto.createHash('sha256').update(data.toString()).digest('hex') : '';
}

// export the function hash
module.exports = hash;