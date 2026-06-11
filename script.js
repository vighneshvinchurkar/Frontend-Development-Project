// Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// API Integration

const loadUsers = document.getElementById("loadUsers");

loadUsers.addEventListener("click", () => {

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

let output = "";

data.forEach(user => {

output += `
<div class="col-md-4">
    <div class="card shadow mb-3">
        <div class="card-body">
            <h5>${user.name}</h5>
            <p>${user.email}</p>
            <p>${user.company.name}</p>
        </div>
    </div>
</div>
`;

});

document.getElementById("userContainer").innerHTML = output;

});

});


// Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let message =
document.getElementById("message").value.trim();

let error =
document.getElementById("errorMsg");

if(name === "" || email === "" || message === ""){

error.innerText =
"All fields are required.";

return;

}

let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

error.innerText =
"Enter a valid email address.";

return;

}

error.style.color = "green";
error.innerText =
"Form submitted successfully!";

});