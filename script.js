import { stageItemTitle, mainTitle, openContent } from "./module.js"

mainTitle.forEach((el) => {
    el.addEventListener('click', () => {               
        if (el.nextElementSibling.style.display === '') {
            el.nextElementSibling.style.display = 'block'
           
        }            
        else {
            el.nextElementSibling.style.display = ''
           
        }
        openContent(stageItemTitle)         
    })
})






