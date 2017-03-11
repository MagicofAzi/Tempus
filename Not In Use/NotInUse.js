var interest = [ "Earth Science", "Math", "Journalism", "Entreprenurship", "Public Speaking", 
"Economics", "Biology", "Organize Events", "Computer Science", "Debate", "Graphic Design", "Web Design","Physics" ];
// math also gives points to 12, 13 account exec, prod mark, also engineering, sci, math, research, tech//


var index = 0;

var wordAssociations = {
    "Stem":["engineering", "science", "math", "research", "technology"],
    //------
    "Teacher": ["Math", "Science","Earth Science","Economics", "Public Speaking"]};
    





// up button//
var carM = new Map();
carM.set("Stem",0);
carM.set("Education",0);
carM.set("Finance",0);



    
    


function onClick() {
    console.log(interest[index]);
    document.getElementById("category").textContent = interest[index];
    index += 1;
    
    console.log("Value of STEM: " + carM.get("Stem"));
    carM.set("Stem", carM.get("Stem") + 1);
    
    var word = interest[index];
    
    
    
}
        
    
     




//the second buttom
function onClick1(){
    
    console.log(interest[index])
    document.getElementById("category").textContent = interest[index];
    index += 1;
}


   