const { Router } = require('express')
const dataService = require('../services/productServices')

const router = Router()


router.get('/', (req, res) => {
    let products = dataService.getAll(req.query)
    res.render('home',{products})
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {

    let data = req.body;
    dataService.createProduct(data)
    res.redirect('/')
})

router.get('/details/:productId', (req, res) => {

    let product = dataService.getOne(req.params.productId)
    res.render('details', {product})
})

module.exports = router;