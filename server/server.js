// import npm packages

const express = require("express");
const upload = require("express-fileupload");

const app = express();


app.post("/upload",(req,resp)=>{

console.log(req.body.file);
	resp.status(200).send("Hello from server");
	//if an error

	//resp.status(500).send("An unexpected error occured, please try again. If the problem persists please contact the server admin at: <kuda.dev263@gmail.com>");
})



app.listen(5000,()=>{
	console.log("Server started");
})



