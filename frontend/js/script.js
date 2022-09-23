console.log("working??")
const news_container = document.getElementById("news-containerr");

// Creating a news card and adding it to the page
const addNews = (news) => {

    let news_card_html = `            
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
        <img src="./images/${news.picture}">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.description}</p>
            <p> Posted at: ${news.created_at}</p>
        </div>
    </div>
</div>`;
    news_container.innerHTML += news_card_html;

};

//Getting data from get_news.php api using jQuery.get()
$.get("http://localhost/news-website/backend/get_news.php")
    .done((data) => {
        console.log(data);
        const all_news = [];
        console.log("this is all news " + all_news);
        console.log(typeof (data));
        const data_json = JSON.parse(data);
        console.log(data_json);


        for (let news of data_json) {
            console.log(news);
            all_news.push(news);
            addNews(news);
        }

    })
    .fail((error) => console.error(error))
    .always(() => console.log('Done'));


