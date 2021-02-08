const Cube = require('../models/cube')
const uniqid = require('uniqid')
const fs = require('fs/promises')
const path = require('path')
const productData = require('../data/productData')


function getAll(query) {
    let result = productData.getAll()
    
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
    return productData.getOne(id)
}

function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )

    return productData.create(cube)
}

module.exports = {
    getOne,
    getAll,
    createProduct,
};
