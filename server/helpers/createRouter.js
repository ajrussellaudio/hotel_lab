const express = require("express");

function createRouter(collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
  });

  return router;
}

module.exports = createRouter;
