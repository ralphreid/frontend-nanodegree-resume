var bio = {
  "name": "Ralph Reid",
  "role": "Software Engineer",
  "contact info": "ralphreidjr@me.com",
  "pictureURL": "images/me.jpg",
  "welcome message": "put welcolme message here",
  "skills": ["javascript", "html", "ruby", "php"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

// console.log(bio.skills);
