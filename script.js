window.addEventListener("load", function () {
    const astronautContainer = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            for (let i = 0; i < json.length; i++) {

                let astronautObject = json[i];
                astronautContainer.innerHTML += 
                `
                <div class="astronaut">
                    <h3>                                      
                    ${json[i].firstName} ${json[i].lastName}
                    </h3>
                    <ul> 
                    <li>hours in space: ${json[i].hoursInSpace}</li>
                    <li>active: ${json[i].active}</li>
                    <li>skills: ${json[i].skills}</li>
                    </ul>
                    <img class="avatar" src=${json[i].picture} height=250 position></img>
                </div>    
                `
            }
        })
    })
})