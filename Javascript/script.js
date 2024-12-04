import { doCardsList, displayCardList, indexPage, cardsList } from "./cardsList.mjs"
import { displayCard } from "./singleCard.mjs"
import { displayArtists, artistList } from "./displayArtists.mjs"

const grimoireImage = document.querySelector(".grimoire-image")
const leftSection = document.querySelector(".left-section")
const rightSection = document.querySelector(".right-section")
const nextPageButton = document.querySelector(".next-page-button")
const previousPageButton = document.querySelector(".previous-page-button")
const randomButton = document.querySelector(".random-button")
const setButton = document.querySelector(".set-button")
const rareButton = document.querySelector(".rare-button")
const colorButton = document.querySelector(".color-button")
const authorButton = document.querySelector(".author-button")
const homeButton = document.querySelector(".home-button")


doCardsList("https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Ablb&unique=prints")

nextPageButton.addEventListener("click", ()=> { // ajoute un écouteur d'évenements "clique" sur bouton suivant
    indexPage.index ++
    displayCardList(cardsList, indexPage.index)
})
previousPageButton.addEventListener("click", ()=> { // ajoute un écouteur d'évenements "clique" sur bouton précédent
    indexPage.index --
    displayCardList(cardsList, indexPage.index)
})

randomButton.addEventListener("click", ()=> {
    displayCard("random")
})

authorButton.addEventListener("click",()=> {
    displayArtists(artistList,indexPage.index)
})


export {
    grimoireImage, leftSection, rightSection, nextPageButton, previousPageButton, 
}   