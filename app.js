const argv = require('./config/yargs').argv;

const {create} = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let toDo = create(argv.description);
        console.log(toDo)
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
