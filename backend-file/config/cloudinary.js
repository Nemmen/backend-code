const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const cloudinaryConfig = () => {
    try{

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        }); // these three , (cloud_name , api_key , api_secret) we need to define to connect to cloudinary in through this config function...


    }catch(error){
        console.log('Cloudinary connection failed');
    }
}

module.exports = cloudinaryConfig;