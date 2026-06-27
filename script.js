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

// Review button function

function reviewForm() {

    // Basic Info
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
    var userId = document.getElementById("userid").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    // Checkboxes
    var fever = document.getElementById("fever").checked;
    var headache = document.getElementById("headache").checked;
    var cough = document.getElementById("cough").checked;
    var fatigue = document.getElementById("fatigue").checked;
    var nausea = document.getElementById("nausea").checked;

    fever = fever ? "YES" : "NO";
    headache = headache ? "YES" : "NO";
    cough = cough ? "YES" : "NO";
    fatigue = fatigue ? "YES" : "NO";
    nausea = nausea ? "YES" : "NO";

    // Radio buttons

    var gender = document.querySelector('input[name="gender"]:checked');
    var insurance = document.querySelector('input[name="insurance"]:checked');
    var vaccinated = document.querySelector('input[name="vaccinated"]:checked');

    gender = gender ? gender.value : "Not selected";
    insurance = insurance ? insurance.value : "Not selected";
    vaccinated = vaccinated ? vaccinated.value : "Not selected";

    // Slider

    var health = document.getElementById("health").value;

    

    
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
        "<p>Zip Code: " + zip + "</p>" +

        "<hr>" +
        "<h3>REQUESTED INFO</h3>" +

        "<p>Fever: " + fever + "</p>" +
        "<p>Headache: " + headache + "</p>" +
        "<p>Cough: " + cough + "</p>" +
        "<p>Fatigue: " + fatigue + "</p>" +
        "<p>Nausea: " + nausea + "</p>" +

        "<p>Gender: " + gender + "</p>" +
        "<p>Insurance: " + insurance + "</p>" +
        "<p>Vaccinated: " + vaccinated + "</p>" +

        "<p>Health Rating: " + health + "</p>" +

        "<p>User ID: " + userId + "</p>" +
        "<p>Password Match: " + (password1 === password2 ? "YES" : "NO") + "</p>";
}
