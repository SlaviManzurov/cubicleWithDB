const fs = require('fs/promises')
const path = require('path')
let productsDB = require('../config/database.json')


class Cube {
    constructor(id, name, description, imageUrl, level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.level = level;
    }

    save() {
        productsDB.push(this)

        return fs.writeFile(
            path.join(__dirname, '../config/database.json'),
            JSON.stringify(productsDB)
        )
    }
}

module.exports = Cube;
