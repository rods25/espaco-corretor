// menu hamburguer no mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// COMPORTAMENTO DE SCROLL DA NAVBAR
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

// seção com slides
const buttons = document.querySelectorAll("[data-carousel-btn]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})



var button = document.getElementById('form-send');
var nome = document.querySelector('input#name');
var phone = document.querySelector('input#phone');
var email = document.querySelector('input#email');
var select = document.getElementById('selectquemsou')
var msg = document.querySelector('textarea#mensagem');
button.addEventListener('click', verifica)
function verifica(e){
    e.preventDefault();
    if(nome.value == ""){
        document.querySelector("input#name").style.outline = "2px solid #DA3D15";
        document.querySelector("input#name").style.filter = "drop-shadow(0px 0px 4px #DA3D15)";
        document.querySelector("input#name").style.border = "none";

        const spanName = document.querySelector("span.required#name");
        spanName.innerHTML = "* Por favor informe um nome."
    }
    else if(phone.value == ""){
        document.querySelector("input#phone").style.outline = "2px solid #DA3D15";
        document.querySelector("input#phone").style.filter = "drop-shadow(0px 0px 4px #DA3D15)";
        document.querySelector("input#phone").style.border = "none";

        const spanPhone = document.querySelector("span.required#phone");
        spanPhone.innerHTML = "* Telefone inválido."
    }
    else if(email.value == ""){
        document.querySelector("input#email").style.outline = "2px solid #DA3D15";
        document.querySelector("input#email").style.filter = "drop-shadow(0px 0px 4px #DA3D15)";
        document.querySelector("input#email").style.border = "none";

        const spanEmail = document.querySelector("span.required#email");
        spanEmail.innerHTML = "* E-mail inválido."
    }
    else if(msg.value == ""){
        document.querySelector("textarea#mensagem").style.outline = "2px solid #DA3D15";
        document.querySelector("textarea#mensagem").style.filter = "drop-shadow(0px 0px 4px #DA3D15)";
        document.querySelector("textarea#mensagem").style.border = "none";

        const spanMsg = document.querySelector("span.required#mensagem");
        spanMsg.innerHTML = "* Digite uma mensagem."
    }
    else{
        var nomeValue = nome.value;
        var phoneValue = phone.value;
        var emailValue = email.value;
        var selectValue = select.value;
        var msgValue = msg.value;
        //var form = new FormData($("#formulario")[0]);
        $.ajax({
            url: 'mail.php',
            method: 'POST',
            data: { name: nomeValue, 
                    phone: phoneValue, 
                    email: emailValue,
                    selectQuemSou: selectValue,
                    mensagem: msgValue},
            dataType: 'json',
            success: function(){
                console.log("Requisição AJAX efetuada - SUCESS")
                document.querySelector('p#successmsg').style.display = 'block';
            },
            error: function(){
                console.log("ERRO - Requisição AJAX - deu ruim");
                document.querySelector('p#erromsg').style.display = 'block';
            }
        }).done (function(result){
            console.log(result);            
        });
        console.log('Verificações de campos - SUCESS')
    }
}





