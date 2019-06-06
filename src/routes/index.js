const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.html', { title: 'SoyCapaz', email : ' edgar.perezr@up.ac.pa'});
 });

 router.get('/base.html', (req, res)=>{
    res.render('base.html', { title: 'Rompe Cabezas'});
 });

 module.exports = router;