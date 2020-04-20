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

module.exports = {
    create
};
