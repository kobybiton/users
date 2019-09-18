const fs = require('fs');

function getUsers() {
    return JSON.parse(fs.readFileSync('./users.json').toString());
}

function getEmail() {
    return process.argv[3];
}

function getUserByEmail(email) {
    return getUsers().find(user => user.email === email);
}

module.exports = {
    getUsers,
    getUserByEmail,
    getEmail
}