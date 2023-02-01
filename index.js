console.log("js works!");
let showAboutMe;

// document.getElementById("year").innerHTML = new Date().getFullYear() + " ";

document.getElementById('aboutMeButton').addEventListener('click', function() {
    let element = document.getElementById('aboutMeDescription');
    if (element.classList[0] === 'hideItem') {
        document.getElementById('aboutMeDescription').classList.remove(`${element.classList[0]}`);
        document.getElementById('aboutMeDescription').classList.add('aboutMeDescription');
    }
    else{
        document.getElementById('aboutMeDescription').classList.remove(`${element.classList[0]}`);
        document.getElementById('aboutMeDescription').classList.add('hideItem');
    }
})
