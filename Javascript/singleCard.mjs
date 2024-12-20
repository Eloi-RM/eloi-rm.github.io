import { leftSection, rightSection } from "./script.mjs";

//appeler les infos d'une carte
async function displayCard(id) {
    leftSection.innerHTML = ""
    rightSection.innerHTML = ""
    try {
        const response = await fetch(`https://api.scryfall.com/cards/${id}`);
        const infoCard = await response.json();
   
        //console.log(infoCard.image_uris.large);
   
        const imgContainer = document.createElement("img");
        
        imgContainer.src = infoCard.image_uris.normal;
        imgContainer.alt = infoCard.name 
        
          
        imgContainer.classList.add("card-normal")
        leftSection.appendChild(imgContainer);
        

        const dataContainer = document.createElement("p");
        dataContainer.innerHTML =`<article><h1>${infoCard.name}</h1></br><p><u><strong>Mana</u></strong></br>
        <p>${infoCard.mana_cost}</p></br></p><p><u><strong>Type</u></strong></br><p>${infoCard.type_line}</p></br>
        <p><u><strong>Effet</u></strong></br><p>${infoCard.oracle_text}</p></br><p><u><strong>Att/Def</u></strong></br>
        <p>${infoCard.power||"-"} / ${infoCard.toughness||"-"}</p></br><p><u><strong>Rareté</u></strong></br>
        <p>${infoCard.rarity}</p></br><p><u><strong>Collection</u></strong></br><p>${infoCard.set_name}</p></br>
        <p><u><strong>Couleur</u></strong></br><p>${infoCard.colors}</p></br><p><u><strong>Citation</u></strong></br>
        <p>${infoCard.flavor_text||""}</p></br><p><u><strong>Artiste / Année</u></strong></br><p>${infoCard.artist||""} / ${infoCard.frame||""}</p></article>`;
        dataContainer.classList.add("card-normal-text")
        rightSection.appendChild(dataContainer)
        

    } catch (error) {
        console.error("Carte non trouvée", error);
    }
}

export{
    displayCard
}