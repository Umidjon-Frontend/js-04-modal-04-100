const btn = document.querySelector(".modal-btn");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal-wrapper");
const modalContainer = document.querySelector(".modal-container");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(){
    modal.style.display = "block";
}
function closeModal(){
    modalContainer.classList.add("slide-up");
    setTimeout(()=>{
        modal.style.display = "none";
        modalContainer.classList.remove("slide-up");
    }, 500)
    
}