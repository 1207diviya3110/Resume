function LoadJson(file,callback){
   var a=new  XMLHttpRequest();
   a.overrideMimeType("application/json");
   a.open("GET",file,true);
   a.onreadystatechange=function(){
     if(a.readyState===4 && a.status=="200"){
       callback(a.responseText);
     }
   }
   a.send();
};
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  careerObject(data.co);
  education(data.educationalQualifications);
  technicalskills(data.tech);
  achive(data.Achive);

})
var right= document.getElementById('right');
function careerObject(career){
var careerObj=document.createElement("h4");
careerObj.textContent="Career Object";
careerObj.appendChild(document.createElement("HR"));
var para=document.createElement("p");
para.textContent=career;
right.appendChild(careerObj);
right.appendChild(para);
}
function education(edu){
var Educational=document.createElement("h4");
Educational.textContent="Educational Qualifications :";
Educational.appendChild(document.createElement("hr"));
right.appendChild(Educational);
var para1=document.createElement("p");
var li="";
for ( i in edu) {
  li+=edu[i].name+edu[i].inst+"<br>";
}
para1.innerHTML=li;
right.appendChild(para1);
}
function technicalskills(tec){
  var technical=document.createElement("h4");
  technical.textContent="Technical Skill :";
  technical.appendChild(document.createElement("hr"));
  right.appendChild(technical);
  var para2=document.createElement("p");
  var l2="";
  for (j in tec){
    l2+=tec[j].name+tec[j].value+"<br>";
  }
  para2.innerHTML=l2;
  right.appendChild(para2);
}
function achive(ach){
  var abc=document.createElement("h4");
  abc.textContent="Achivements :";
  abc.appendChild(document.createElement("hr"));
  right.appendChild(abc);
  var para3=document.createElement("p");
  para3.textContent=ach.details;
  right.appendChild(para3);
}
