const express = require("express");

function createRouter(collection) {
  const router = express.Router();

  router.get("/", (_req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  });

  router.post("/", (req, res) => {
    const data = req.body;

    collection
      .insertOne(data)
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  });

  return router;
}

module.exports = createRouter;
