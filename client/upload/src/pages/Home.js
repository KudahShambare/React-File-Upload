
//ipmort npm libraries

import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js'


const Home = ()=>{


//state
const [filename,setFilename] = useState("");
const [file,setFile]= useState(null);
const [imageList,setImageList] = useState([]);



// Create a single supabase client for interacting with your database
const publicURL ='https://jnqsuhiisbertffecuxv.supabase.co';
const supabase = createClient(publicURL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucXN1aGlpc2JlcnRmZmVjdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4NjY1MTgsImV4cCI6MTk5NjQ0MjUxOH0.ITrsdzSS1H9iMnuBBMKb2q_rxEbU7HTvea2vj7xxt1k')


//get all videos

const getAllVideos = async ()=>{

	const { data, error } = await supabase.storage.from("photos").list("React-File-Upload");

	if(data){
		let photoLinks = data.map(link=>{
			return `${publicURL}/storage/v1/object/public/photos/React-File-Upload/${link.name}`
		})
		console.log(photoLinks);
		setImageList(photoLinks);
	}else{
		console.log(error);
	}

}
 useEffect(()=>{
 	getAllVideos();
 },[])

	
//file changed

const fileChanged = (e)=>{

	e.preventDefault();

	setFile(e.target.files[0]);
	setFilename(e.target.files[0].name);
	

}








//submit
	const handleSubmit = async (e)=>{

		e.preventDefault();
		let msg = "Please press ok to confirm the upload";
		if(!window.confirm(msg)){

			setFile(null);
			
		}
		else{

const formData = new FormData();
		formData.append("file",file);

	//supabase logic


	//supabase storage path and name
let randomName = uuidv4(); 
	let path = `/React-File-Upload/${randomName}-${filename}`;


const { data, error } = await supabase.storage.from("photos").upload(path,formData);

if(data){
	//console.log(data);
	getAllVideos();
}else{
	console.log(error);
}


}

}

	return <main>
 
 <h1> Upload </h1>

 <form onSubmit={handleSubmit}>

 <input type="file"  name="file" onChange={fileChanged}/>

 <button> Upload </button>
 </form>
 <div id="images">
 {imageList.map((elem,id)=>{
 	return <img key={id} src={elem}/>
 })}
 </div>

	</main>
}
export default Home;