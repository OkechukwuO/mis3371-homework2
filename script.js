// Display current date in the banner section

function showDate() {
    document.getElementById("today").innerHTML =
        "Today is: " + new Date().toDateString();
}

window.onload = showDate;


//Review button function

function reviewForm() {

    var firstName = document.getElementById("fname").value;
    var middleInitial = document.getElementById("mi").value;
    var lastName = document.getElementById("lname").value;
    
    document.getElementById("reviewSection").innerHTML =
        "<h2>PLEASE REVIEW THIS INFORMATION</h2>" +
        "<p>Name: " +
        firstName + " " +
        middleInitial + " " +
        lastName +
        "</p>";
}
