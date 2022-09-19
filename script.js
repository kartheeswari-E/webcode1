//creating dom elements
document.body.innerHTML=`<div id="container"><h2 id="head">Nationalize API</h3>
 <div><input id="txtName" placeholder="search name">
<input id="btnfind" value="🔍" type="button"></div>
<div id="divResult">
</div></div>`
var a=document.getElementById('btnfind')
a.addEventListener('click',async()=>{             //creating a function => when i click the button
    try{
 let response=await fetch("https://api.nationalize.io/"
+"?name="
+txtName.value)                   //fetch API

  
 .then(response=>response.json())    //convert the API data in to json format
   
  .then(data=>showResult(data))
  
}catch(err){                              //use try & catch 
 divResult.innerText="Error:Data Not Found"}
  
})

   async function showResult(data){           //use asyn &await
   try{ 
    const countries=data.country;
       let ol=document.createElement("ol")
        let h3=document.createElement("h3")
        let div=document.createElement("div")
         h3.innerHTML=`<h4>TOP 1:<h4>${regionName.of(countries[0].country_id) }`
        let p=document.createElement("p")
         p.innerHTML=`<h4>probability:<h4>${countries[0].probability}`;
         let h31=document.createElement("h3")
         h31.innerHTML=`<h4>TOP 2:<h4>${regionName.of(countries[1].country_id) }`
        let p1=document.createElement("p")
         p1.innerHTML=`<h4>probability:<h4>${countries[1].probability}`;
        div.append(h3,p,h31,p1)
ol.append(div);
   
    divResult.append(ol)}
   catch(Error){
   
  p.innerHTML="ERROR Data Not Found Please Refresh The Page";
   }
} 

const regionName=new Intl.DisplayNames(['en'],{type:'region'});   //it will use to expand the country name


    