const argv = require('./config/yargs').argv;
const colors = require('colors');

const {create, getList} = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let toDo = create(argv.description);

        console.log(toDo)
        break;

    case 'read':
        let list = getList();

        for (let task of list) {
            console.log('=======Task========'.green)
            console.log(`Description: ${task.description}`);
            console.log(`Status: ${task.completed}`.green);
            console.log('==================='.green)
        }
        break;

    case 'update':
        console.log('Update task to do')
        break;

    default:
        console.log('Unrecognized command');
}
