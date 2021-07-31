const tabs = document.querySelector('#tabs');
const content = document.querySelectorAll('.content');

const chengeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    // event - глобальный объект событие
    const currTab = e.target.dataset.btn;
    chengeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        // перебор элементов циклом
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }        
    }
})

const functionalTabs = document.querySelector('#functional__tab');
const functionalContent = document.querySelectorAll('.functional__content');

const  functionalChengeClass = el => {
    for(let i = 0; i < functionalTabs.children.length; i++) {
        functionalTabs.children[i].classList.remove('show');
    }
    el.classList.add('show');
}

functionalTabs.addEventListener('click', e => {
    const functionalCurrTab = e.target.dataset.functional__btn;
    functionalChengeClass(e.target);
    for(let i = 0; i < functionalContent.length; i++) {
        functionalContent[i].classList.remove('show');
        if (functionalContent[i].dataset.functional__content === functionalCurrTab){
            functionalContent[i].classList.add('show');
        }        
    }
})

