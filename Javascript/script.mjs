import { doCardsList, displayCardList, cardsList } from "./cardsList.mjs"
import { doSetsList } from "./setsList.mjs"
import { myBookmark, switchPage } from "./navButtons.mjs"


const grimoireImage = document.querySelector(".grimoire-image")
const leftSection = document.querySelector(".left-section")
const rightSection = document.querySelector(".right-section")
const rightSectionhome = document.querySelector(".right-section-homepage")
const nextPageButton = document.querySelector(".next-page-button")
const previousPageButton = document.querySelector(".previous-page-button")
const homePageButton = document.querySelector('.homepage-button')
const grimoireContainer = document.querySelector('.grimoire-container')


homePageButton.addEventListener("click", ()=>
    {
    grimoireContainer.style.display = 'flex';
    homePageButton.style.display = 'none'
    // nextPageButton.style.display = "none"
    // previousPageButton.style.display = "none" 
    rightSection.innerHTML = `<article><h1>Mode d'emploi</h1> <p>Afin de naviguer au mieux, vous pouvez utiliser les boutons "Set", "Couleur" et "Rareté" ci dessus.</p>
                                <p>le moteur de recherche "Boule de cristal" en haut à droite peut vous aider</p></article>`;
    leftSection.innerHTML = `<article><h1>Bienvenue dans le monde magique de </h1><h2>MAGIC THE GATHERING</h2></article>`;
    doSetsList()                         
    })

//chooseSet()

// doCardsList("https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Amid&unique=prints")



nextPageButton.addEventListener("click", ()=> { // ajoute un écouteur d'évenements "clique" sur bouton suivant
    myBookmark.index ++
    switchPage()
})
previousPageButton.addEventListener("click", ()=> { // ajoute un écouteur d'évenements "clique" sur bouton précédent
    myBookmark.index --
    switchPage()
})

export {
    grimoireImage, leftSection, rightSection, nextPageButton, previousPageButton,homePageButton, grimoireContainer
} 