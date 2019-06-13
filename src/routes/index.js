const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.html', { title: 'SoyCapaz', email : ' edgar.perezr@up.ac.pa'});
 });

 router.get('/base.html', (req, res)=>{
    res.render('base.html', { title: 'Rompe Cabezas'});
 });

 router.get('/color.html', (req, res)=>{
   res.render('color.html', { title: 'Colors'});
});

router.get('/ejercicio1.html', (req, res)=>{
   res.render('ejercicio1.html', { title: 'Colors'});
});
router.get('/ejercicio2.html', (req, res)=>{
   res.render('ejercicio2.html', { title: 'Colors'});
});
router.get('/ejercicio3.html', (req, res)=>{
   res.render('ejercicio3.html', { title: 'Colors'});
});
router.get('/ejercicio4.html', (req, res)=>{
   res.render('ejercicio4.html', { title: 'Colors'});
});
router.get('/gallery.html', (req, res)=>{
   res.render('gallery.html', { title: 'Colors'});
});
router.get('/paint.html', (req, res)=>{
   res.render('paint.html', { title: 'Colors'});
});

 module.exports = router;