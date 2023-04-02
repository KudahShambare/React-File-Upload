
//imort npm libraries

import {useState,useEffect} from "react";

const Home = ()=>{

const [data,setData] = useState("");
const [file,setFile]= useState();

useEffect(()=>{
	fetch("/upload",{
		"method":"POST",
		"body":{file}
	}).then(resp =>{
		return resp.text();
	}).then(str =>{
		setData(str);
	
	})

	console.log(file);
},[data,file])

//file changed

const fileChanged = (e)=>{

	e.preventDefault();

	setFile(e.target.files[0].name);
	
}



//submit
	const handleSubmit = ()=>{
		let msg = "Please press ok to confirm the upload";
		if(window.confirm(msg)){

			console.log(data)
			
		}
		
	}

	return <main>
 
 <h1> Upload </h1>

 <form onSubmit={handleSubmit}>

 <input type="file"  name="file" onChange={fileChanged}/>

 <button> Upload </button>


 </form>

	</main>
}
export default Home;