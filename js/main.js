const feedBackButton = document.getElementById('appointmentButton');
const popupClose = document.getElementById('popupClose');
const submitBtn = document.getElementById('submitBtn');

function changeAperanceOfButton1(){
    const link = document.querySelector('.Main-Appointment-Button a');
    link.style.color = "#fff"
}
function changeAperanceOfButton2(){
    const link = document.querySelector('.Main-Appointment-Button a');
    link.style.color = "#000"
}

function showFBForm() {
    const FBForm = document.querySelector('.popup');
    FBForm.style.display = "flex";
}
function closeFBForm() {
    const FBForm = document.querySelector('.popup');
    FBForm.style.display = "none";
}

feedBackButton.addEventListener("click",showFBForm);
popupClose.addEventListener("click",closeFBForm);

submitBtn.addEventListener("mouseover",changeAperanceOfButton1);
submitBtn.addEventListener("mouseout",changeAperanceOfButton2);

window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}