'use strict';
var http = require('http');
var port = process.env.PORT || 3000;

const Instagram = require('instagram-web-api');
const username = "xxx";
const password = "xxx";

const client = new Instagram({ username, password });



http.createServer(function (req, res) {
    console.log(`Started up at port ${port}`);
    (async () => {
        // URL or path of photo
        const photo = 'https://i.pinimg.com/originals/d0/54/89/d054890aa6a20fe5273d24feff7acc79.jpg';

        await client.login();

        // Upload Photo
        const { media } = await client.uploadPhoto({ photo, caption: 'hey' });
        console.log(media);
    })();
}).listen(port);


