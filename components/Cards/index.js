// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(axiosData=>{
        
        console.log(axiosData.data.articles)
        const cardsCon = document.querySelector('.cards-container');
        axiosData.data.articles.javascript.forEach(card => {

            cardsCon.appendChild(cardMaker(card));
        });
        axiosData.data.articles.bootstrap.forEach(card => {

            cardsCon.appendChild(cardMaker(card));
        });
        axiosData.data.articles.jquery.forEach(card => {

            cardsCon.appendChild(cardMaker(card));
        });
        axiosData.data.articles.technology.forEach(card => {

            cardsCon.appendChild(cardMaker(card));
        });
        axiosData.data.articles.node.forEach(card => {

            cardsCon.appendChild(cardMaker(card));
        });

    })
    .catch(err=>{
        console.log("ERROR 404 PAGE NOT FOUND");
    })

    

    function cardMaker(card){
        let cardHolder = document.createElement('div');
        let headline=document.createElement('div');
        let author = document.createElement('div');
        let imgCon = document.createElement('div');
        let img = document.createElement('img');
        let autNam = document.createElement('span');

        cardHolder.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgCon.classList.add('img-container');


        headline.innerHTML=card.headline;
        img.src=card.authorPhoto;
        autNam.innerHTML=card.authorName;


        cardHolder.appendChild(headline);
        cardHolder.appendChild(author);
        author.appendChild(imgCon);
        author.appendChild(autNam);
        imgCon.appendChild(img);


        console.log(cardHolder);
        return cardHolder;
    };