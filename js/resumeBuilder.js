var bio = {
    "name": "Youness Assassi",
    "role": "Software Engineer",
    "welcomeMessage": "Experienced, motivated and driven professional, looking to challenge myself while having a positive impact on people's lives",
    "contacts": {
        "email": "youness.assassi@gmail.com",
        "location": "Randolph, NJ",
        "picture": "images/fry.jpg"
    },
    "skills": [
        "Objective C",
        "HTML",
        "JavaScript",
        "CSS"
    ]
};

var projects = {
	"projects" : [ 
	   {
    		"title": "U-DASH",
    		"dates": "2012 to present",
    		"description": "Served as the designer and recently as an iOS developer of a dashboard iPad application used by AT&T technician supervisors to manage technicians and jobs",
            "images" : [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
    	},
    	{
    		"title": "MIS Express",
    		"dates": "2012 to 2014",
    		"description": "Served as team lead and designer of this iPad application used by AT&T enterprise sales executives to qualify, contract and order AT&T data and voice services for small and mid size enterprise customers.",
            "images" : [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
    	}	
	]
};

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Software Engineer",
            "location": "Middletown, NJ",
            "dates": "June 2007 to present",
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
            "dates": "January 2007 to May 2007",
            "description": "Build SAP applications",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "NJIT",
            "location": "Newark, NJ",
            "degree": "BA",
            "majors": [
                "Computer Science"
            ],
            "dates": "2005 to 2007",
            "url": "www.njit.edu"
        },
        {
            "name": "NJIT",
            "location": "Newark, NJ",
            "degree": "Masters",
            "majors": [
                "MBA"
            ],
            "dates": "2009 to 2011",
            "url": "www.njit.edu"
        }
    ]
};

//welcome message
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var profilePicture = HTMLbioPic.replace("%data%", "images/portrait.jpg");

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(profilePicture);
$("#header").append(formattedWelcomeMessage);

// add picture to header


function displayHeaderInfo() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedJobDescription);
	} 
}

function inName(name) {
	var nameArray = name.trim().split(" ");
	var name1 = nameArray[0];
	var name2 = nameArray[1];

	name2 = name2.toUpperCase();
	name1 = name1.slice(0,1).toLowerCase() + name1.slice(1).toLowerCase();
	return name1 + " " + name2;
}


displayHeaderInfo();
displayWork();

projects.display = function() { 
    projectsArr = projects.projects;
    for (var project in projectsArr) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projectsArr[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projectsArr[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projectsArr[project].description);
            
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        var imagesArr = projectsArr[project].images
        for (var image in imagesArr) {
            var formattedImage = HTMLprojectImage.replace("%data%", imagesArr[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);


//test html
//var name = HTMLheaderName.replace("%data%", bio.name);
//$("#main").append(name);

