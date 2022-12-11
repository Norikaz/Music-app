const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require('../middlewares/authentication');
const { Rating } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/rating
//    POST   /api/rating
//    GET    /api/ratings/:id
//    PUT    /api/ratings/:id
//    DELETE /api/ratings/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /ratings comes from the file ./api/controllers/index.js

router.get("/", (req, res) => {
  Rating.findAll({}).then((allPosts) => res.json(allPosts));
});

router.post("/", passport.isAuthenticated(), (req, res) => {
  let { rating } = req.body;

  Rating.create({ rating })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Rating.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Rating.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.rating = req.body.rating; 
    
    mpost
      .save()
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Rating.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;