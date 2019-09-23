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

function setDetails(updatedUser) {
    updatedUser.password = process.argv[4];
    updatedUser.birthDate = process.argv[5];
    updatedUser.address = process.argv[6];
    updatedUser.city = process.argv[7];
    let users = getUsers();
    users = users.map(function(user) {
        return user.email === updatedUser.email ? user = updatedUser: user;
    });
    fs.writeFileSync('./users.json', JSON.stringify(users));
}

function deleteUserByEmail(email) {
    let users = getUsers();
    users = users.filter(function(user) {
        return user.email !== email;
    });
    fs.writeFileSync('./users.json', JSON.stringify(users));
    return email;
}

function updateUserByEmail(email) {
    let user = getUserByEmail(email);
    setDetails(user);
}

module.exports = {
    getUsers,
    getUserByEmail,
    getEmail,
    deleteUserByEmail,
    updateUserByEmail
}