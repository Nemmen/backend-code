// cloudnery -> media manageent service that give a cdn url to the image also send email to the user with the image url...

//there are two server one is media and other where our apllication is hosted because this made our application fast and boost its performance ....  we can save the dat on the hosted server but it will increase the load on the server and make the application slow... so we use the media server to store the media files and get the url of the media file and send it to the user...

// we have to use the cloudnery api to upload the image and get the url of the image and send it to the user via email...

// we have to use the nodemailer to send the email to the user...


// we have to use the multer to upload the image on the server and then send it to the media server to store it and get the url of the image and send it to the user via email...

// app create 

const express = require('express');
require('dotenv').config();
const app = express();

PORT = process.env.PORT || 5000;


//middleware
app.use(express.json());

//express ke pass file upload ka koi midleware nahi hota hai toh hume multer ya express-fileuplaod  ka use karna padega...
const fileUpload = require('express-fileupload');

app.use(fileUpload());

//db conect

const connectDB = require('./config/database');

connectDB();

//cloudinary se connect

const cloudConnect = require('./config/cloudinary');
cloudConnect()


//api route mout krna h

const upload = require('./routes/FileUpload');

app.use('/api/v1/upload', upload);


// activate server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})






