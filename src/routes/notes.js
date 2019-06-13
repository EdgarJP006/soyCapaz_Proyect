const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/newnote.html', async (req, res)=>{
    const tasks = await Task.find();
    res.render('newnote.html', { title: 'NewNotes', 
        tasks
        });
    }); 

router.post('/add', async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
   res.redirect('/newnote.html') //Redirecciona a la ruta original despues de cargar los datos
});

router.get('/turn/:id', async (req, res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/newnote.html')
})

router.get('/edit/:id', async (req, res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit.html', {
        task
    });
});
//:id es el numero de id en la pagina
router.get('/delete/:id', async (req, res)=>{
    const {id} = req.params;
    await Task.remove({_id: id});
    res.redirect('/newnote.html');
})

module.exports = router;