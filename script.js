// Display current date in the banner section

function showDate() {
    document.getElementById("today").innerHTML =
        "Today is: " + new Date().toDateString();
}

window.onload = showDate;


//Review button function
alert("script is connected");
function reviewForm() {
    document.getElementById("reviewSection").innerHTML =
        "<h2>PLEASE REVIEW THIS INFORMATION</h2>";
}
