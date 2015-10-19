var express = require('express');
var upload = require('jquery-file-upload-middleware');
var router = express.Router();

upload.configure({
    uploadDir: __dirname + '/public/uploads',
    uploadUrl: '/uploads',
    imageVersions: {
        thumbnail: {
            width: 80,
            height: 80
        }
    }
});

app.use('/upload', upload.fileHandler());

module.exports = router;
