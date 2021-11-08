var myName = "Brandon Varner";
var career = "Full-Stack Developer";
var description = "I'm a writer, programmer, and musician who likes to have a good time.";
var interests = [
    "90's pro wrestling",
    "Music",
    "Video Games",
    "JavaScript"
];
var displaySkill = function (skill) {
    if (skill.cool === true)
        console.log("BAM: " + skill.skill);
    else
        console.log(skill.skill);
};
var skillz = Array();
skillz = [
    {
        skill: "Karate",
        cool: true
    },
    {
        skill: "Guitar",
        cool: true
    },
    {
        skill: "Good Driving",
        cool: false
    },
    {
        skill: "Fast Reading",
        cool: false
    }
];
var jobs;
jobs = [
    {
        Name: "CBS42",
        Title: "Digital Content Producer",
        experience: "Adapted on-air scripts for online publication, did Facebook Lives, and more."
    },
    {
        Name: "Birmingham City Schools",
        Title: "School Bus Driver",
        experience: "Drove school buses, very safely."
    },
    {
        Name: "Covalence",
        Title: "Coding Student",
        experience: "Strugglin' with TypeScript."
    }
];
var displayPosition = function (jobs) {
    for (var i = 0; i < jobs.length; i++) {
        console.log("\u25CF " + jobs[i].Title + " at " + jobs[i].Name + " - " + jobs[i].experience);
    }
};
console.log("Name: " + myName.toUpperCase());
console.log();
console.log("Career: " + career);
console.log();
console.log("Description: " + description);
console.log();
console.log("My Interests:");
interests.forEach(function (interest) { return console.log("\u25CF " + interest); });
console.log();
console.log("My Previous Experience:");
displayPosition(jobs);
console.log();
console.log("My Skills:");
skillz.forEach(function (skill) { return displaySkill(skill); });
