window.addEventListener('DOMContentLoaded',async (e)=>{
    let url = "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter";
    const games = await fetch(url).then(res=>res.json())
    games.forEach(game=>{
        document.querySelector('.game-list').innerHTML += `
            <div class="game">
                <img src="${game.GameImage}" alt="">
                <div class="game-info">
                    <li> <span>Title:</span> <h2>${game.GameTitle}</h2></li>
                    <li> <span>Description:</span> <p>${game.GameDescription}</p></li>
                    <li> <span>Topic:</span> <p>${game.Topic}</p></li>
                    <li> <span>Group:</span> <p>${game.Group}</p></li>
                    <li> <span>Level:</span> <p>${game.Level}</p></li>
                    <li> <span>Subject:</span> <p>${game.Subject}</p></li>
                </div>
            </div>
        `;
    })
})