document.getElementById("btn").addEventListener("click", () => {
    let inputVal = document.getElementById("Searchbox").value.trim();
    let newsContainer = document.getElementById("news-container");

    if (inputVal === "" || inputVal === undefined) {
        Swal.fire({
            title: 'Error',
            html: `Invalid Input`,
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 3000,
            position: 'center',
            heightAuto: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        return;
    }

    newsContainer.innerHTML = `<p style="font-size: 20px; text-align: center;">⏳ Loading news... Please wait.</p>`;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://newsdata.io/api/1/news?apikey=pub_679216e1139fb7c5763e30b6bba9585f8ca7e&q=${inputVal}`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                
                newsContainer.innerHTML = ""; 

                if (response.results && response.results.length > 0) {
                    for (var i = 0; i < response.results.length; i++) {
                        var article = response.results[i];

                        var newsHTML = `
                            <div class="news-article">
                                <img src="${article.image_url || 'https://via.placeholder.com/150'}" alt="News Image">
                                <div class="news-content">
                                    <h2>${article.title}</h2>
                                    <p>${article.description || 'No description available'}</p>
                                    <p><strong>Date:</strong> ${article.pubDate || 'N/A'}</p>
                                    <p><strong>Country:</strong> ${article.country ? article.country.join(", ") : 'N/A'}</p>
                                    <a href="${article.link}" target="_blank">Read More</a>
                                </div>
                            </div>
                            <br><br>
                        `;

                        newsContainer.innerHTML += newsHTML;
                    }
                } else {
                    newsContainer.innerHTML = `<p style="color:red;">❌ No news found for this topic.</p>`;
                }
            } else {
                newsContainer.innerHTML = `<p style="color:red;">⚠️ Failed to fetch news. Try again later.</p>`;
            }
        }
    };

    xhr.send();
});

