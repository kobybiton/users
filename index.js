const {writeFileSync} = require('fs');
const {getUsers, getUserByEmail, getEmail} = require('./users');
const {setPunch} = require('./punch');

function setUser(user) {
    const users = getUsers();
    users.push(user);
    writeFileSync('./users.json', JSON.stringify(users));
}

function getAction() {
    return process.argv[2];
}

function getDetails() {
    return {
        email: getEmail(),
        password: process.argv[4],
        birthDate: process.argv[5],
        address: process.argv[6],
        city: process.argv[7],
    };
}

const action = getAction();

if(action === 'get') {
    const email = getEmail();
    const user = getUserByEmail(email);
    if(user) {
        console.log(user)
    } else {
        console.log(`ERROR: User with email "${email}" not found`);
    }

} else if(action === 'create') {
    const details = getDetails();
    setUser(details);
    console.log('successfuly saved!', details)
} else if(action === 'punch') {
    setPunch();
}

/* homework

delete
update

 */