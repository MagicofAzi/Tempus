 ////   TEMPLATE 1   ////

var subjects = {
    
    "Earth Science": "Agriculture,Food and Natural Resources",
    "Math": "Architecture and Construction",
    "Journalism": "Arts, Audio/Video Technology and Communications",
    "Entrepr- enurship": "Business Management and Administration",
    "Public Speaking": "Education and Training",
    "Economics": "Finance",
    "Biology": "Health Science",
    "Culinary Arts": "Hospitality and Tourism",
    "Computer Science": "Information Technology",
    "Debate": "Law, Public Safety, Corrections and Security",
    "Art": "Design",
    "Web Design": "Marketing, Sales and Service",
    "Science": "Science, Technology, Engineering and Mathematics",
    
    "Teach & Train": "Education and Training",
    "Software Develop- ment": "Information Technology",
    "Liberal Arts": "Arts, Audio/Video Technology and Communications",
    "US Government": "Law, Public Safety, Corrections and Security",
    "Fashion Design": "Design",
    "Food Science": "Hospitality and Tourism",
    "Graphic Design": "Marketing, Sales and Service",
    "Business": "Business Management and Administration",
    "Robotics": "Science, Technology, Engineering and Mathematics",
    "Health": "Health Science",
    "Agricultur- al Science": "Agriculture,Food and Natural Resources",
    "Software Develop- ment": "Information Technology",
    "Geometry": "Architecture and Construction",
    "Personal Finance": "Finance",

};

var index = 0;

var fields = {
    "Agriculture,Food and Natural Resources": 0,
    "Architecture and Construction": 0,
    "Arts, Audio/Video Technology and Communications": 0,
    "Business Management and Administration": 0,
    "Education and Training": 0,
    "Finance": 0,
    "Health Science": 0,
    "Hospitality and Tourism": 0,
    "Information Technology": 0,
    "Law, Public Safety, Corrections and Security": 0,
    "Design": 0,
    "Marketing, Sales and Service": 0,
    "Science, Technology, Engineering and Mathematics": 0
};

var keys = Object.getOwnPropertyNames(subjects);

var numButtons = 13;
console.log('heyyy');
window.onload = function() {
    console.log('keys are', keys);
    index = 0;
    document.getElementById("category").innerHTML = keys[index];
    for ( var i = 1; i <= numButtons; i++ ){
        console.log('button ', i, document.getElementById(i + ''));
        document.getElementById("button" + i).textContent = keys[ i - 1];
    
    }
};

function getCareerChoice(fields) {
    var currentBiggestNumber = 0;
    var currentBiggestCareer = "";
    // Look through all of the careers in "field"s and see compare the values associated with them
    for (var career in fields) {
        // Check if the number associated with this career is greater than any number you have seen yet
        if (currentBiggestNumber < fields[career]) {
            currentBiggestNumber = fields[career]
            currentBiggestCareer = career
        }
    }
    console.log("The biggest career is " + currentBiggestCareer + " which has " + currentBiggestNumber)
    return currentBiggestCareer

};

//the up button
function onClick() {
    var subj = keys[index];
    index += 1;
    document.getElementById("category").textContent = keys[index];
    console.log(subj);
    fields[subjects[subj]] += 1;
    console.log("Value of " + subjects[subj] + " is " + fields[subjects[subj]]);

    // When we've look at all the options
    if (index === keys.length) {
        var scoreString = JSON.stringify(fields);
        console.log(scoreString)
        //var yourCareer = getCareerChoice(scoreString);
        window.sessionStorage.setItem("fields", scoreString);
        alert("You are on your way to find your dream career!");
        window.location = 'tap.html'; // Last page in the sequence //
        
    }
    

}

//the down button
function onClick1() {
    console.log(keys[index])
    index += 1;
    document.getElementById("category").textContent = keys[index];

    // When we've look at all the options
    if (index === keys.length) {
        var scoreString = JSON.stringify(fields);
        console.log(scoreString)
        //var yourCareer = getCareerChoice(fields);
        window.sessionStorage.setItem("fields", scoreString);
        alert("You're on your way to find your dream.");
        window.location = 'tap.html'; // Last page in the sequence//

    }
}











