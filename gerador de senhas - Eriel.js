const lenghtslider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const copyicon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");

const characters = { //mudar as constantes vai causar conflito no código html-css
lowercase: "abcdefghijklmnopqrstuvwxyz",
uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers: "0123456789",
symbols: "!$%&{}[]();:,.*+-<>~"
}

const generatePassword = () => {
    let staticPassword = "", //estático
        randomPassword = "", //aleatório 
        excludeDuplicate = false
        passLenght = lenghtSlider.value;
    
   options.forEach(option => {
   if (option.checked) {
  if (option.id !== "exc.duplicate" && option.id !== "spaces"){
    staticPassword += characters[option.id];
    } else if (option.id === "spaces") {
     staticPassword += ` ${staticPassword} `;
    } else {
    excludeDuplicate = true
    }
 }
 });

 for (let i = 0; i < passLenght; i++) {
     let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.lenght)];
    if (excludeDuplicate) {
        !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
    } else {
        randomPassword += randomChar;
    }

 }
 passwordInput.value = randomPassword;

}

const updatePassIndicator = () => {
   passIndicator.id = lenghtSlider.value <= 8 ? "weak" : lenghtSlider.value <= 16 ? "medium" : "strong"
}

const updateSlider = () => {
    document.querySelector(".pass-lenght span").ineerText = lenghtSlider.value;
    generatePassword();
    updatePassIndicator
}
updateSlider();

const copyPassword = () => { //checar copy da senha
    navigator.clipboard.writeText(PasswordInput.value);
    copyicon.innertext = "check"
    copyicon.style.color = "#4285f4";
    setTimeout(() => {
        copyicon.innertext = "copy_all";
        copyicon.style.color = "#707070";
    }, 1500);

}
copyicon.addEventListener("click", copyPassword);
lenghtSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword)
