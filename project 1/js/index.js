const $field = document.querySelector('.header__input-search');
const $list = document.querySelector('.list tbody');
const $modalContainer = document.querySelector('.modal-container');

let pokemonList = [];

function templateGenerator(list) {
    let template = '';
    if (list.length != 0) {
        let index = 0;
        list.forEach(function (el) {
            index++;
            template += '<tr>' +
                            '<td>' + index + '</td>' +
                            '<td>' + el.name + '</td>' +
                            '<td><a class="btn" data-url="' + el.url + '">More info</a></td>' +
                        '</tr>';
        });
    } else {
        template = '<li class="list-found">Not Found</li>';
    }
    $list.innerHTML = template;
}
function modalController(action) {
    if (action == 'open') {
        $modalContainer.classList.add('active');
    } else if (action == 'close') {
        $modalContainer.classList.remove('active');
    }
}
function modalTemplateGenerator(pokemon) {
    console.log(pokemon);
    let template = '<h2>' + pokemon.name + '</h2>' +
                   '<img src="' + pokemon.sprites.front_default + '">';
    document.querySelector('.modal-container .modal').innerHTML = template;
}

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function (responce) {
        return responce.json();
    })
    .then(function (data) {
        pokemonList = data.results;
        templateGenerator(pokemonList);
    });

$field.addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let filteredPokemons = pokemonList.filter(function (el) {
        if ( el.name.toLowerCase().indexOf(query) != -1)
            return true;
        else 
            return false;
    });
    templateGenerator(filteredPokemons);
});



$list.addEventListener('click', function (event) {
    if ( event.target.classList.contains('btn') ) {
        modalController('open');
        let url = event.target.getAttribute('data-url');
        fetch(url)
            .then(function (responce) {
                return responce.json();
            })
            .then(function (data) {
                modalTemplateGenerator(data);
            });
    }
});
document.querySelector('.modal-container .overlay').addEventListener('click', function () {
    modalController('close');
});