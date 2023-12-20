/* eslint-disable prefer-template */
const multer = require("multer");
//import  mime  from "mime";
const mime = require('mime-types');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        //"jpg"
        //mime.getExtension(file.mimetype)
        mime.lookup(file)
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
