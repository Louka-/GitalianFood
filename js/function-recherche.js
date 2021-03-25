// let searchAsk = document.getElementById("recherche").value;

// console.log(`wigu + ${searchAsk}`)

// console.log(searchAsk);




function readForm(params) {
    return(`${params.recherche.value}` )
}

function traitementSearch(params) {

    document.location.href=`https://www.google.com/search?q=site:https://vegan-pratique.fr/+${params}`;

}