let inputVal = document.getElementById("Searchbox").value;
let newsContainer = document.getElementById("news-container");


    newsContainer.innerHTML = "";

            var response = {"status":"success","totalResults":12,"results":[{"article_id":"6455862f236030d56311ee06db66c7a6","title":"E-invoicing Software Market to Witness Impressive Growth by 2030 | Oracle Corporation , Sage","link":"https://www.openpr.com/news/3916675/e-invoicing-software-market-to-witness-impressive-growth","keywords":["it, new media & software"],"creator":["HTF Market Intelligence Consulting Pvt. Ltd."],"video_url":null,"description":"According to HTF Market Intelligence, the Global E-invoicing Software market to witness a CAGR of 25.4% during the forecast period (2025-2030). The Latest Released E-invoicing Software Market Research assesses the future growth potential of the E-invoicing Software market and provides","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 13:33:20","pubDateTZ":"UTC","image_url":"https://cdn.open-pr.com/L/3/L315921689_g.jpg","source_id":"openpr","source_priority":36018,"source_name":"Openpr.com","source_url":"https://www.openpr.com","source_icon":null,"language":"english","country":["germany"],"category":["technology"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"168412a1b251ebbc0e0c14e1bca9dbf7","title":"Online Office Platform Market to see Booming Business Sentiments | Google , Zoho Corporation, Slack Technologies","link":"https://www.openpr.com/news/3916671/online-office-platform-market-to-see-booming-business","keywords":["it, new media & software"],"creator":["HTF Market Intelligence Consulting Pvt. Ltd."],"video_url":null,"description":"According to HTF Market Intelligence, the Global Online Office Platform market to witness a CAGR of 2.99% during the forecast period (2025-2030). The Latest Released Online Office Platform Market Research assesses the future growth potential of the Online Office Platform","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 13:22:08","pubDateTZ":"UTC","image_url":"https://cdn.open-pr.com/L/3/L315775667_g.jpg","source_id":"openpr","source_priority":36018,"source_name":"Openpr.com","source_url":"https://www.openpr.com","source_icon":null,"language":"english","country":["germany"],"category":["technology"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"c9cd49c135c512c07174de9ac983fbff","title":"Cuál es la diferencia entre un chatbot y un asistente de inteligencia artificial","link":"https://www.diarioregistrado.com/ciencia-y-tec/cual-es-la-diferencia-entre-un-chatbot-y-un-asistente-de-inteligencia-artificial_a67d46f77fa2f91434f44c2f0","keywords":null,"creator":null,"video_url":null,"description":"Mientras que ambos interactúan con los usuarios a través de conversaciones, sus funcionalidades y alcance marcan distinciones considerables.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 11:31:10","pubDateTZ":"UTC","image_url":"https://diario-assets.tadevel-cdn.com/67d46f72fa2f91434f44c2e6/720.jpeg","source_id":"diarioregistrado","source_priority":1275568,"source_name":"Diario Registrado","source_url":"https://www.diarioregistrado.com","source_icon":"https://i.bytvi.com/domain_icons/diarioregistrado.png","language":"spanish","country":["argentina"],"category":["top"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"a19c9c8147511f9fc5079b73c2094dc5","title":"Why does Zoho Founder Sridhar Vembu say that “IT sector in India sucked all oxygen”?","link":"https://www.edexlive.com/news/2025/Mar/15/why-does-zoho-founder-sridhar-vembu-say-that-it-sector-in-india-sucked-all-oxygen","keywords":null,"creator":["EdexLive Desk"],"video_url":null,"description":null,"content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 10:43:59","pubDateTZ":"UTC","image_url":"https://media.assettype.com/edexlive%2F2025-03-15%2Fuo8kkajd%2FScreenshot%202024-03-18%20at%206.34.39%20AM.png?ar=40%3A21&auto=format%2Ccompress&enlarge=true&mode=crop&ogImage=true&overlay=false&overlay_position=bottom&overlay_width=100&w=1200","source_id":"edexlive","source_priority":593425,"source_name":"Edex Live","source_url":"https://www.edexlive.com","source_icon":"https://i.bytvi.com/domain_icons/edexlive.jpg","language":"english","country":["india"],"category":["top"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"811bdcbaaba8fe786caf7fc9c9233251","title":"‘China is addicted to investment’: Sridhar Vembu questions whether the Bejing model is nearing its end","link":"https://www.businesstoday.in/latest/trends/story/china-is-addicted-to-investment-sridhar-vembu-questions-whether-the-bejing-model-is-nearing-its-end-468011-2025-03-15","keywords":null,"creator":null,"video_url":null,"description":"Vembu’s comments were triggered by a post highlighting how China has yet to reverse the decline in its consumption share since Zhu Rongji's economic reforms and WTO entry.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 06:29:56","pubDateTZ":"UTC","image_url":"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202503/67d51e585c4c8-vembu-argued-that-the-country-has-created-a-structurally-unbalanced-economy-that-has-only-survived-t-152938179-16x9.jpg","source_id":"businesstoday","source_priority":9735,"source_name":"Business News India","source_url":"https://www.businesstoday.in","source_icon":"https://i.bytvi.com/domain_icons/businesstoday.jpg","language":"english","country":["india"],"category":["top"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"b2e535107aabe47a7ef586a96b04ec8b","title":"At Guardian Woman Festival: Echoes of financial literacy, accelerated investment keep pulsating","link":"https://guardian.ng/features/focus/at-guardian-woman-festival-echoes-of-financial-literacy-accelerated-investment-keep-pulsating/","keywords":["jumoke oduwole","anita ibru","lady maiden alex ibru","onome odometa","focus","guardian woman festival"],"creator":["Guardian Nigeria"],"video_url":null,"description":"From the early hours, the venue buzzed with excitement as attendees exchanged warm greetings, some reconnecting with familiar faces while others forged new connections. The air carried a mix of soft laughter and the rhythmic hum of background music, setting a tone of both celebration and inspiration.The post At Guardian Woman Festival: Echoes of financial literacy, accelerated investment keep pulsating appeared first on The Guardian Nigeria News - Nigeria and World News.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 04:16:14","pubDateTZ":"UTC","image_url":"https://cdn.guardian.ng/wp-content/uploads/2025/03/DSC_0224-1062x598.jpg","source_id":"guardian","source_priority":53079,"source_name":"The Guardian","source_url":"https://guardian.ng","source_icon":"https://i.bytvi.com/domain_icons/guardian.png","language":"english","country":["nigeria"],"category":["top"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"961fa836060964b584330de8f29295fa","title":"Zoho founder Sridhar Vembu blames India's IT industry for creating financial bubble: ‘Sucked all oxygen’","link":"https://www.livemint.com/companies/people/zoho-founder-sridhar-vembu-blames-indias-it-industry-for-creating-financial-bubble-sucked-all-oxygen-11742006087217.html","keywords":null,"creator":null,"video_url":null,"description":"Sridhar Vembu compared flash floods with financial bubbles, which can have damaging effects on an industry. His post sparked a comprehensive discussion online","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 03:17:15","pubDateTZ":"UTC","image_url":"https://www.livemint.com/lm-img/img/2025/03/15/1600x900/2-0-436956914-DSC-1348-0_1680884174369_1742008613013.JPG","source_id":"livemint","source_priority":7134,"source_name":"Mint","source_url":"https://www.livemint.com","source_icon":"https://i.bytvi.com/domain_icons/livemint.png","language":"english","country":["india"],"category":["business"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"d924e1717d6b752e6fe58d2d5fa8ea80","title":"Zoho founder Sridhar Vembu blames India’s IT industry for creating financial bubble: ‘Sucked all oxygen’ - Mint","link":"https://news.google.com/rss/articles/CBMi9AFBVV95cUxQclk5dEtWQUgtekRpUHNsU1Y3eGVjaXlNM1RnYlowSUliRzc4Y18tYjFia2lGTnRyR0ROOGtFUmUtMUl6dEdwdGxiS1R4UWZrS1BMb25PdEgxeHhVYkpKeWdMQmRzZ1dyUWYyWWl5bDFKOHFscE0tNV9xTndQTGFCaTl2TTh1QkdkWlFXTmVRQzE5RHpUazc2UFdJc1JoZjdkUU51bjZ3cDluYkNHWW5GYnpjdEpsaURUUW1hNTZlZEdjVE5UY2FOZnA5cl8weDctajlMU1VvT2pUTkFOTmNhaWtvUWNob3BBNGFKWDA5RjVYdDk00gH6AUFVX3lxTE9HY0xSMnI2UGk3YVRsTExZMktXNVIxZ3VPVXZOZ0xEZ3F4bVFfdGpuUDl2SmlqNnRmTXNheTZVV0FXUWZWYjc3RU9INWdBUFlVbHRfVmdNU3ZXdnRtUGxObmZhVzF0dW9ldHo2d25SVThjLTF6dWRVVmFtMkZVQ3BhdU1meWNZaG9jOWJBQ2RQRHZqNVB0djJHUFJmb0lsRk5ZdWExTl9jaHlLQ2dvOVVmTEdqdEVPeDBvZXpIUzdHWUR0dl9RMXpZR01jVkRfRDFVSS1OSGFtN19QZDUzTFdPZnE0NEdaZnRpbHVUcnF0ei1XelZxcHN5ZHc?oc=5","keywords":null,"creator":null,"video_url":null,"description":"Zoho founder Sridhar Vembu blames India’s IT industry for creating financial bubble: ‘Sucked all oxygen’ MintIntel needs help from TSMC now, for at least ...: Zoho founder Sridhar Vembu The Times of India'Sucked all the oxygen': Zoho’s Sridhar Vembu warns India’s IT dominance left key sectors gasping Business TodayWhat ails the software jobs market? Zoho's Sridhar Vembu says it's not AI The Economic Times'Sucked all the oxygen': Zoho's Sridhar Vembu warns India's IT dominance left key sectors gasping MSN","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 03:17:15","pubDateTZ":"UTC","image_url":null,"source_id":"google","source_priority":14,"source_name":"Google News","source_url":"https://news.google.com","source_icon":"https://i.bytvi.com/domain_icons/google.png","language":"english","country":["india"],"category":["business"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"3eb8f3145921d3c2f3adfbaa23da583d","title":"What ails the software jobs market? Zoho's Sridhar Vembu says it's not AI","link":"https://economictimes.indiatimes.com/tech/technology/what-ails-the-software-jobs-market-zohos-sridhar-vembu-says-its-not-ai/articleshow/119035133.cms","keywords":null,"creator":null,"video_url":null,"description":"According to the Zoho founder, enterprise software firms have built up massive over-capacity on the strength of a flood of venture capital, private equity and IPO money.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-15 01:26:58","pubDateTZ":"UTC","image_url":"https://img.etimg.com/thumb/width-1200,height-900,imgsize-34858,resizemode-75,msid-119035133/tech/technology/what-ails-the-software-jobs-market-zohos-sridhar-vembu-says-its-not-ai.jpg","source_id":"economictimes_indiatimes","source_priority":231,"source_name":"The Economic Times","source_url":"https://economictimes.indiatimes.com","source_icon":"https://i.bytvi.com/domain_icons/economictimes_indiatimes.png","language":"english","country":["india"],"category":["top"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false},{"article_id":"a33064a02800b2a3413a5bbed9b4b847","title":"Weitere Eskalationen und Rücktritte in Löhnberg","link":"https://www.mittelhessen.de/lokales/kreis-limburg-weilburg/loehnberg/weitere-eskalationen-und-ruecktritte-in-loehnberg-4471097","keywords":null,"creator":null,"video_url":null,"description":"Das Chaos in der verschuldeten Gemeinde Löhnberg nimmt kein Ende. Dabei entzweit die Personalie Frank Schmidt SPD-Ortsverein und SPD-Fraktion. Jetzt bezieht die Kreis-SPD Stellung.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2025-03-14 16:35:00","pubDateTZ":"UTC","image_url":"https://img.mittelhessen.de/lokales/kreis-limburg-weilburg/loehnberg/9ecuxk-loehnberger-spd-vorstand/alternates/OG_IMAGE_1200/loehnberger%20spd-vorstand","source_id":"mittelhessen","source_priority":2307662,"source_name":"Mittelhessen","source_url":"http://www.mittelhessen.de","source_icon":"https://i.bytvi.com/domain_icons/mittelhessen.png","language":"german","country":["germany"],"category":["top"],"ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS","ai_org":"ONLY AVAILABLE IN CORPORATE PLANS","duplicate":false}],"nextPage":"1741970100939446397"}

   
            if (response.results && response.results.length > 0) {
                for (var i = 0; i < Math.min(10, response.results.length); i++) { 
                    var article = response.results[i];
                    
                    var newsHTML = `
                        <div class="news-article">
                            <img src="${article.image_url || 'placeholder.jpg'}" alt="News Image">
                            <div class="news-content">
                                <h2>${article.title}</h2>
                                <p>${article.description}</p>
                                <p><strong>Date:</strong> ${article.pubDate}</p>
                                <p><strong>Country:</strong> ${article.country ? article.country.join(", ") : 'N/A'}</p>
                                <a href="${article.link}" target="_blank">Read More</a>
                            </div>
                        </div>
                        <br><br>
                    `;

                    newsContainer.innerHTML += newsHTML;
                }
            } 