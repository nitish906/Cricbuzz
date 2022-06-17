import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

//clicking on image 
document.querySelector("#navbar1>img").addEventListener("click",function(){
    window.location.href="index.html";
})

import {mynavbar,options} from "../components/mynavbar.js"
import {Display,search} from "../components/mydisplay.js"
document.querySelector("#nav").innerHTML=mynavbar()
document.querySelector("#menu").innerHTML=options()


// Api fetching
let opt=document.querySelector(".opt").children
for(let x of opt)
{
  x.addEventListener("click",myfun)
}
function myfun(){
  console.log(this.id)
  fetching(this.id)
}

const obj = {
	method: 'GET',
	headers: {
    // 'X-RapidAPI-Key': '8ada33f7a4msh0be03f3b54330a5p16bb70jsn33902d224a84',
    //  'X-RapidAPI-Key':'83ffd58a74mshf3760b9b03353d5p156c7ejsn9062730a0266',
     'X-RapidAPI-Key':'1d21170159mshe1410cd117264c9p1243d2jsn40d21f3b067a',
    // 'X-RapidAPI-Key': '06b712a926mshaae67e7d729dc0ap1c8f67jsnd5ae610368c9',
		// 'X-RapidAPI-Key': '29e041dfffmsh0d5e942e769d7b9p1f886fjsnf911f8f57789',
		// 'X-RapidAPI-Key': 'c246932465msh41f44622545ead5p16703ajsn017e47363c1a',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
let matchData1=await fetching("recent")

async function fetching(id){

  let res=await fetch(`https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${id}`, obj)
  let matchData=await res.json()
  Display(matchData.typeMatches[0].seriesMatches)
  return matchData
}



let catg=document.querySelector(".categories").children

for(let z of catg){
  z.addEventListener("click",mainfun)
}
function mainfun(){
  if(this.id=="International"){
        Display(matchData1.typeMatches[0].seriesMatches)
      }
else if(this.id="Domestic"){
        Display(matchData1.typeMatches[1].seriesMatches)
        console.log(matchData1.typeMatches[1].seriesMatches)
      }
  
}
let articals=document.querySelector("#articals")
search("worldcup")

