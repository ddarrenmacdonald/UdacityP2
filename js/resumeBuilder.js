// This is a function to replace the generic helper.js placeholders
String.prototype.replaceData = function (data)
{
	return this.replace("%data%", data);
};

// JSON Data for Resume
var bio = {
	"name" : "Darren MacDonald",
	"role" : "Web Developer - Experience Designer",
	"contact" : {
		"mobile" : "<a href='tel:9025636959'>902.563.6959</a>",
		"email" : "<a href='mailto:drrnmcdnld@gmail.com'>drrnmcdnld@gmail.com</a>",
		"github" : "<a href='https://github.com/drrnmcdnld'>drrnmcdnld</a>",
		"twitter" : "<a href='https://twitter.com/drrnmcdnld'>@drrnmcdnld</a>",
		"location" : "Nova Scotia, Canada"
	},
	"message" : '"Thanks for checking out my first online resume!"',
	"skills" :
	["HTML", "CSS", "JavaScript", "Ergonomics", "Design", "Usability"],
	"pic" : "images/headshot.png",

	// Replacing Resume Generic Data with JSON from above
	display : function() {
	// Header Info
	$("#header").prepend(HTMLheaderRole.replaceData(bio.role));
	$("#header").prepend(HTMLheaderName.replaceData(bio.name));
	$("#header").prepend(HTMLbioPic.replaceData(bio.pic));

	
	// Contact Info
	$("#topContacts").prepend(HTMLmobile.replaceData(bio.contact.mobile));
	$("#topContacts").prepend(HTMLemail.replaceData(bio.contact.email));
	$("#topContacts").prepend(HTMLgithub.replaceData(bio.contact.github));
	$("#topContacts").prepend(HTMLtwitter.replaceData(bio.contact.twitter));
	$("#topContacts").prepend(HTMLlocation.replaceData(bio.contact.location));

	// Footer Info
	$("#footerContacts").prepend(HTMLmobile.replaceData(bio.contact.mobile));
	$("#footerContacts").prepend(HTMLemail.replaceData(bio.contact.email));
	$("#footerContacts").prepend(HTMLgithub.replaceData(bio.contact.github));
	$("#footerContacts").prepend(HTMLtwitter.replaceData(bio.contact.twitter));

	// Welcome Message
	$("#header").append(HTMLwelcomeMsg.replaceData(bio.message));

	//Skills
		$('#header').append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++){
			$('#skills').append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
};

// Work
var work = {
	"jobs" : [
	{
		"employer" : "tektol, inc",
		"title" : "Managing Director",
		"location" : "Sydney, Nova Scotia",
		"dates" : "Apr 2011 - present",
		"description" : "Launching a startup project can be overwhelming to say the least and starting as just a one-person shop can be even harder. I have been lucky to have the support of many friends, family and colleagues to rely on. To achieve this the focus will be on human-centred design and systems thinking. The products and services may change but the over-arching goal will remain the same. At present most of the services try to make 'work life' better but this may evolve over time working with our customers. Being human-centred and holistic in our thinking will more than likely expand the services.",
		"url" : "http://tektol.com" },
	{
		"employer" : "WCB of Nova Scotia",
		"title" : "Relationship Manager, Ergonomist",
		"location" : "Halifax, Nova Scotia",
		"dates" : "Apr 2005 - Sep 2010",
		"description" : "Upon returning to Canada I remained with Humantech for about 6 months.  The travel to the US from Cape Breton proved to be a bit challenging in winter and I had to find a solution. Fortunately I was able to join a new division of the WCB, their Prevention Services group and I was employee #4! The team grew to upwards of 20 and delivered injury prevention services to Nova Scotia workplaces. I consider my time at the WCB to be that of an intrapreneur. In that we had latitude and freedom to develop new service offerings for customers. During my time I held four different positions starting out as a Prevention Consultant.  Within the first year I developed the board's first Ergonomist position.  This would  lead to the creation of an Ergonomics Practice Leader position. A position I held until June 2009 before moving to a new position as 'Relationship Manager' as part of our new service model.",
		"url" : "http://wcb.ns.ca" 	},
	{
		"employer" : "Humantech, Inc",
		"title" : "Sr. Ergonomics Engineer",
		"location" : "Irvine, California",
		"dates" : "Dec 2000 - Aug - 2004",
		"description" : "Some of the best friendships and work relationships in my life have come from my time at Humantech.  This was also a rewarding position based on the sheer number of people I helped with on a weekly basis. Southern California is full of Canadians, as well as, a few people from my alma mater, Dalhousie University.  This made the transition to the area much easier. My American colleagues welcomed us with open arms and it was great to experience each other’s cultures. In my role as an Ergonomics Engineer, I provided  ergonomics support to Fortune 500 organizations.  These amazing client companies provided me with a lot of practical hands-on experience. The people I met while consulting and training helped shape my perception of Ergonomics and why I do what I do. During my time at Humantech I had the chance to live in Ann Arbor, Michigan, Irvine, California and my home town of Glace Bay, Nova Scotia!",
		"url" : "http://humantech.com" },
		{
		"employer" : "Humantech, Inc",
		"title" : "Sr. Ergonomics Engineer",
		"location" : "Ann Arbor, Michigan",
		"dates" : "Aug 2004 - Apr - 2005",
		"description" : "Same as above",
	"url" : "http://humantech.com" }
	],

// Display Work
		display : function(){
		// Replace Employement Info
		for (job in work.jobs) {
			var current = work.jobs[job];
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replaceData(current.employer).replace("#", current.url) + HTMLworkTitle.replaceData(current.title));
			$(".work-entry:last").append(HTMLworkDates.replaceData(current.dates));
			$(".work-entry:last").append(HTMLworkLocation.replaceData(current.location));
			$(".work-entry:last").append(HTMLworkDescription.replaceData(current.description));
		}
	}
};

