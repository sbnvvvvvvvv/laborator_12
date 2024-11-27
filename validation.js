document.getElementById("autorize-form").addEventListener("submit", function(event) {
event.preventDefault(); 

const login = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (login === "" || password === "") {
    alert("Пожалуйста, заполните все поля.");
    return;
}

if (login === validLogin && password === validPassword) {
    alert("Успешная авторизация!");
} else {
    alert("Неверный логин или пароль.");
}
    });
