let myName = "Brandon Varner";


function displayPosition (jobs){
    console.log ("* " + jobs[i].Title + " at " + jobs[i].Name + " - " + jobs[i].experience)
}

let mySkill = ["Karate", "Guitar", "Good Driving", "Fast Reading"];

function displaySkill (mySkill, arg1) {
    if (arg1 == "cool"){
        console.log("BAM: " + mySkill)
    } else {
        console.log(mySkill)
    }
}


let jobs = [
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
        experience: "Strugglin' with JavaScript."
    }
]

console.log("Name: " + myName.toUpperCase())

console.log("Career: Full Stack Engineer/Communications Manager")

console.log("Description: I'm a writer, programmer, and musician who likes to have a good time.")

console.log("My Interests:")

console.log ("* 90s Pro Wrestling")
console.log ("* Music")
console.log ("* Video Games")
console.log ("* JavaScript")

console.log("My Previous Experience: ")
for (i = 0; i < jobs.length; i++) {
    displayPosition(jobs)
}

console.log ("My Skills:")

displaySkill("Karate", "cool")
displaySkill("Guitar","cool")
displaySkill("Good Driving")
displaySkill("Fast Reading")