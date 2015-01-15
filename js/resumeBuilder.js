var bio = {
  "name": "Ralph Reid",
  "role": "Full-Stack Engineer",
  "contacts": {
    "mobileUK": "+447985057831",
    "mobileUSA": "enter here",
    "github": "ralphreid",
    "twitter": "TBC",
    "linkedin": "TBC",
    "location": "San Fransico, Seatle & London"
  },
  "bioPic": "images/me.jpg",
  "welcome message": "put welcolme message here",
  "skills": ["javascript", "html", "ruby", "php"]
};

var work = {};
work.position = "Software Engineer";
work.employer = "POD Point"
work.years = 1;


var education = {};
education["name"]="University of Illinois";
education["years"] = "1993 - 1998";
education["city"] = "Champaign, IL, USA"


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

$("#main").append(work["position"]);
$("#main").append(education.name);


// console.log(bio.skills);
