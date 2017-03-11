var mentors = [
{
    name: "Joy Tao",
    profileImage: 'img/profile_pic.jpeg',
    profession: "Software Engineer",
    field: "Information Technology",
    email: "jtao@gmail.com"
}, {
    name: "Bill Jones",
    profileImage: 'img/farmer1.jpg',
    profession: 'Farmer',
    field:  "Agriculture,Food and Natural Resources",
    email: 'billyj@farmers.com'
}, {
    name: "Xavier Goldman",
    profileImage: 'img/fin.jpg',
    profession: 'Banker',
    field: "Finance",
    email: 'xavier@gmail.com'
}, {
    name: "Romeo Hernandez",
    profileImage:'img/lawyer.jpg',
    profession:'Lawyer',
    field: "Law, Public Safety, Corrections and Security",
    email: 'rhernandez@lawyer.com'
}, {
    name: "Antonio Chavez",
    profileImage:'img/arch.jpg',
    profession: 'Civil Engineer',
    field: "Architecture and Construction",
    email: 'Antonio@gmail.com'
}, {
    name: "Christopher Nolan",
    profileImage:'img/di.jpg',
    profession: 'Director',
    field: "Arts, Audio/Video Technology and Communications",
    email: 'Christopher@gmail.com'
}, {
    name: "Punya Biswal",
    profileImage:'img/punya.jpg',
    profession: 'Software Developer',
    field: "Science, Technology, Engineering and Mathematics",
    email: 'punya@gmail.com'
}, {
    name: "Harold Turner",
    profileImage:'img/bus.jpg',
    profession: 'Business Man',
    field: "Business Managment and Administration",
    email: 'harold@gmail.com'
}, {
    name: "Tyrone Willis",
    profileImage:'img/teach.jpg',
    profession: 'Teacher',
    field: "Education and Training",
    email: 'Tyrone@gmail.com'
}, {
    name: "Matthew McConaughey",
    profileImage:'img/sport.jpg',
    profession: 'Sports Doctor',
    field: "Health Science",
    email: 'Mathew@gmail.com'
}, {
    name: "Carmen Davis",
    profileImage:'img/hos.jpeg',
    profession: 'Hostess',
    field: "Hospitality and Tourism",
    email: 'carmen@gmail.com'
}, {
    name: "Tina Parker",
    profileImage:'img/des.jpg',
    profession: 'Interior Designer',
    field: "Design",
    email: 'punya@gmail.com'
}, {
    name: "Jake Goldbert",
    profileImage:'img/acc.jpg',
    profession: 'Accounant',
    field: "Marketing, Sales and Service",
    email: 'jake@gmail.com'
}
];

var choosenField = window.sessionStorage.getItem("career") || "Finance";

function createMentor(mentor) {
    console.log('mentor', mentor.name);
    var d = document.createElement('div');
    d.innerHTML = '<div class="profile-image" style="background-image: url(\'' + 
        mentor.profileImage +'\')"></div>'  + 
         '<div class=info>' + '<div class=name>'+ mentor.name +'</div>' + 
            '<div class=field>' + mentor.field + '</div>' +
              '<div class=prof>' + mentor.profession + '</div>' + 
              '<div class=email>' + mentor.email + '</div>'
             + '</div>';
    d.classList.add('mentor');
    console.log('document', document.body);
    document.querySelector('body').appendChild(d);
};

window.onload = function() {
    var choosenMentor = null;
    var choosenMentorIndex = -1;
    for ( var i=0; i < mentors.length; i++){
        if (mentors[i].field == choosenField) {
            choosenMentorIndex = i;
            choosenMentor = mentors[i];
            break;
        }
    }
    if (choosenMentorIndex >= 0) {
        mentors.splice(choosenMentorIndex, 1);
        mentors.unshift(choosenMentor);
    }
    for ( var i=0; i < mentors.length; i++){
        createMentor(mentors[i]);
    }
};