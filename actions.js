const action = process.argv[2];
const password = process.argv[3] || 1;
const age = process.argv[4] || 1;

console.log(require('./' + action)(name, password, age));