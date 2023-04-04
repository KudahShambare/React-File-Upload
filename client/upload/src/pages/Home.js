
//ipmort npm libraries

import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


//import firebase libraries

import { storage } from "../firebase/firebase.js";
import { ref, uploadBytes,getDownloadURL,listAll } from "firebase/storage";


const Home = ()=>{

//state
	const [filename,setFilename] = useState("");
const [file,setFile]= useState(null);
const [toUpload,setToUpload] = useState({});
const [imageList,setImageList] = useState([]);


	//FIREBASE LOGIC FOR DOWNLOADING IMAGES

	const allImages = ()=>{
		let tempArr=[]
			const directoryRef = ref(storage,"/React-File-Upload/");
		listAll(directoryRef).then(list=>{

			
		 			list.items.forEach(elem=>{
				getDownloadURL(elem).then(link=>{
			tempArr.push(link)
				})
			})
		 			tempArr = imageList.concat(tempArr);
		 			setImageList(tempArr)
		 			
		 		})

		return tempArr;
	}

useEffect(()=>{
	allImages();
},[imageList])



	
//file changed

const fileChanged = (e)=>{

	e.preventDefault();

	setFile(e.target.files[0]);
	setFilename(e.target.files[0].name)
	
}



//submit
	const handleSubmit = (e)=>{

		e.preventDefault();
		let msg = "Please press ok to confirm the upload";
		if(!window.confirm(msg)){

			setFile(null);
			
		}
		else{

		const formData = new FormData();
		formData.append("file",file);

			setToUpload(formData);

	}


	//firebase logic


	//firebase storage path and name
let randomName = uuidv4(); 
	let path = `/React-File-Upload/${randomName}-${filename}`;
	//console.log(path);

	const storageRef = ref(storage,path);
	
uploadBytes(storageRef, toUpload).then((resp) => {
  console.log('Uploaded a blob or file!');
  //allImages();
})






		}
	

	return <main>
 
 <h1> Upload </h1>

 <form onSubmit={handleSubmit}>

 <input type="file"  name="file" onChange={fileChanged}/>

 <button> Upload </button>
 </form>
 <div id="images">
 </div>
 {imageList.map(pic=>{
 	return <img src={pic} alt=""/>
 })}
	</main>
}
export default Home;