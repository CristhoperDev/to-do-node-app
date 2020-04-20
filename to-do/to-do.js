const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('File could not save', err);
    });
};

const loadDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (e) {
        toDoList = [];
    }
}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);

    saveDB();

    return toDo;
}

const read = () => {
    loadDB();
    return toDoList;
}

const update = (description, completed = true) => {
    loadDB();

    let index = toDoList.findIndex(task => task.description === description);

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false
    }
}

module.exports = {
    create,
    read,
    update
};
