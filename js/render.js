function displayWork() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]
      .employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var dates = work.jobs[job].dateStart + " - " + work.jobs[job].dateEnd;
    var formattedWorkDates = HTMLworkDates.replace("%data%", dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[
        job]
      .location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work
      .jobs[
        job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}

function displayEducation() {
  for (var school in education.schools) {
    if (education.hasOwnProperty("schools")) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[
        school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
        education.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolName +
        formattedSchoolDegree;
      $(".education-entry:last").append(formattedSchoolNameDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[
        school].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
        education.schools[
          school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
        education.schools[
          school].major);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  };

  $("#education").append(HTMLonlineClasses);
  for (var onlineClass in education.onlineClasses) {
    if (education.hasOwnProperty("onlineClasses")) {
      $("#education").append(HTMLschoolStart);
    }
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

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio[
    "welcome message"]);
  $("#header").append(formattedWelcomeMsg);

  $("#header").append(HTMLskillsStart);
  for (var skill in bio.skills) {
    if (bio.hasOwnProperty("skills")) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};



// Call functions to render data

displayWork();
projects.display();
bio.display();
displayEducation();
