function logar(){
    var login = document.getElementById('inputUser').value;
    var password = document.getElementById('inputPassword').value;
    if(login === "admin" && password === "admin"){
        location.href = "./home.html";
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos!");
    };
};

function cadastrar(){
    var user = document.getElementById('inputUserNew').value;
    var email = document.getElementById('inputEmailNew').value;
    var password = document.getElementById('inputPasswordNew').value;
    var passwordConfirme = document.getElementById('inputPasswordConfirme').value;

    var emailCerto = emailValido(email);

    if(emailCerto){
        if(password === passwordConfirme){
            location.href = "./index.html"
            alert("Olá " + user + ", Seja bem vindo!")
            
        } else{
            console.error("As senhas não estão coincidem!");
        }

    } else{
        console.error("Informe um e-mail válido!");
    };
};

function emailValido(email){
    return email.includes("@");
};