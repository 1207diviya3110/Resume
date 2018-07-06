function LoadJson(file,callback){
   new XMLHttpRequest();
   a.overrideMineType("application/json");
   a.open("GET",file,true);
   a.onreadystatechange=function(){
     if(a.readyState===4 && a.status=="200"){
       callback(a.respnseText);
     }
   }
   a.send(null);
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.co);
})
var right= document.getElementById('right');
