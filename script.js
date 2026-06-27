// Display current date in the banner section

function showDate() {
    document.getElementById("today").innerHTML =
        "Today is: " + new Date().toDateString();
}

window.onload = showDate;

// Slider function
function updateSlider() {
    document.getElementById("sliderValue").innerHTML =
        document.getElementById("health").value;
}

//Review button function

function reviewForm() {

    var firstName = document.getElementById("fname").value;
    var middleInitial = document.getElementById("mi").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var ssn = document.getElementById("ssn").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    
    document.getElementById("reviewSection").innerHTML =
        "<h2>PLEASE REVIEW THIS INFORMATION</h2>" +
        "<p>Name: " +
        firstName + " " +
        middleInitial + " " +
        lastName +
        "</p>" +

        "<p>Date of Birth: " + dob + "</p>" +
        "<p>Social Security Number: " + ssn + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone Number: " + phone + "</p>" +
        "<p>Address: " + address + "</p>" +
        "<p>City: " + city + "</p>" +
        "<p>State: " + state + "</p>" +
        "<p>Zip Code: " + zip + "</p>";
}
