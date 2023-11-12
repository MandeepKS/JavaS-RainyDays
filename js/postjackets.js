/* --------------------------------------------
 import apiconnection is for accessing the api
 --------------------------------------------- */
import {apiUrl} from "./apiconnection.js";



/* ---------------------------------- 
  this method is fetching the data
   from  Api
   -------------------------------*/
   export async function getRaincoats() {

    const response = await fetch(apiUrl);
    const rainyjackets = await response.json();
    
    return rainyjackets;
   
}

 /* ---------------------------------------
  this method renders the data on html page
  ---------------------------------------- */

function renderRaincoat(jacketData) {
 
 const jacketElements = document.querySelector(".container-3");
  jacketElements.innerHTML += `<div class="feature-products-card">
  <img src="${jacketData.image}" alt="Raincho_Unisex_Raincoat">
  <h4 class="ftr-prdt-name">${jacketData.title}</h4>
  <p >NOK ${jacketData.price}</p>
  <a href="productdetail.html?id=${jacketData.id}" class="btn-yellow cart">ADD TO CART</a>
 </div>`
}


/* -------------------------------------------------
    this method is render the list of jackets,
    with the help of forEach loop.
   ------------------------------------------------- */
export async function renderRaincoats(listOfjackets) {
  listOfjackets.forEach(renderRaincoat);
 }


 export async function jacketscollectionPage(){
  
  /* --------------------------------------------
     with the help of (collection_of_jackets) variable
      fetched data from (getRaincoats, method),
      further stores in renderRaincoats() ,method
      for rendering. 

     ----------------------------------------------- */
  const collection_of_jackets = await getRaincoats();
  renderRaincoats(collection_of_jackets);
}
