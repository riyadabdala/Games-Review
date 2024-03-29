const showDetails = document.querySelector('#show-details');
const loader = document.querySelector('.model .container .loader');

export async function getGameDetailsById(id){
    loader.classList.remove('d-none');
    showDetails.classList.add('d-none');
    const request = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    });
    if(request.status == 200){
        const result = await request.json();
        showgameDetails(result);
        loader.classList.add('d-none');
        showDetails.classList.remove('d-none');
    };
};

function showgameDetails(game){
    let container = '';
    container = `
    <div class="d-flex justify-content-between align-items-center">
        <h1 class="model-header text-white my-4">Details Game</h1>
        <i id="closeBtn" class="btn-close btn-close-white"></i>
    </div>
    <div class="col-md-4">
        <div>
            <img class="w-100 model-img" src="${game.thumbnail}" alt="${game.title}">
        </div>
    </div>
    <div class="col-md-8">
        <div class="text-white">
            <h3 class="model-title">Title: ${game.title}</h3>
            <p class="model-category">Category: <span class="span-model-category rounded-3 px-2">${game.genre}</span></p>
            <p class="model-platform">Platform: <span class="span-model-platform rounded-3 px-2">${game.platform}</span></p>
            <p class="model-status">Status: <span class="span-model-status rounded-3 px-2">${game.status}</span></p>
            <p class="model-pragraph">${game.description}</p>
            <a href="${game.game_url}" class="btn btn-outline-warning show-game" target="_blank">Show Game</a>
        </div>
    </div>
    `;
    showDetails.innerHTML = container;
};
