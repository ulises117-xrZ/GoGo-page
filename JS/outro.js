
const pronoun = document.querySelector('.pronunciacion');
const grammar = document.querySelector('.gramatica');
const listening = document.querySelector('.comprension_oral');


pronoun.addEventListener('click', error);
grammar.addEventListener('click', error);
listening.addEventListener('click', error);

function error(){
    alert("Esta sección estara lista proximamente!")
}

const acordionHeader = document.querySelectorAll(".accordion-item-header");
const footer = document.querySelector(".footer");

acordionHeader.forEach(acordionHeader =>{
    acordionHeader.addEventListener('click', evt =>{

        const currentActive = document.querySelector('.accordion-item-header.active');
        if(currentActive && currentActive !== acordionHeader){
            currentActive.classList.toggle('active');
            currentActive.nextElementSibling.style.maxHeight = 0;
        } 

        acordionHeader.classList.toggle('active');
        const accordionItemBody = acordionHeader.nextElementSibling;
        if(acordionHeader.classList.contains('active')){
            accordionItemBody.style.maxHeight = "15000px";
        } else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})


const accordionItemHeader = document.querySelectorAll(".accordion-item-heade");
accordionItemHeader.forEach(accordionItemHeader =>{
    accordionItemHeader.addEventListener('click', evt =>{
        const currentActive2 = document.querySelector('.accordion-item-heade.activate');
        if(currentActive2 && currentActive2 !== accordionItemHeader){
            currentActive2.classList.toggle('activate');
            currentActive2.nextElementSibling.style.maxHeight = 0;
        } 

        accordionItemHeader.classList.toggle('activate');
        
        footer.classList.add('visible');
        const accordionItemBody2 = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('activate')){
            accordionItemBody2.style.maxHeight = "15000px";
        } else{
            accordionItemBody2.style.maxHeight = 0;
            footer.classList.remove('visible');
        }
    })
})
