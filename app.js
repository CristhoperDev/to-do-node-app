const argv = require('./config/yargs').argv;
const colors = require('colors');

const {create, read, update, deleteTask} = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let toDo = create(argv.description);

        console.log(toDo)
        break;

    case 'read':
        let list = read();

        for (let task of list) {
            console.log('=======Task========'.green)
            console.log(`Description: ${task.description}`);
            console.log(`Status: ${task.completed}`);
            console.log('==================='.green)
        }
        break;

    case 'update':
        let completed = update(argv.description, argv.completed);
        console.log(completed);
        break;

    case 'delete':
        let deleted = deleteTask(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Unrecognized command');
}
