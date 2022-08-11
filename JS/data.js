const users = [];

let name2 = document.getElementById("form3Example1cg");
let submit = document.getElementById('submit-btn');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let name = name2.value;
    let phone = document.getElementById("form3Example2cg").value;
    let email = document.getElementById("form3Example3cg").value;
    let password = document.getElementById("form3Example4cg").value;
    let user = {
        "name": name,
        "phone": phone,
        "email": email,
        "password": password,
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users[users.length - 1]);
});

//Check user empty
function checkUserEmpty(name, phone, email, password) {
    if (name == "" || phone == "" || email == "" || password == "") {
        return false;
    }
    return true;
}

//Check local storage
if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify(users));
}





