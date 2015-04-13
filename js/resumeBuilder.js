// This is a function to replace the generic helper.js placeholders
String.prototype.replaceData = function(data)
{
	return this.replace("%data%",data);
};

// JSON Data for Resume
var bio = {
	"name" : "Darren MacDonald",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "<a href='tel:9025636959'>902.563.6959</a>",
		"email" : "<a href='mailto:drrnmcdnld@gmail.com'>drrnmcdnld@gmail.com</a>",
		"github" : "<a href='https://github.com/drrnmcdnld'>drrnmcdnld</a>",
		"twitter" : "<a href='https://twitter.com/drrnmcdnld'>@drrnmcdnld</a>",
		"location" : "Nova Scotia, Canada"
	},
	"message" : "Thanks for stopping by my resume.",
	"skills" :
	["HTML", "CSS", "JavaScript", "Ergonomics", "Design", "Usability"],
	"pic" : "images/headshot.png",

	// Replacing Resume Generic Data with JSON from above
	"display" : function() {
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

	// Welcome Message
	$("#header").append(HTMLwelcomeMsg.replaceData(bio.message));
	}
};

bio.display();

var work = {
	"jobs" : [
	{
		"employer" : "tektol, inc",
		"title" : "Managing Director",
		"location" : "Sydney, Nova Scotia",
		"dates" : "Apr 2011 - present",
		"description" : "Ergonomics consulting company"	},
	{
		"employer" : "WCB of Nova Scotia",
		"title" : "Relationship Manager, Ergonomist",
		"location" : "Halifax, Nova Scotia",
		"dates" : "Apr 2005 - Sep 2010",
		"description" : "Frontline staff to customers"	},
	{
		"employer" : "Humantech, Inc",
		"title" : "Sr. Ergonomics Engineer",
		"location" : "Irvine, California",
		"dates" : "Dec 2000 - Apr - 2005",
		"description" : "Worlds largest Ergonomics consulting company"}
	],
		"display" : function(){
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

work.display();

/*
var projects = {
	"project" : [
	{
		"title" : "Name of project",
		"dates" :	"mon year - mon year",
		"description" : "Project description",
		"images" :[
		"pic1.png", "pic2.png"]
	},
	{
		"title" : "Name of project",
		"dates" :	"mon year - mon year",
		"description" : "Project description",
		"images" :[
		"pic1.png", "pic2.png"]
	},
	{
		"title" : "Name of project",
		"dates" :	"mon year - mon year",
		"description" : "Project description",
		"images" :[
		"pic1.png", "pic2.png"]
	}
	],
};
*/

var education = {
	"schools" : [
	{
		"name" : "Cape Breton University",
		"location" : "Sydney, Nova Scotia",
		"dates" : "Sep 2014 - present",
		"degree" : "BBA",
		"major" : "Information Technology",
		"url" : "http://UITstartup.org"	},
		{
		"name" : "University of Derby",
		"location" : "Derby, United Kingdom",
		"dates" : "Sep 2006 - Sep 2010",
		"degree" : "MSc",
		"major" : "Ergonomics",
		"url" : "http://derby.ac.uk/"	},
		{
		"name" : "Dalhousie University",
		"location" : "Halifax, Nova Scotia",
		"dates" : "Sep 1991 - May 2006",
		"degree" : "BSc",
		"major" : "Kinesiology",
		"url" : "http://dal.ca"	}
	],

	"onlineCourses" : [
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "Feb 2014",
		"url" : "http://UITstartup.org"	
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "Feb 2014",
		"url" : "http://UITstartup.org"	
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "Feb 2014",
		"url" : "http://UITstartup.org"	
	}
	],
	"display" : function(){
	// Education
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

// Display Google Map
var map = {
	display : function(){
		$("#mapDiv").append(googleMap);
	}
};

// This block called Display Functions


education.display();
//map.display();