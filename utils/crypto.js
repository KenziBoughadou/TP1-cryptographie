const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hashed) {
    return await bcrypt.compare(password, hashed);
}

module.exports = { hashPassword, verifyPassword };