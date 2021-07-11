const User = require("../models/lists.model");

const getLists = (request, response, next) => {
  User.getAllLists((err, results) => {
    err ? response.status(500).json(err) : response.status(200).json(results),
      next();
  },
  request.params
  );
};

const getList = (request, response, next) => {
  User.getOneList((err, results) => {
    err ? response.status(500).json(err) : response.status(200).json(results),
      next();
  }, request.params);
};

const editList = (request, response) => {
  User.editedList(
    (err, results) => {
      err ? response.status(500).json(err) : response.status(200).json(results)
      
        // next();
    },
    request.params,
    request.body
  );
};

module.exports = { getLists, getList, editList };
