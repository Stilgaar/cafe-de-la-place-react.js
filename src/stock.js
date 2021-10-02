import './stock.css';
import React from "react";

function Stock(props) {

  let parseForm = JSON.parse(localStorage.getItem("formulaires"))


  function handleRemove() {
    console.log();
    // remove item
  }


  function recupFormulairesAlcool() {

    if (parseForm !== null) {
      return parseForm.map(function (formulaire) {
        if (formulaire.type === "alcool")
          return (
            <div className="pouet">
              <p> <span className="texte1"> Nom du cocktail : </span> {formulaire.nom}  </p>
              <p> <span className="texte1"> Quantité : </span> {formulaire.quantite} </p>
              <p> <span className="texte1"> Prix Achat : </span>{formulaire.prixAchat} </p>
              <p> <span className="texte1"> Prix Vente : </span>{formulaire.prixVente} </p>
              <p> <span className="texte1"> MargehT : </span>{formulaire.margeHt} </p>
              <p> <span className="texte1"> Prix TTC : </span>{formulaire.prixTTC} </p>
              <p> <span className="texte1"> Degre en Alcool : </span>{formulaire.degre}</p>
              <button onClick={() => handleRemove()}className="texte1"> Delete </button>
            </div>

          );
      });
    }
  }

  function recupFormulaireSansAlcool() {
    if (parseForm !== null) {
      return parseForm.map(function (formulaire) {
        if (formulaire.type === "pasalcool")
          return (
            <div className="pouet">
              <p> <span className="texte1"> Nom de la boisson : </span> {formulaire.nom}  </p>
              <p> <span className="texte1"> Quantité : </span> {formulaire.quantite} </p>
              <p> <span className="texte1"> Prix Achat : </span>{formulaire.prixAchat} </p>
              <p> <span className="texte1"> Prix Vente : </span>{formulaire.prixVente} </p>
              <p> <span className="texte1"> MargehT : </span>{formulaire.margeHt} </p>
              <p> <span className="texte1"> Prix TTC : </span> {formulaire.prixTTC} </p>
              <button className="texte1 delete"> Delete </button>
            </div>
          );
      });
    }
  }

  function recupformulaireAutre() {
    if (parseForm !== null) {
      return parseForm.map(function (formulaire) {
        if (formulaire.type === "autre")
          return (
            <div className="pouet">
              <p> <span className="texte1"> Autre / Nourriture : </span> {formulaire.nom}  </p>
              <p> <span className="texte1"> Quantité : </span> {formulaire.quantite} </p>
              <p> <span className="texte1"> Prix Achat : </span>{formulaire.prixAchat} </p>
              <p> <span className="texte1"> Prix Vente : </span>{formulaire.prixVente} </p>
              <p> <span className="texte1"> MargehT : </span>{formulaire.margeHt} </p>
              <p> <span className="texte1"> Prix TTC : </span>{formulaire.prixTTC} </p>
              <button className="texte1 delete"> Delete </button>
            </div>
          );
      });
    }
  }

  return (
    <div>
      <h2> Stock</h2> <br />
      <h3>Boisson Alcoolisées</h3>
      <div id="tise"> {recupFormulairesAlcool()} </div>
      <h3>Boisson Non Alcoolisées</h3>
      <div>{recupFormulaireSansAlcool()} </div>
      <h3> Autre / Nourriture</h3>
      <div>{recupformulaireAutre()}</div>
    </div>
  )

}

export default Stock;

