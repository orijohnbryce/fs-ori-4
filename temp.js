function createNewsElements(data) {
    const articles = data.articles;
    for (const art of articles) {
        const link = art.url;
        const author = art.author;
        const title = art.title;
        const content = art.content;

        const newElement = document.createElement("div");
        
        const linkElement = document.createElement("a");
        linkElement.href = link;
        newElement.appendChild(linkElement)
        
        const authorElm = document.createElement("p");
        authorElm.textContent = author;
        newElement.appendChild(authorElm)
        
        const contentElm = document.createElement("p");
        contentElm.textContent = content;
        newElement.appendChild(contentElm)
        
        const titleElm = document.createElement("h4");
        titleElm.textContent = title;
        newElement.appendChild(contentElm)

        document.querySelector("#content").appendChild(newElement);
    }
}
//     {
//         "status": "ok",
//         "totalResults": 313,
//         "articles": [
//             {
//                 "source": {
//                     "id": "news24",
//                     "name": "News24"
//                 },
//                 "author": "Amanda Khoza",
//                 "title": "Back to basics: Panyaza Lesufi outlines ANC's plan to reclaim Gauteng",
//                 "description": "The ANC's Gauteng provincial co-convener, Premier Panyaza Lesufi, says the ANC needs to go back to basics if it wants to reclaim its dominance in the 2026 local government elections.",
//                 "url": "https://www.news24.com/news24/politics/back-to-basics-panyaza-lesufi-outlines-ancs-plan-to-reclaim-gauteng-20250504",
//                 "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/12730/83052a44ccd74c3f96e465b4c89da13c.jpg",
//                 "publishedAt": "2025-05-04T18:01:31",
//                 "content": "The ANC's Gauteng provincial co-convener, Premier Panyaza Lesufi, says the ANC needs to go back to basics if it wants to reclaim its dominance in the 2026 local government elections."
//             },
//             {
//                 "source": {
//                     "id": "cbc-news",
//                     "name": "CBC News"
//                 },
//                 "author": "CBC News",
//                 "title": "ANALYSIS | An energy superpower? Oilpatch skeptical of Carney's support for the sector | CBC News",
//                 "description": "Despite Mark Carney's pledges throughout the election campaign to kick-start the country's economy, build energy corridors and transform the country into an energy superpower, many in the oilpatch are unconvinced there will be any change in policy direction f…",
//                 "url": "http://www.cbc.ca/news/canada/calgary/oil-sector-mark-carney-1.7521971",
//                 "urlToImage": "https://i.cbc.ca/1.5636973.1676588399!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_1180/blood-tribe-oil.jpeg?im=Resize%3D620",
//                 "publishedAt": "2025-05-04T17:52:29.5139291Z",
//                 "content": "Despite Mark Carney's pledges throughout the election campaign to kick-start the country's economy, build energy corridors and transform the country into an energy superpower, many in the oilpatch ar… [+6538 chars]"
//             },
//             {
//                 "source": {
//                     "id": "bbc-sport",
//                     "name": "BBC Sport"
//                 },
//                 "author": null,
//                 "title": "Harry Kane: Humble, popular, ruthless... how England captain won first trophy at Bayern Munich",
//                 "description": "Harry Kane has spent his whole career fighting to win silverware, this is how he finally did it with Bayern Munich at the age of 31.",
//                 "url": "http://www.bbc.co.uk/sport/football/articles/cvgp32x41kyo",
//                 "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/424c/live/a90c0e50-2836-11f0-8f57-b7237f6a66e6.jpg",
//                 "publishedAt": "2025-05-04T17:52:19.8576821Z",
//                 "content": "Kane never wavered in his desire to keep improving after becoming the Bundesliga's record signing. He spoke recently about studying the game's greats and having the drive to consistently be one of th… [+2723 chars]"
//             },
//             {
//                 "source": {
//                     "id": "cbc-news",
//                     "name": "CBC News"
//                 },
//                 "author": "CBC News",
//                 "title": "The Trans Mountain expansion is everything the oilpatch wanted. Except the cost | CBC News",
//                 "description": "The Canadian oilpatch has a brand-new pipeline, something it's pleaded for year after year, and it offers a relatively quick route to the West Coast and overseas markets. But a year in, the newly expanded Trans Mountain Pipeline still isn’t running at full ca…",
//                 "url": "http://www.cbc.ca/news/canada/calgary/one-year-after-the-trans-mountain-pipeline-expansion-why-isn-t-it-full-1.7525284",
//                 "urlToImage": "https://i.cbc.ca/1.7357991.1729516775!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_1180/trans-mountain-pipeline-20240610.jpg?im=Resize%3D620",
//                 "publishedAt": "2025-05-04T17:52:19.1547338Z",
//                 "content": "The Canadian oilpatch has a brand-new pipeline, something it's pleaded for year after year, and it offers a relatively quick route to the West Coast and overseas markets.\r\nBut a year in, the newly ex… [+5217 chars]"
//             },
//             {
//                 "source": {
//                     "id": "bild",
//                     "name": "Bild"
//                 },
//                 "author": "Sebastian Wutzler",
//                 "title": "Nach Cottbus-Pleite: Kult-Trainer Wollitz schonungslos mit seinen Stars | Sport",
//                 "description": "Energie Cottbus verliert 2:4 gegen Waldhof Mannheim – und gerät im Aufstiegsrennen zur 2. Liga weiter aus dem Tritt!",
//                 "url": "https://www.bild.de/sport/fussball/nach-cottbus-pleite-kult-trainer-wollitz-schonungslos-mit-seinen-stars-681769b510132913ef60dacc",
//                 "urlToImage": "https://images.bild.de/681769b510132913ef60dacc/b2b59c75aa44f85e36f7d1385f766ec8,421a4196?w=1280",
//                 "publishedAt": "2025-05-04T17:52:10Z",
//                 "content": "Energie Cottbus verliert 2:4 gegen Waldhof Mannheim und gerät im Aufstiegsrennen weiter aus dem Tritt!\r\nZwei Spieltage vor Saisonende haben die Lausitzer nun drei Punkte Rückstand auf den 1. FC Saarb… [+2227 chars]"
//             },
//             {
//                 "source": {
//                     "id": "al-jazeera-english",
//                     "name": "Al Jazeera English"
//                 },
//                 "author": "Al Jazeera",
//                 "title": "NGO in talks with Malta to repair Gaza-bound aid ship ‘attacked by Israel’",
//                 "description": "Ship hit by two drones near Malta on Friday; NGO blames Israel for attack.",
//                 "url": "https://www.aljazeera.com/news/2025/5/4/ngo-in-talks-with-malta-to-repair-gaza-bound-aid-ship-attacked-by-israel",
//                 "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/05/2025-05-04T114513Z_1618264280_RC2CAEALSWFE_RTRMADP_3_ISRAEL-PALESTINIANS-NGO-GAZA-1746375307.jpg?resize=1920%2C1440",
//                 "publishedAt": "2025-05-04T17:51:18Z",
//                 "content": "An international NGO that intends to deliver humanitarian aid to Gaza by sea has said it was in talks with Maltas government about allowing a vessel to enter Maltese waters to repair damage caused by… [+2995 chars]"
//             },
//             {
//                 "source": {
//                     "id": "bild",
//                     "name": "Bild"
//                 },
//                 "author": "Michael Schacht",
//                 "title": "Tina Turner von Star-Fotograf Peter Lindbergh geehrt: Simply the Best | Unterhaltung",
//                 "description": "Im Mai jährt sich der Todestag von Tina Turner zum zweiten Mal. Ein neuer Bildband von Weltstar Peter Lindbergh (†74) erinnert an die Musik-Ikone. BILD hat schon geblättert.",
//                 "url": "https://www.bild.de/unterhaltung/stars-und-leute/tina-turner-von-star-fotograf-peter-lindbergh-geehrt-simply-the-best-6811d44e89c4827edd6a0eca",
//                 "urlToImage": "https://images.bild.de/6811d44e89c4827edd6a0eca/0db8033bd0a97119e776806cdc65560e,92bed386?w=1280",
//                 "publishedAt": "2025-05-04T17:44:11Z",
//                 "content": "Durch ihre eigene Musik ist sie unsterblich geworden. Und durch seine Bilder wird sie ewig strahlen.\r\nAm 24. Mai jährt sich der Todestag von Tina Turner (83) zum zweiten Mal. Aus diesem Anlass ersche… [+3168 chars]"
//             },
//             {
//                 "source": {
//                     "id": "breitbart-news",
//                     "name": "Breitbart News"
//                 },
//                 "author": "Amy Furr",
//                 "title": "Report: Democrats Skeptical About Kamala Harris 2028 Presidential Run",
//                 "description": "Senate Democrats are reportedly being cautious about the possibility of Kamala Harris running for the White House again in 2028.",
//                 "url": "https://www.breitbart.com/politics/2025/05/04/report-democrats-skeptical-about-kamala-harris-2028-presidential-run/",
//                 "urlToImage": "https://media.breitbart.com/media/2025/05/GettyImages-2212213158-640x335.jpg",
//                 "publishedAt": "2025-05-04T17:42:46Z",
//                 "content": "Some Senate Democrats are reportedly being cautious about the possibility of failed 2024 presidential candidate former Vice President Kamala Harris running for the White House again in 2028.\r\nOne Dem… [+2108 chars]"
//             },
//             {
//                 "source": {
//                     "id": "bbc-sport",
//                     "name": "BBC Sport"
//                 },
//                 "author": null,
//                 "title": "Chelsea 3-1 Liverpool: Enzo Fernandez and Cole Palmer help Blues win to strengthen Champions League hopes",
//                 "description": "Chelsea strengthen their bid for a place in next season's Champions League with victory against newly crowned Premier League champions Liverpool.",
//                 "url": "http://www.bbc.co.uk/sport/football/live/c74ngn5nd17t",
//                 "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/374c/live/b5b9f8b0-2903-11f0-8c66-ebf25fc2cfef.jpg",
//                 "publishedAt": "2025-05-04T17:37:28.0432878Z",
//                 "content": "Chelsea strengthened their bid for a place in next season's Champions League with victory against newly crowned Premier League champions Liverpool at Stamford Bridge.\r\nLiverpool head coach Arne Slot … [+1296 chars]"
//             },
//             {
//                 "source": {
//                     "id": "techradar",
//                     "name": "TechRadar"
//                 },
//                 "author": "Wayne Williams",
//                 "title": "Lenovo unleashes its most powerful mobile workstation but the ThinkPad P16s won't beat HP's ZBook Ultra AI monster",
//                 "description": "ThinkPad P16s Gen 4 has an AMD Ryzen AI PRO 300 series processor and up to 96GB RAM",
//                 "url": "https://www.techradar.com/pro/lenovo-unleashes-its-most-powerful-mobile-workstation-but-the-thinkpad-p16s-wont-beat-hps-zbook-ultra-ai-monster",
//                 "urlToImage": "https://cdn.mos.cms.futurecdn.net/oZUUa38VWprMBdSDX7FS8A.png",
//                 "publishedAt": "2025-05-04T17:34:00Z",
//                 "content": "<ul><li>Lenovo ThinkPad P16s Gen 4 offers powerful AMD performance for professionals</li><li>It delivers up to 96GB memory, Ryzen AI PRO chips, certified graphics support </li><li>It's good for mobil… [+1850 chars]"
//             },
//             {
//                 "source": {
//                     "id": "cnn",
//                     "name": "CNN"
//                 },
//                 "author": "ONTARIA WOODS",
//                 "title": "Hawaii’s Kilauea Volcano erupts in rare pattern not seen in nearly 40 years | CNN",
//                 "description": "Hawaii’s Kilauea Volcano could be seen hurling lava upwards of 300 feet into the air during a series of “rapid rebounds,” which scientists say hasn’t been seen in nearly 40 years.",
//                 "url": "https://www.cnn.com/2025/05/04/weather/video/hawaii-kilauea-volcano-rare-rapid-rebound-eruption-digvid",
//                 "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/250504-kilauea-eruption-16x9-thumbnail.jpg?c=16x9&q=w_800,c_fill",
//                 "publishedAt": "2025-05-04T17:22:11.9Z",
//                 "content": "Hawaiis Kilauea Volcano could be seen hurling lava upwards of 300 feet into the air during a series of rapid rebounds, which scientists say hasnt been seen in nearly 40 years."
//             },
//             {
//                 "source": {
//                     "id": "cbs-news",
//                     "name": "CBS News"
//                 },
//                 "author": null,
//                 "title": "Transcript: Ambassador Oksana Markarova on \"Face the Nation with Margaret Brennan,\" May 4, 2025",
//                 "description": "The following is the transcript of an interview with Oksana Markarova, Ukrainian ambassador to the U.S., that aired on \"Face the Nation with Margaret Brennan\" on May 4, 2025.",
//                 "url": "https://www.cbsnews.com/news/oksana-markarova-ukrainian-ambassador-face-the-nation-transcript-05-04-2025/",
//                 "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2025/05/04/bcf6ba15-280f-4b1d-b6fa-0763fe53d72a/thumbnail/1200x630/afd148b66ff12a7c5572d2eb41140c4e/1746374746201.png?v=7c5acc180b39394767372ab4e02619ce",
//                 "publishedAt": "2025-05-04T17:04:20+00:00",
//                 "content": "The following is the transcript of an interview with Oksana Markarova, Ukrainian ambassador to the U.S., that aired on \"Face the Nation with Margaret Brennan\" on May 4, 2025.\r\nMARGARET BRENNAN: We tu… [+8535 chars]"
//             },
//             {
//                 "source": {
//                     "id": "cbs-news",
//                     "name": "CBS News"
//                 },
//                 "author": null,
//                 "title": "Transcript: Rep. Mike Turner on \"Face the Nation with Margaret Brennan,\" May 4, 2025",
//                 "description": "The following is the transcript of an interview with Rep. Mike Turner, Republican of Ohio, that aired on \"Face the Nation with Margaret Brennan\" on May 4, 2025.",
//                 "url": "https://www.cbsnews.com/news/mike-turner-house-armed-services-face-the-nation-transcript-05-04-2025/",
//                 "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2025/05/04/30a5cc62-6ed8-4750-a0ea-0428958e7075/thumbnail/1200x630/31e8a2aa9b4c43b09c4922c4ca57581b/1746375153056.png?v=7c5acc180b39394767372ab4e02619ce",
//                 "publishedAt": "2025-05-04T17:03:48+00:00",
//                 "content": "The following is the transcript of an interview with Rep. Mike Turner, Republican of Ohio, that aired on \"Face the Nation with Margaret Brennan\" on May 4, 2025.\r\nMARGARET BRENNAN: Good morning and we… [+10720 chars]"
//             },
//             {
//                 "source": {
//                     "id": "t3n",
//                     "name": "T3n"
//                 },
//                 "author": "Marvin Fuhrmann",
//                 "title": "OpenAI plant Werbeoffensive: 25 Milliarden Dollar durch Werbung in kostenlosen ChatGPT-Accounts - t3n – digital pioneers",
//                 "description": "OpenAI könnte künftig doch auf Werbeeinblendungen bei kostenlosen ChatGPT-Accounts setzen. Das geht aus einer Prognose des Unternehmens hervor. Was sich das Unternehmen von dieser Änderung verspricht. Wer ChatGPT benutzen möchte, muss dafür nicht zwangsläufig…",
//                 "url": "https://t3n.de/news/openai-plant-werbeoffensive-25-milliarden-1684827/",
//                 "urlToImage": "https://t3n.de/news/wp-content/uploads/2025/03/open-ai-geld.jpg",
//                 "publishedAt": "2025-05-04T17:00:01Z",
//                 "content": "Wer ChatGPT benutzen möchte, muss dafür nicht zwangsläufig zahlen. Der Chatbot von OpenAI bietet wie viele andere KI-Modelle Gratis-Features, die lediglich eine Anmeldung per Account voraussetzen. Do… [+2457 chars]"
//             },
//             {
//                 "source": {
//                     "id": "bloomberg",
//                     "name": "Bloomberg"
//                 },
//                 "author": "Craig Torres, Michael Sasso",
//                 "title": "Trade Chaos Is Part of the Plan for Trump, Nightmare for Powell",
//                 "description": "Jim Tuchler, a Chicago-area retailer, and Federal Reserve Chair Jerome Powell have a lot in common these days.",
//                 "url": "https://www.bloomberg.com/news/articles/2025-05-04/trade-chaos-is-part-of-the-plan-for-trump-nightmare-for-powell",
//                 "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iuDpS5xYmXhw/v1/1200x800.jpg",
//                 "publishedAt": "2025-05-04T17:00:00+00:00",
//                 "content": "Jim Tuchler, a Chicago-area retailer, and Federal Reserve Chair Jerome Powell have a lot in common these days.\r\nTuchler says the turmoil around tariffs has landed him in a maddening game of chicken, … [+277 chars]"
//             },
//             {
//                 "source": {
//                     "id": "espn",
//                     "name": "ESPN"
//                 },
//                 "author": null,
//                 "title": "Naomi Osaka wins 1st tournament since becoming a mother - ESPN",
//                 "description": "Four-time Grand Slam winner Naomi Osaka wins L'Open 35 de Saint-Malo for her first WTA title since giving birth in 2023.",
//                 "url": "https://www.espn.com/tennis/story/_/id/44995300/naomi-osaka-wins-1st-tournament-becoming-mother",
//                 "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0504%2Fr1487887_1296x729_16%2D9.jpg",
//                 "publishedAt": "2025-05-04T16:59:00Z",
//                 "content": "Four-time Grand Slam winner Naomi Osaka won her first WTA title since triumphing at the 2021 Australian Open after beating Slovenia's Kaja Juvan 6-1, 7-5 in the final of the L'Open 35 de Saint-Malo -… [+412 chars]"
//             },
//             {
//                 "source": {
//                     "id": "le-monde",
//                     "name": "Le Monde"
//                 },
//                 "author": "Le Monde avec AFP",
//                 "title": "Grèves SNCF : trafic « fortement perturbé » lundi en Ile-de-France sur les RER B et C ; SNCF Voyageurs assure qu’il n’y aura pas de « semaine noire » au niveau national",
//                 "description": "Plusieurs catégories de personnel sont appelées à faire grève à partir de lundi par la CGT-Cheminots et SUD-Rail pour réclamer une hausse des rémunérations et une meilleure anticipation des plannings",
//                 "url": "https://www.lemonde.fr/economie/article/2025/05/04/greves-sncf-trafic-fortement-perturbe-lundi-en-ile-de-france-sur-les-rer-b-et-c-sncf-voyageurs-assure-qu-il-n-y-aura-pas-de-semaine-noire-au-niveau-national_6602842_3235.html",
//                 "urlToImage": "https://img.lemde.fr/2025/04/18/0/0/4991/3327/1440/960/60/0/976f617_ftp-import-images-1-ikamgx1t2nvn-2025-04-18t172654z-1544280985-rc2e0eadq422-rtrmadp-3-france-strike-railway.JPG",
//                 "publishedAt": "2025-05-04T16:48:34Z",
//                 "content": "Un TGV à Paris, le 18 avril 2025. SARAH MEYSSONNIER / REUTERS\r\nLe trafic SNCF en Ile-de-France sera « fortement perturbé » lundi sur les RER B et C ainsi que pour trois Transiliens, mais normal sur l… [+2767 chars]"
//             },
//             {
//                 "source": {
//                     "id": "cbs-news",
//                     "name": "CBS News"
//                 },
//                 "author": "CBS News",
//                 "title": "4/30: CBS Mornings Plus",
//                 "description": "Severe weather has left a trail of destruction across parts of the U.S. as multiple tornadoes touched down — and forecasters warn more could be on the way. Also, France's foreign minister on Trump’s second term and what it means for the U.S.-France partnershi…",
//                 "url": "https://www.cbsnews.com/video/043025-cbs-mornings-plus/",
//                 "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2025/04/30/669bab3b-951d-4dde-94c4-d23337e9237d/thumbnail/1200x630/3c96e8c3cf5db61de9441c40129394fe/cbsmorningsplus-full-3719492-640x360.jpg?v=7c5acc180b39394767372ab4e02619ce",
//                 "publishedAt": "2025-05-04T16:47:01+00:00",
//                 "content": "Copyright ©2025 CBS Interactive Inc. All rights reserved."
//             }
//         ]
//     }
// }