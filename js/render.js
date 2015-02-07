function displayWork() {
  for (job in work.jobs) {
    // create new dive for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]
      .employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
  }
}

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
      project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
      project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",
      projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[
          project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

$('#main').append(internationalizeButton);

// plot map of places I have worked
$("#mapDiv").append(googleMap);



// Above created during lessons
// Below created after lessons


bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  $(formattedHeaderRole).insertAfter($("#name"));

  for (var contact in bio.contacts) {
    if (bio.hasOwnProperty("contacts")) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
      var formattedContact = formattedContact.replace("%data%", bio.contacts[
        contact]);
      $("#topContacts").append(formattedContact);
    }
  };

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  $("#header").append(HTMLskillsStart);
  for (var skill in bio.skills) {
    if (bio.hasOwnProperty("skills")) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};



// Call functions to render data - created during lessons

displayWork();
projects.display();

// Call functions to render data

bio.display();
