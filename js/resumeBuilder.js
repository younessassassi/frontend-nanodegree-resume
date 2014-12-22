var bio = {
    "name": "Youness Assassi",
    "role": "Software Engineer",
    "welcomeMessage": "Experienced, motivated and driven professional, looking to enhance people's lives by designing and building useful software tools.",
    "contacts": {
        "mobile": "732-447-7122",
        "email": "youness.assassi@gmail.com",
        "github": "younessassassi",
        "twitter": "@YounessAssassi",
        "location": "Randolph, NJ"
    },
    "skills": [
        "Front End Web Development",
        "Native iOS development",
        "Requirements Engineering",
        "Application Design"
    ],
    "biopic": "images/portrait.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var profilePicture = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(profilePicture);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
         for (skill in bio.skills) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

var education = {
    "schools": [
        {
            "name": "New Jersey Institute of Technology",
            "location": "Newark, NJ",
            "degree": "Masters",
            "majors": [
                "MBA"
            ],
            "dates": "2011",
            "url": "www.njit.edu"
        },
        {
            "name": "New Jersey Institute of Technology",
            "location": "Newark, NJ",
            "degree": "BA",
            "majors": [
                "Computer Science"
            ],
            "dates": "2007",
            "url": "www.njit.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "UDACITY",
            "dates": "2014",
            "url": "www.udacity.com"
        },
        {
            "title": "Python",
            "school": "Codecademy",
            "dates": "2014",
            "url": "www.codecademy.com"
        }
    ]
};

education.display = function() {
        for (var school in this.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry:last").append(formattedSchoolNameDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            for (var major in this.schools[school].majors) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
    }

    $("#education").append(HTMLonlineClasses);
    for (var onlineCourse in this.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
        var formattedOnlineTileSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTileSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);


        var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Software Engineer",
            "location": "Middletown, NJ",
            "dates": "2007-present",
            "description": "Build mobile applications for enterprise users",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        },
        {
            "employer": "Colgate Palmolive",
            "title": "Global IT COOP",
            "location": "Moristown, NJ",
            "dates": "2007-2007",
            "description": "Build SAP applications",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }
    ]
};

work.display  = function() {
      for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedWorkDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedJobDescription);
        }
}

var projects = {
    "projects": [
        {
            "title": "U-DASH",
            "dates": "2012-present",
            "description": "Served as the designer and recently as an iOS developer of a dashboard iPad application used by AT&T technician supervisors to manage technicians and jobs",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        },
        {
            "title": "MIS Express",
            "dates": "2012-2014",
            "description": "Served as team lead and designer of this iPad application used by AT&T enterprise sales executives to qualify, contract and order AT&T data and voice services for small and mid size enterprise customers.",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }
    ]
};

projects.display = function() {
    projectsArr = projects.projects;
    for (var project in projectsArr) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projectsArr[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projectsArr[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projectsArr[project].description);
         $(".project-entry:last").append(formattedDescription);

        var imagesArr = projectsArr[project].images
        for (var image in imagesArr) {
            var formattedImage = HTMLprojectImage.replace("%data%", imagesArr[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};


function inName(name) {
	var nameArray = name.trim().split(" ");
	var name1 = nameArray[0];
	var name2 = nameArray[1];
	name2 = name2.toUpperCase();
	name1 = name1.slice(0,1).toLowerCase() + name1.slice(1).toLowerCase();
	return name1 + " " + name2;
}

bio.display();
education.display();
work.display();
projects.display();

//$("#header").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);





//test html
//var name = HTMLheaderName.replace("%data%", bio.name);
//$("#main").append(name);

