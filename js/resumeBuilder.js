var bio = {
    "name": "Youness Assassi",
    "role": "Software Engineer",
    "welcomeMessage": "Experienced, motivated and driven professional, looking to challenge myself while having a positive impact on people's lives",
    "contacts": {
        "email": "youness.assassi@gmail.com",
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
		"description": "Served as the designer and recently as an iOS developer of a dashboard iPad application used by AT&T technician supervisors to manage technicians and jobs"
	},
	{
		"title": "MIS Express",
		"dates": "2012 to 2014",
		"description": "Served as team lead and designer of this iPad application used by AT&T enterprise sales executives to qualify, contract and order AT&T data and voice services for small and mid size enterprise customers."
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



if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork () {
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

displayWork();




//test html
//var name = HTMLheaderName.replace("%data%", bio.name);
//$("#main").append(name);

