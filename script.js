document.getElementById("btn").addEventListener("click",()=>{

    let inputVal = document.getElementById("Searchbox").value;

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://newsdata.io/api/1/news?apikey=pub_679216e1139fb7c5763e30b6bba9585f8ca7e&q=india", true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             var article = response.results[0]; // Get the first article
    
//             console.log("Title:", article.title);
//             console.log("Link:", article.link);
//             console.log("Description:", article.description);
//             console.log("Video URL:", article.video_url);
//             console.log("Publication Date:", article.pubDate);
//             console.log("Image URL:", article.image_url);
//             console.log("Country:", article.country.join(", "));
//         }
//     };
//     xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsdata.io/api/1/news?apikey=pub_679216e1139fb7c5763e30b6bba9585f8ca7e&q=${inputVal}`, true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var newsContainer = document.getElementById("news-container");

        for (var i = 0; i <10; i++) { 
            var article = response.results[i];

            var newsHTML = `
                <div class="news-article">
                    <img src="${article.image_url || 'https://via.placeholder.com/150'}" alt="News Image">
                    <div class="news-content">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <p><strong>Date:</strong> ${article.pubDate}</p>
                        <p><strong>Country:</strong> ${article.country.join(", ")}</p>
                        <a href="${article.link}" target="_blank">Read More</a>
                    </div>
                </div>
                <br>
                <br>
            `;

            newsContainer.innerHTML += newsHTML;
        }
    }
};

xhr.send();

    
 })




