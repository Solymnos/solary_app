// TEST ONLY

function fectWikiExtract()
{
    const wikiEndpoint = 'https//simple.wikipedia.org/w/api/php';
    const wiikiParams = '?action=query'
    + '&prop=extracts' // type de propriétés requise
    + '&exsentences=2' // requiert les deux première phrase de la page wikipedia
    + '&exlimit=1'
    + '&titles=' + ele // Specification de la page
    + '&explaintext=1' // requiert le type de format de retour
    + '&format=json' // same
    + '&formatversion=2' // JSON dans un meilleur format
    + "&origin=*"; // évite une erreur CORS

    const wikiLink = wikiEndpoint + wiikiParams;
    console.log(wikiLink);
};

module.exports = { fetchTidesData, fetchLocationData };

//https://www.youtube.com/watch?v=KlTrP6XYvEM&t=8s