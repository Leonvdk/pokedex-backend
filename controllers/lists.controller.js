const List = require("../models/lists.model");

const getLists = (request, response, next) => {
  List.getAll((err, results) => {
    err 
    ? (response.status(500).json(err)) 
    : (response.status(200).json(results));
    // next();
  },
  request.params );
};

const getList = (req, res, next) => {
  List.getOneList((err, results) => {
    err 
    ? res.status(500).json(err) 
    : next();
  }, req.params);
};

const editList = (req, res, next) => {
  List.edit(
    (err, results) => {
      err 
      ? res.status(500).json(err) 
      : res.status(200).json(results)
    },
    req.params,
    req.body
  );
};


const deleteList = (req, res, next) => {
  List.delete(
    (err, results) => {
      err 
      ? res.status(500).send(err) 
      : res.status(200).json(results)
    },
    req.params
  );
};

const createList = (req, res, next) =>{
  List.create((err, results) => {
    err
    ? res.status(500).send(err)
    : res.status(200).json(results)
  }, 
  req.params);
};

module.exports = { getLists, getList, editList, deleteList, createList };
