/// Constantes relacionada ao pokemon ///
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon_img');


/// constantes do form ///
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

/// constantes dos botões ///
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

/// variavel global que armazena o numero do pokemon para usar o botão ///
let searchPokemon = 1;

const fetchPokemon = async (pokemon) =>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status == 200){
        const data = await APIResponse.json();
        return data;

    }


}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        /* atualmente os gifs só estão disponiveis ate o pokemon 649, após esse numero os pokemons estão em outro caminho, 
        dividido por gerações, implementei esses ifs para pegar as imagens desses pokemons, sendo que não seriam gifs e sim imagem png.
        
        if(data.id >649){
            pokemonImage.style.display= 'block';
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-vi']['omegaruby-alphasapphire']['front_default']

            input.value = ''
            searchPokemon = data.id;
        }else if(data.id > 722){
            pokemonImage.style.display= 'block';
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default']

            input.value = ''
            searchPokemon = data.id;
        
        }else{*/
            pokemonImage.style.display= 'block';
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

            input.value = ''
            searchPokemon = data.id;
        //}
        

    } else {
        input.value = '';
        pokemonImage.style.display= 'none';
        pokemonName.innerHTML = 'Not found =(';
        pokemonNumber = '';
        
    }
    

}

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    
});


buttonPrev.addEventListener('click',() =>{
    if (searchPokemon > 1){
        searchPokemon -=1;
        renderPokemon(searchPokemon);
    } 
    
   
    
    
});

buttonNext.addEventListener('click',() =>{
    searchPokemon +=1;
    renderPokemon(searchPokemon);

    
    
});

renderPokemon(searchPokemon);


