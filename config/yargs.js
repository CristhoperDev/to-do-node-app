const argv = require('yargs')
            .command('create', 'Create task to do', {
                description: {
                    demand: true,
                    alias: 'd',
                    description: 'Task description to do'
                },
            })
            .command('update', 'Update task to do', {
                description: {
                    demand: true,
                    alias: 'd',
                    description: 'Task description to do'
                },
                completed: {
                    alias: 'c',
                    default: true,
                    description: 'Mark task as completed or pending'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
};
