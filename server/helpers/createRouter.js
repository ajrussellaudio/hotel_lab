const express = require("express");
const { ObjectId } = require("mongodb");

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

  router.delete("/:id", (req, res) => {
    const { id } = req.params;

    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  });

  return router;
}

module.exports = createRouter;
