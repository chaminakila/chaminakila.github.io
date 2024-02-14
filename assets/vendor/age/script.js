// Function to calculate age based on birth date
function calculateAge(birthDate) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var birthYear = birthDate.getFullYear();
    var age = currentYear - birthYear;

    var currentMonth = currentDate.getMonth();
    var birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Function to update the age field
function updateAge() {
    var birthDate = new Date('1993-06-14'); // Replace this with your birth date in 'YYYY-MM-DD' format
    var age = calculateAge(birthDate);
    document.getElementById("age").innerText = age;
}

// Call updateAge function when the page loads
window.onload = updateAge;