// Projects
var projects = {
	"projects" : [
	{
		"title" : "Chat Application",
		"dates" :	"Nov 2014",
		"description" : "This was one of my first coding projects at UIT, to create a client-side, chat user interface (UI) that enables a user to add new messages to a list. To add a new message, the user can type messages in a form and either hit the enter key, or press a 'send' button.",
		"images" : ["images/chat1.png"],
		"url" : "https://github.com/drrnmcdnld/chatMVP" 
	},
	{
		"title" : "Ergonomics Mobile App",
		"dates" :	"Feb 2015",
		"description" : "The project is required us to build a mobile app with our own unique idea. The app was built using the Ionic Framework, Node.js/Express to build a Rest API and a PostgreSQL database to store and retrieve data.",
		"images" :[ 
		"images/mobile1.png"],
		"url" : "https://github.com/drrnmcdnld/mobileApp"
	},
	{
		"title" : "Taskrr",
		"dates" :	"Apr 2014",
		"description" : "This project was a TaskRabbit clone, which is an online and mobile marketplace that allows users to outsource small jobs and tasks to others in their neighbourhood. Users name the task they need done, name the price they are willing to pay, and a network of pre-approved contractors bid to complete the job. In this project we used AngularJS and Firebase technologies.",
		"images" :[
		"images/taskrr1.png"],
		"url" : "https://github.com/drrnmcdnld/taskrr"
	},
	{
		"title" : "Portfolio Site",
		"dates" :	"Apr 2014",
		"description" : "Converted a design mockup from PDF-file and replicated the design using HTML and CSS. To complete this I developed a responsive website to display images, descriptions and links for my portfolio projects as part of the Front-End Web Developer Nanodegree.",
		"images" :[
		"images/portfolio.png"],
		"url" : "https://github.com/drrnmcdnld/UdacityP1"
	}
	],

// Injecting JSON project data into resume
	display : function() {
		for (project in projects.projects) {
			var current = projects.projects[project];
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replaceData(current.title).replace("#",current.url));
			$(".project-entry:last").append(HTMLprojectDates.replaceData(current.dates));
			$(".project-entry:last").append(HTMLprojectDescription.replaceData(current.description));
			if(current.images.length >0){
				for(image in current.images){
					$(".project-entry:last").append(HTMLprojectImage.replaceData(current.images))
				};
			}
		}
	}
};

// Education
var education = {
	"schools" : [
	{
		"name" : "Cape Breton University",
		"location" : "Sydney, Nova Scotia",
		"dates" : "Sep 2014 - present",
		"degree" : "BBA",
		"major" : ["Information Technology"],
		"url" : "http://UITstartup.org"	},
		{
		"name" : "University of Derby",
		"location" : "Derby, United Kingdom",
		"dates" : "Sep 2006 - Sep 2010",
		"degree" : "MSc",
		"major" : ["Ergonomics"],
		"url" : "http://derby.ac.uk/"	},
		{
		"name" : "Dalhousie University",
		"location" : "Halifax, Nova Scotia",
		"dates" : "Sep 1991 - May 1996",
		"degree" : "BSc",
		"major" : ["Kinesiology"],
		"url" : "http://dal.ca"	}
	],

	"onlineCourses" : [

	{
		"title" : "HTML & CSS",
		"school" : "Codecademy",
		"dates" : "Aug 2014",
		"url" : "http://www.codecademy.com/tracks/web"	
	},

{
		"title" : "HTML/CSS Path - Master Status",
		"school" : "Code School",
		"dates" : "Feb 2015",
		"url" : "https://www.codeschool.com/paths/html-css"	
	},

{
		"title" : "Intro to HTML/CSS",
		"school" : "Udacity",
		"dates" : "Feb 2015",
		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"	
	},

{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"dates" : "Feb 2015",
		"url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"	
	},

{
		"title" : "Javascript Basis",
		"school" : "Udacity",
		"dates" : "Mar 2015",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"	
	},

{
		"title" : "Intro to jQuery",
		"school" : "Udacity",
		"dates" : "Mar 2015",
		"url" : "https://www.udacity.com/course/intro-to-jquery--ud245"	
	},

{
		"title" : "Project Ninja - AngularJS & Firebase",
		"school" : "Code4Startup",
		"dates" : "Apr 2015",
		"url" : "https://code4startup.com/projects/ninja-learn-angularjs-firebase-by-cloning-udemy"	
	}
	],
	
// Display Education
	display : function(){
	for(school in education.schools) {
		var current = education.schools[school];
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replaceData(current.name).replace("#",current.url));
		$(".education-entry:last").append(HTMLschoolDegree.replaceData(current.degree));
		$(".education-entry:last").append(HTMLschoolDates.replaceData(current.dates));
		$(".education-entry:last").append(HTMLschoolLocation.replaceData(current.location));
		$(".education-entry:last").append(HTMLschoolMajor.replaceData(current.major));
	}

	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineCourses) {
		var current = education.onlineCourses[course];
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replaceData(current.title).replace("#",current.url));
		$(".education-entry:last").append(HTMLonlineSchool.replaceData(current.school));
		$(".education-entry:last").append(HTMLonlineDates.replaceData(current.dates));
	}
}
};

// Calling Display functions for each section
bio.display();
work.display();
projects.display();
education.display();

// Adding locations to Google Map
function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// Logging clicks
$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

// Display Google Map
$("#mapDiv").append(googleMap);