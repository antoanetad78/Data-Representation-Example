const express = require("express");
const router = express.Router();
const Sample = require("../models/sample");
const mongoose = require("mongoose");

// GET  get all values in a variable

router.get("/:varName", async (req, res) => {
  try {
    const varName = req.params.varName;
    const foundVar = await Sample.find({}, { [varName]: 1, _id: 0 });
    const data = foundVar.map((el, index) => {
      return { x: index, y: el[varName] };
    });

    return res.json(data);
  } catch (error) {
    console.error("Error GET: ", error.message);
  }
});

module.exports = router;
