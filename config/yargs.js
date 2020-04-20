const description = {
    demand: true,
    alias: 'd',
    description: 'Task description to do'
};

const completed = {
    alias: 'c',
    default: true,
    description: 'Mark task as completed or pending'
};

const argv = require('yargs')
            .command('create', 'Create task to do', {
                description
            })
            .command('update', 'Update task to do', {
                description,
                completed
            })
            .command('delete', 'delete task to do', {
                description
            })
            .help()
            .argv;

module.exports = {
    argv
};
