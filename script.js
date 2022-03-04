async function getCoderData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    var coderData = await response.json();

    for(var i = 0; i < coderData.results.length; i++){
        getPokemon(coderData.results[i].url)
    }
}

async function getPokemon(url){
    var response = await fetch(url);
    var data = await response.json();
    console.log(data.sprites.front_default);
    showPokemon(data.sprites.front_default);
}

function showPokemon(sprite_src){
    var element = document.querySelector("#pokemon");

    element.innerHTML += `<img src='${sprite_src}'>`;
    // string interpolation new school good!
    // string concatination old school ok!
 }

getCoderData();