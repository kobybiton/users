const {readFileSync, writeFileSync} = require('fs');
const {getEmail} = require('./users');

function getPunches() {
    return JSON.parse(readFileSync('./punches.json').toString());
}

function setPunch() {
    const punches = getPunches();
    punches.push({
        email: getEmail(),
        type: getPunchType(),
        created: new Date()
    });
    return writeFileSync('./punches.json', JSON.stringify(punches));
}

function getPunchType() {
    // homework - validate if checkin or checkout
    return process.argv[4] || 'check-in';
}

module.exports = {
    setPunch
}

