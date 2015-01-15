
var formattedName = HTMLheaderName.replace('%data%', 'Ralph Reid');

var formattedRole = HTMLheaderRole.replace('%data%', 'Software Engineer');

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
