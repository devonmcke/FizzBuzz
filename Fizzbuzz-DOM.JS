document.addEventListener("DOMConetentLoaded", function() {
    var pokeList = document.getElementById('pokemon-list');
    for(var i = 0; i < pokemon.length; i++){
        addPokemon(pokemon[i], pokeList);
    }
    function addPokemon(name, list){
        var newPokemon = document.createElement('div');
        newPokemon.innerText = name;
        newPokemon.classList.add("pokemon");
        list.appendChild(newPokemon);
    }
});