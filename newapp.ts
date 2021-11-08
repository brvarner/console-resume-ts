let myName: string = "Brandon Varner"
let career: string = "Full-Stack Developer"
let description: string = "I'm a writer, programmer, and musician who likes to have a good time."
let interests: Array<string> = [
    "90's pro wrestling",
    "Music",
    "Video Games",
    "JavaScript"
]

interface Skill {
    skill: string,
    cool: boolean
}

let displaySkill = (skill: Skill) => {
    if (skill.cool === true) console.log(`BAM: ${skill.skill}`)
    else console.log(skill.skill)
}


let skillz = Array<Skill>();
skillz = [
    {
        skill: "Karate",
        cool: true,
    },
    {
        skill: "Guitar",
        cool: true,
    },
    {
        skill: "Good Driving",
        cool: false,
    },
    {
        skill: "Fast Reading",
        cool: false,
    }
]


let jobs: Array<Object>
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
]

let displayPosition = (jobs) => {
    for (let i = 0; i < jobs.length; i++) {
        console.log(`● ${jobs[i].Title} at ${jobs[i].Name} - ${jobs[i].experience}`)
    }
}

console.log(`Name: ${myName.toUpperCase()}`);
console.log()
console.log(`Career: ${career}`)
console.log()
console.log(`Description: ${description}`)
console.log()
console.log("My Interests:")
interests.forEach(interest => console.log(`● ${interest}`))
console.log()
console.log("My Previous Experience:")
displayPosition(jobs)
console.log()
console.log("My Skills:")
skillz.forEach(skill => displaySkill(skill))

