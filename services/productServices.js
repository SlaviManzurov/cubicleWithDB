const Cube = require('../models/cube')
const uniqid = require('uniqid')
const fs = require('fs')
const path = require('path')

let productData = require('../config/database.json')

function getAll(query) {
    let result = productData
    
    if (query.search){
        result = result.filter(x => x.name.toLocaleLowerCase().includes(query.search))
    }

    if (query.from) {
        result = result.filter(x => Number(x.level) >= query.from)
    }

    if (query.to) {
        result = result.filter(x => Number(x.level) <= query.to)
    }

    return result
}

function getOne(id) {
    return  productData.find(x => x.id == id)
}

function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )

    productData.push(cube)
    console.log(cube);

    fs.writeFile(__dirname + '/../config/database.json', JSON.stringify(productData),(err) => {
        if (err) {
            console.log(err);
            return
        }
    })
}

module.exports = {
    getOne,
    getAll,
    createProduct,
};
