"use strict";let headerNav=document.getElementById("header-nav"),iconClose=document.getElementById("icon-close"),iconMenu=document.getElementById("icon-menu");iconMenu.addEventListener("click",(()=>{headerNav.classList.add("nav-show")})),iconClose.addEventListener("click",(()=>{headerNav.classList.remove("nav-show")}));const sections=document.querySelectorAll("section[id]"),scrollActive=()=>{const e=window.pageYOffset;sections.forEach((t=>{const c=t.offsetHeight,o=t.offsetTop-58,n=t.getAttribute("id"),a=document.querySelector(".header__nav a[href*="+n+"]");e>o&&e<=o+c?(a.classList.add("active-link"),headerNav.classList.remove("show-menu")):a.classList.remove("active-link")}))};window.addEventListener("scroll",scrollActive);const contactForm=document.getElementById("contact-form"),contactName=document.getElementById("contact-name"),contactEmail=document.getElementById("contact-email"),contactMessage=document.getElementById("contact-message"),contactProject=document.getElementById("contact-project"),sendEmail=e=>{e.preventDefault(),""===contactName.value||""===contactEmail?(contactMessage.classList.remove("color-yellow"),contactMessage.classList.add("color-red"),contactMessage.textContent="Rellene todos los campos 💬"):(emailjs.sendForm("service_p3tpf7h","template_q23jm2e","#contact-form","aNGyeX07qAi4f44pN").then((()=>{contactMessage.classList.add("color-yellow"),contactMessage.textContent="Mensaje enviado ✔️",setTimeout((()=>{contactMessage.textContent=""}),3e3)})),contactName.value="",contactEmail.value="",contactProject.value="")};contactForm.addEventListener("submit",sendEmail);