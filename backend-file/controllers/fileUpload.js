const File  = require('../models/fileUpload');

//pwd command in cmd and terminal show curent directory
//local file upload handle -- >

exports.localFileUpload = async (req, res) => {
  try{
      // if u want to fetch the file from the request body then u need to follow a certain hierichy of the request body that is "req.files.file"
      if (!req.files || !req.files.file) {
        return res.status(400).json({
            status: false,
            message: 'No file uploaded'
        });
    } //  check if it exext or not above

      const file = req.files.file; // this is how... u can fetch the file from the request body
      console.log("file --> ",file);
  
      //now we need to know the path where we want to store the file
  
      let path  = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`   // __dirname is the current directory where the file it is written is stored , date.now is used to make the file name unique as it will diffrent every time
      console.log("path --> ",path);
      //now we need to move the file to the path as it is needed
  
      file.mv(path, (err) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: err.message
            });
        }
        // File moved successfully, send success response but there is no extenstion so it will not know what type of file it is there , for we need know what type of file it is we need to use the file extension that can be taken from the file name as method above
    });
  
      //now we need to send the response to the client that the file has been uploaded successfully
      res.json({
          status : true,
          message : "file uploaded successfully"
      })
  }catch(e){
    res.status(500).json({
        status:false ,
        message: e.message});
  }

}