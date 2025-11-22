// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    
    // Get computed style to check current display state
    var menuDisplay = window.getComputedStyle(menu).display;
    
    if (menuDisplay === "block") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

// Contact form validation function
function validateContactForm() {
    var isValid = true;
    
    // Get form elements
    var fName = document.getElementById("fName");
    var lName = document.getElementById("lName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var interests = document.querySelectorAll('input[name="interest"]:checked');
    
    // Reset previous error styles
    fName.style.backgroundColor = "";
    lName.style.backgroundColor = "";
    email.style.backgroundColor = "";
    phone.style.backgroundColor = "";
    
    // Validate first name
    if (fName.value.trim() === "") {
        alert("First name is required.");
        fName.style.backgroundColor = "#ffcccc";
        fName.focus();
        isValid = false;
        return false;
    }
    
    // Validate last name
    if (lName.value.trim() === "") {
        alert("Last name is required.");
        lName.style.backgroundColor = "#ffcccc";
        lName.focus();
        isValid = false;
        return false;
    }
    
    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        alert("Email is required.");
        email.style.backgroundColor = "#ffcccc";
        email.focus();
        isValid = false;
        return false;
    } else if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.style.backgroundColor = "#ffcccc";
        email.focus();
        isValid = false;
        return false;
    }
    
    // Validate phone (optional, but if provided, should be valid format)
    if (phone.value.trim() !== "") {
        var phonePattern = /^[\d\s\-\(\)]+$/;
        if (!phonePattern.test(phone.value)) {
            alert("Please enter a valid phone number.");
            phone.style.backgroundColor = "#ffcccc";
            phone.focus();
            isValid = false;
            return false;
        }
    }
    
    // Validate at least one interest checkbox is selected
    if (interests.length === 0) {
        alert("Please select at least one area of interest.");
        isValid = false;
        return false;
    }
    
    return isValid;
}

