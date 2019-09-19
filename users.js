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

function deleteUserByEmail(email) {
    let users = getUsers();
    users.filter(user => user.email != email);
    users = users.filter(function(user) {
        return user.email !== email;
    });
    fs.writeFileSync('./users.json', JSON.stringify(users));
    return email;
}

module.exports = {
    getUsers,
    getUserByEmail,
    getEmail,
    deleteUserByEmail
}