const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();
      // index
    router.get('/', (req, res) => {
        collection
          .find()
          .toArray()
          .then((results) => res.json(results))
      });
      // find by id
      router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
          .findOne({ _id: ObjectID(id) })
          .then((result) => res.json(result))
      });
      // create new
      router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => res.json(result.ops[0]))
      });
      // delete one by id
      router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectID(id) })
        .then(result => res.json(result))
      });
      // edit by id ..............................................................waiting.............................come on Holly.............................why have I been left out?.....................................I am so lonely..........................so very lonely........................................
      router.put('/:id', (req, res) => {
        const id = req.params.id;
        const newData = req.body;
        collection.updateOne(
          {_id: ObjectID(id)},
          {$set: newData})
          .then(result => res.json(result));
      })
    
      return router;
};
    
module.exports = createRouter;