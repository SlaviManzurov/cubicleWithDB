const Cube = require('../models/Cube')
const fs = require('fs/promises')
const path = require('path')
const productData = require('../data/productData')


function getAll(query) {
    //let result = Cube.getAll()
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
    // return Cube.getOne(id)
}

function createProduct(data) {
    let cube = new Cube(data)

    // return productData.create(cube)
    return cube.save()
}

module.exports = {
    getOne,
    getAll,
    createProduct,
};
