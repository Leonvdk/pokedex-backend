const List = require("../models/lists.model");

const getLists = (request, response, next) => {
  List.getAll((err, results) => {
    err 
    ? (response.status(500).json(err)) 
    : (response.json(results));
    // next();
  },
  request.params );
};

const getList = (request, response, next) => {
  List.getOneList((err, results) => {
    err 
    ? response.status(500).json(err) 
    : next();
  }, request.params);
};

const editList = (request, response) => {
  List.edit(
    (err, res) => {
      err 
      ? res.status(500).json(err) 
      : next()
    },
    request.params,
    request.body
  );
};


const deleteList = (req, res) => {
  List.delete(
    (err, results) => {
      err 
      ? res.status(500).send(err) 
      : next()
    },
    req.params
  );
};

const createList = (req, res, next) =>{
  List.create((err, results) => {
    err
    ? res.status(500).send(err)
    : next();
  }, 
  req.params);
};

module.exports = { getLists, getList, editList, deleteList, createList };
