const argv = require('./config/yargs').argv;

console.log(argv);

switch (command) {
    case 'create':
        console.log('create task to do')
        break;

    case 'read':
        console.log('list all task to do')
        break;

    case 'update':
        console.log('Update task to do')
        break;

    default:
        console.log('Unrecognized command');
}
