const express = require('express')


const createRouter = function(data) {
  const router = express.Router()

  router.get('/', (req, res) => { //first is the api or path where it will live and the second argu is the call back
    res.json(data)  // here it comverts our data objects into json or into json objects/// ('/api/data/:id', (req, res) used to be like that
  })

  //GET BY ID
  router.get('/:id', (req, res) => {
    res.json(data[req.params.id])  //also =[0] req because is how we called in the first api
  })   //this :id is just a placeholder data use to be 'teas'


  //ADD an Object  used to be app.post
  router.post('/', (req, res) => {
    // console.log('req.body', req.body); // this first to see if works
    data.push(req.body)  //here we piush into the array and show all data after that.
    res.json(data)
  })

  //DELETE BY ID

  router.delete('/:id', (req, res) => { //resques and the respond object
    data.splice(req.params.id, 1)
    res.json(data)
  })

  //UPDATE BY ID (here is replace by insomia)

  router.put('/:id', (req, res) => {
    const updatedBody = req.body
    data[req.params.id] = updatedBody
    res.json(data)
  })

  return router
}


module.exports = createRouter;
//with this we can use everywhere else.
