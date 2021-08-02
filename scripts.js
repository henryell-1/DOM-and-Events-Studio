// Write your JavaScript code here.
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
    window.addEventListener("load", function() {
        // put DOM code here to ensure elements have been loaded
        console.log('window loaded');

 let response = window.confirm("Confirm that the shuttle is ready for takeoff." );
// Code does NOT continue until user responds to confirm window
if (response) {
    let flightStatus = document.getElementById("takeoff-button");
    flightStatus.addEventListener("click", function (event) {
        console.log("Shuttle in flight.");
    });

let div = document.getElementById("shuttleBackground");
console.log("div contents:", div.innerHTML.fullScreen());
         div.style.color = "blue";


let p = document.getElementById("spaceShuttleHeight");
   console.log(p.innerHTML);

}else
let response = window.confirm("The shuttle is landing. Landing gear engaged." ); 
if (response) {
    let flightStatus = document.getElementById("Landing-button");
    flightStatus.addEventListener("click", function (event) {
        console.log("The shuttle has landed.");
    });

    let div = document.getElementById("shuttleBackground");
    console.log("div contents:", div.innerHTML.fullScreen());
             div.style.color = "green";

   let p = document.getElementById("spaceShuttleHeight");
   console.log(p.innerHTML);{
   
   }
}else
let response = window.confirm( "Confirm that you want to abort the mission." );
if (response) {
    let flightStatus = document.getElementById("missionAbort-button");
    flightStatus.addEventListener("click", function (event) {
        console.log("Mission aborted.");
    });

    let div = document.getElementById("shuttleBackground");
    console.log("div contents:", div.innerHTML.fullScreen());
             div.style.color = " ";

   let p = document.getElementById("spaceShuttleHeight");
   console.log(p.innerHTML);{
   
   }
}

});
    });
// Remember to pay attention to page loading!