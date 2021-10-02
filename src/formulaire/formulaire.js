import './formulaire.css';
import { useState, useEffect } from "react";

function Formulaire() {

    // fonction de création de formulaire s'il n'y en a pas au début
    function checkLeFormulaire() {
        let localFormulaires = localStorage.getItem("formulaires");
        if (localFormulaires) {
            let parseFormulaire = JSON.parse(localFormulaires)
            return parseFormulaire;
        } else {
            return ([]);
        };
    }

    // variable d'êtat, création du tableau de formulaire.
    const [formulaires, setFormulaires] = useState(checkLeFormulaire());

    // variables d'états des differentes entrées dans le formulaire
    const [nom, setNom] = useState("");
    const [quantite, setQuantite] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
    const [margeHt, setMargeHt] = useState("");
    const [prixTTC, setPrixTTC] = useState("");
    const [degre, setDegre] = useState("");
    const [type, setType] = useState("");

    function handleInput(e, setter) {
        setter(e.target.value);
    }

    const LeDegre = document.querySelector(".degre");

    useEffect(() => {
        if (type === "alcool") { 
            LeDegre.style.display = "block"
        }
        else if (type === "pasalcool") { 
            LeDegre.style.display = "none"
        }
        else if (type === "autre") {
            LeDegre.style.display = "none"
         }
    }, [type]
    );

    useEffect(() => console.log(formulaires), [formulaires]);
    useEffect(() => { localStorage.setItem("formulaires", JSON.stringify(formulaires)); }, [formulaires]);

    // bouton de récuparation du formulaire
    const handleSubmit = function (event) {

        // Je check si mes données sont bien récupérés au niveau du onChange avec le onClick
        event.preventDefault();
        console.log("le bouton il roxxe");
        console.log(nom + " " + quantite + " " + prixAchat + " " + prixVente + " " + margeHt + " " + prixTTC + " " + type);

        // j'envoi mon formulaire dans le setformulaires    
        setFormulaires([...formulaires, { nom, quantite, prixAchat, prixVente, margeHt, prixTTC, type, degre }])

        // j'injecte en string dans le localStorage
        localStorage.setItem("formulaires", JSON.stringify(formulaires));
    }

    // affichage HTML
    return (
        <div className="App">
            <h1>Rentez une nouvelle valeure dans votre Stock</h1>
            <form onSubmit={handleSubmit}>
                <div>  <input className="elementzs nom" id="nom" placeholder="Nom de boisson" onChange={(e) => handleInput(e, setNom)} /></div>
                <div>  <input className="elementzs quantite" id="quantite" placeholder="Quantité" onChange={(e) => handleInput(e, setQuantite)} /></div>
                <div>  <input className="elementzs prixachat" id="prixachat" placeholder="Prix Achat HT" onChange={(e) => handleInput(e, setPrixAchat)} /></div>
                <div>  <input className="elementzs prixvente" id="prixvente" placeholder="Prix de Vente HT" onChange={(e) => handleInput(e, setPrixVente)} /></div>
                <div>  <input className="elementzs margeHT" id="margeHT" placeholder="Marge HT" onChange={(e) => handleInput(e, setMargeHt)} /></div>
                <div>  <input className="elementzs prixTTC" id="prixTTC" placeholder="Prix de vente TTC" onChange={(e) => handleInput(e, setPrixTTC)} /></div>
                <div>  <input className="elementzs degre" id="degre" placeholder="Degré en Alcool" onChange={(e) => handleInput(e, setDegre)} /></div>
                <select onChange={(e) => handleInput(e, setType)} className="form-select form-select-sm border border-5" aria-label=".form-select-sm example">
                    <option selected>Choisir le type de boisson</option>
                    <option value="alcool" className="alcool" > Boisson Alcoolisée</option>
                    <option value="pasalcool" className="pasalcool">Boisson Sans Alcool</option>
                    <option value="autre" className="autre">Autre / Nourriture</option>
                </select>
                <div>  <button type="submit">Rajouter un nouveau produit.</button></div>
            </form>
        </div>

    );
}

export default Formulaire;