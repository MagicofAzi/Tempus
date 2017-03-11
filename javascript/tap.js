


var subjects2 ={
     "Boy/Girl Scout": "Agriculture,Food and Natural Resources",
     "Hand-On Project": "Architecture and Construction",
      "Watch News": "Arts, Audio/Video Technology and Communications",
      "Planning": "Business Management and Administration",
      "Giving Advice": "Education and Training",
      "Manage Money": "Finance",
      "Nurse the Sick": "Health Science",
      "Hosting Events": "Hospitality and Tourism",
      "Edit Software": "Information Technology",
      "Debating": "Law, Public Safety, Corrections and Security",
      "Design Clothes": "Design",
      "Making Posters": "Marketing, Sales and Service",
      "Math Problems": "Science, Technology, Engineering and Mathematics",
      
      
      
      "Tutor Others":"Education and Training",
      "Designing &Build":"Architecture and Construction",
      "Social Medias":"Arts, Audio/Video Technology and Communications",
      "Drawing":"Design",
      "Camping": "Agriculture,Food and Natural Resources",
      "Playing Minecraft":"Science, Technology, Engineering and Mathematics",
      "Repair Computer":"Information Technology",
      "Watch Politics":"Law, Public Safety, Corrections and Security",
      "Leading":"Business Management and Administration",
      "Use Microsoft Office":"Finance",
      "Use Photoshop":"Marketing, Sales and Service",
      "Interact with Animal":"Health Science",
      "Organize Events":"Hospitality and Tourism",
      
      
      
      // https://xkcd.com/208/
      "Rearrange Room":"Architecture and Construction",
      "Teach others":"Education and Training",
      "Make videos":"Arts, Audio/Video Technology and Communications",
      "Shopping":"Design",
      "Recycling":"Agriculture,Food and Natural Resources",
      "Work with numbers":"Finance",
      "Body Fitness":"Health Science",
      "Use Sketchup":"Science, Technology, Engineering and Mathematics",
      "Coding":"Information Technology",
      "Traveling":"Hospitality and Tourism",
      "Manage Work":"Business Management and Administration",
      "Advertise Events":"Marketing, Sales and Service",
      "Student Goverment":"Law, Public Safety, Corrections and Security",
      

};

var nxtWords = 13;
var numButtons = 13;
var keys = Object.getOwnPropertyNames(subjects2);
window.onload = function() {
    console.log('keys are', keys);
    // document.getElementById("category").innerHTML = keys[0];
    for ( var i = 0; i < numButtons; i++ ){
        console.log('button ', i, keys[i], document.getElementById('button' + i));
        document.getElementById("button" + (i+1)).textContent = keys[i];
    }
};
 
function nextPg() {
    console.log('next page');
     for ( var i = nxtWords; i < nxtWords + numButtons && i < keys.length; i++ ){
         var btn = document.getElementById("button" + (i%numButtons + 1));
         btn.classList.remove("selected");
         console.log('button is', i, keys[i], btn);
         btn.textContent = keys[i];
     }
     nxtWords = nxtWords + numButtons ;
      if ( nxtWords > keys.length) {
        var scoreString = JSON.stringify(fields);
        //var yourCareer = getCareerChoice(scoreString);
        window.sessionStorage.setItem("fields", scoreString);
        alert("You have completed the Dream Factory!");
        window.location = 'result.html'; // Last page in the sequence //
    }
}



var scoreString = window.sessionStorage.getItem("fields")
console.log(scoreString)
var fields = JSON.parse(scoreString)|| {};
//console.log(JSON.stringify(fields));
function onTap(click_id) {
    //console.log(fields)
    var selector = "button[id='" + click_id + "']";
    var element = document.querySelector(selector);
    var Button_name = element.textContent.trim();
    var career = subjects2[Button_name];
    var classList = element.classList;
    if (!fields[career]) {
        fields[career] = 0;
    }
    if (classList.contains("selected")) {
        classList.remove("selected");
        fields[career] -= 1;
    } else {
        classList.add("selected");
        fields[career] += 1;
        
    }
    
   
   console.log(career);
    console.log("Value of " + career + " is " + fields[career]);
    
  
    
    
   
}