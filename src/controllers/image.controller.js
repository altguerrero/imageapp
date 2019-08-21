const path = require("path");
const { randomNumber } = require("../helpers/libs");
const fs = require("fs-extra");
const { Image } = require("../models/");

const ctrl = {};

ctrl.index = (req, res) => {};

ctrl.create = async (req, res) => {
  const imgUrl = randomNumber();
  const ext = path.extname(req.file.originalname).toLowerCase();
  const imageTempPath = req.file.path;
  const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

  if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".gif") {
    await fs.rename(imageTempPath, targetPath);

    const newImage = new Image({
      title: req.body.title,
      description: req.body.description,
      filename: imgUrl + ext
    });

    const imageSaved = await newImage.save();

    res.send("yolo");
  } else {
    await fs.unlink(imageTempPath);
    res.status(500).json({ error: "Solo puedes subir imagenes"});
  }
};

ctrl.like = (req, res) => {};

ctrl.comment = (req, res) => {};

ctrl.remove = (req, res) => {};

module.exports = ctrl;
