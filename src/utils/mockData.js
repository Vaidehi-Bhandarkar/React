//Restaurant Data
const restaurantList = {
   "@context":"https://schema.org",
   "@type":"ItemList",
   "itemListElement":[
      {
         "@type":"ListItem",
         "position":3,
         "item":{
            "@type":"Restaurant",
            "name":"La Pino'z Pizza",
            "image":"https://b.zmtcdn.com/data/pictures/1/19769671/3ad8013d695b8057b05ad4882e2e5e8c_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.1",
               "reviewCount":"7,005"
            },
            "url":"/ahmedabad/la-pinoz-pizza-1-naranpura/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"6, Near Vishwesh Tower, Naranpura, Ahmedabad"
            },
            "servesCuisine":"Pizza, Pasta, Italian"
         }
      },
      {
         "@type":"ListItem",
         "position":2,
         "item":{
            "@type":"Restaurant",
            "name":"McDonald's",
            "image":"https://b.zmtcdn.com/data/pictures/1/110271/05b4cf99367d1036bccad7c4ca7a95e5_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.0",
               "reviewCount":"21K"
            },
            "url":"/ahmedabad/mcdonalds-ashram-road/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"Ground Floor, City Gold Multiplex, Ashram Road, Ahmedabad"
            },
            "servesCuisine":"Burger, Fast Food, Beverages"
         }
      },
      {
         "@type":"ListItem",
         "position":1,
         "item":{
            "@type":"Restaurant",
            "name":"Domino's Pizza",
            "image":"https://b.zmtcdn.com/data/pictures/6/110116/1fc9a366b808205f6294527b168d9a0b_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.0",
               "reviewCount":"14.2K"
            },
            "url":"/ahmedabad/dominos-pizza-c-g-road/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"2, Ground Floor, Sachet 1, C G Road, Ahmedabad"
            },
            "servesCuisine":"Pizza, Italian, Fast Food"
         }
      },
      {
         "@type":"ListItem",
         "position":4,
         "item":{
            "@type":"Restaurant",
            "name":"Jugaad Nights",
            "image":"https://b.zmtcdn.com/data/pictures/chains/5/18354035/ebb4e14ab03ce56a6a7107628c86c5f7_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.2",
               "reviewCount":"34.6K"
            },
            "url":"/ahmedabad/jugaad-nights-navrangpura/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"1 & 2, Ground Floor, M Square, Swastik Society, Swastik Circle, Near Jain Dairy, Navrangpura, Ahmedabad"
            },
            "servesCuisine":"Chinese, North Indian, Continental"
         }
      },
      {
         "@type":"ListItem",
         "position":5,
         "item":{
            "@type":"Restaurant",
            "name":"KFC",
            "image":"https://b.zmtcdn.com/data/pictures/1/21544661/3704a8f3afd09d718915ca7cd5ecf413_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"3.8",
               "reviewCount":"915"
            },
            "url":"/ahmedabad/kfc-navrangpura/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"334, Shop 3 & 4, Survey 3986, 3987, 3988, 3991, Ground Floor, Sulit Business Spaces, Near Vijay Cross Road, Navrangpura, Ahmedabad"
            },
            "servesCuisine":"Burger, Fast Food, Rolls"
         }
      },
      {
         "@type":"ListItem",
         "position":6,
         "item":{
            "@type":"Restaurant",
            "name":"Urban Khichdi",
            "image":"https://b.zmtcdn.com/data/pictures/chains/0/18718880/52b70d4dc8f94776d9f8146d13009461_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.4",
               "reviewCount":"26.1K"
            },
            "url":"/ahmedabad/urban-khichdi-vastrapur/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"A/FF/103, Shivalik Plaza, Opposite AMA, IIM Road, Vastrapur, Ahmedabad"
            },
            "servesCuisine":"North Indian, Healthy Food, Street Food"
         }
      },
      {
         "@type":"ListItem",
         "position":7,
         "item":{
            "@type":"Restaurant",
            "name":"Mahalaxmi Bhaji Pav-Manekchowk Wala",
            "image":"https://b.zmtcdn.com/data/pictures/chains/9/18603039/4b90a11075263df24271958a9e93a247_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.2",
               "reviewCount":"29.8K"
            },
            "url":"/ahmedabad/mahalaxmi-bhaji-pav-manekchowk-wala-ellis-bridge/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"9, Ground Floor, Dev Complex, Near Parimal Garden, Ellis Bridge, Ahmedabad"
            },
            "servesCuisine":"Street Food"
         }
      },
      {
         "@type":"ListItem",
         "position":8,
         "item":{
            "@type":"Restaurant",
            "name":"La Milano Pizzeria",
            "image":"https://b.zmtcdn.com/data/pictures/chains/1/19708611/58e9a8bb27bf7435a139c53b701a722d_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"4.1",
               "reviewCount":"5,115"
            },
            "url":"/ahmedabad/la-milano-pizzeria-navrangpura/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"Ground Floor 1, Campur Corner, HL College Road, Navrangpura, Ahmedabad"
            },
            "servesCuisine":"Pizza, Pasta, Italian"
         }
      },
      {
         "@type":"ListItem",
         "position":9,
         "item":{
            "@type":"Restaurant",
            "name":"Honest",
            "image":"https://b.zmtcdn.com/data/pictures/chains/8/110198/ffa9c907b81ef0453b3c189ae674510d_o2_featured_v2.jpg?output-format=webp",
            "aggregateRating":{
               "@type":"AggregateRating",
               "ratingValue":"3.1",
               "reviewCount":"2,671"
            },
            "url":"/ahmedabad/honest-2-ashram-road/order",
            "address":{
               "@type":"PostalAddress",
               "addressCountry":"",
               "addressLocality":"",
               "addressRegion":"",
               "postalCode":"",
               "streetAddress":"Block B/, 8 To 10, 14, 15, Sun West Bank, Navrangpura, Ashram Road, Ahmedabad"
            },
            "servesCuisine":"South Indian, Chinese, Fast Food"
         }
      },
      {
                        "@type": "ListItem",
                        "position": 10,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Taco Bell",
                            "image": "https://b.zmtcdn.com/data/pictures/chains/8/19292258/0bb3ddb90f6d62d7e9edc6d40292589d_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.6",
                                "reviewCount": "3,971"
                            },
                            "url": "/ahmedabad/taco-bell-bodakdev/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Shop 13, Ground Floor, Shivalik Shilp, Iskon Junction, T P Scheme 51, Sarkhej Gandhinagar Highway, Bodakdev, Ahmedabad"
                            },
                            "servesCuisine": "Fast Food, Mexican"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 12,
                        "item": {
                            "@type": "Restaurant",
                            "name": "MMV - Mumbaiya Misal & Vadapav",
                            "image": "https://b.zmtcdn.com/data/pictures/chains/0/20016730/0dddc1de1bda9aa79b31abb1eb7ade59_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.2",
                                "reviewCount": "1,276"
                            },
                            "url": "/ahmedabad/mmv-mumbaiya-misal-vadapav-bodakdev/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Shop 2, Surmount, Byzantine, Opposite Iskon Mega Mall, S.G. Highway, Bodakdev, Ahmedabad"
                            },
                            "servesCuisine": "Street Food, Maharashtrian, Beverages"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 13,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Radhe Dhokla",
                            "image": "https://b.zmtcdn.com/data/pictures/0/21779600/d26582c3d169673db3c77cc87f71d317_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.3",
                                "reviewCount": "1,764"
                            },
                            "url": "/ahmedabad/radhe-dhokla-1-vastrapur/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Shop 1, IM Complex, Vastrapur, Ahmedabad"
                            },
                            "servesCuisine": "Gujarati, Street Food, Biryani"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 14,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Uboat - Gourmet Subs",
                            "image": "https://b.zmtcdn.com/data/pictures/5/21907715/0266a28240c447fbfa30c1286b45c4b3_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.1",
                                "reviewCount": "58"
                            },
                            "url": "/ahmedabad/uboat-gourmet-subs-prahlad-nagar/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "29, Ground Floor, Rivera Shopping Complex, Near, Prahladnagar Road, Prahlad Nagar, Ahmedabad"
                            },
                            "servesCuisine": "Sandwich, Wraps, Salad"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 15,
                        "item": {
                            "@type": "Restaurant",
                            "name": "McDonald's",
                            "image": "https://b.zmtcdn.com/data/pictures/8/19274718/05b4cf99367d1036bccad7c4ca7a95e5_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.0",
                                "reviewCount": "9,280"
                            },
                            "url": "/ahmedabad/mcdonalds-bodakdev/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Shop 14, Ground Floor, Shivalik Shilp, TP Scheme 51, SG Highway, Iscon Junction, Bodakdev, Ahmedabad"
                            },
                            "servesCuisine": "Burger, Fast Food, Beverages"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 16,
                        "item": {
                            "@type": "Restaurant",
                            "name": "South Dilli Momo's",
                            "image": "https://b.zmtcdn.com/data/pictures/8/21449398/4152b5147b9c2238006349d3255212af_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.3",
                                "reviewCount": "357"
                            },
                            "url": "/ahmedabad/south-dilli-momos-vastrapur/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Shop 2, Ground Floor, Palak Center, Opposite Regency Tower, Vastrapur, Ahmedabad"
                            },
                            "servesCuisine": "Momos"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 17,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Roastery Cultur - The Coffee Company",
                            "image": "https://b.zmtcdn.com/data/pictures/4/19010664/1f9f5578a98dbae059b26d3642ff7b5c_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.4",
                                "reviewCount": "3,764"
                            },
                            "url": "/ahmedabad/roastery-cultur-the-coffee-company-bodakdev/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "41, Springfield Row House, Near Akash Towers, Bodakdev, Ahmedabad"
                            },
                            "servesCuisine": "Cafe, Fast Food, Italian"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 18,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Honest",
                            "image": "https://b.zmtcdn.com/data/pictures/chains/8/110198/ffa9c907b81ef0453b3c189ae674510d_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "3.9",
                                "reviewCount": "12.1K"
                            },
                            "url": "/ahmedabad/honest-bodakdev/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "17-19, Ground Floor, Corporate House, Near Shradha Petrol Pump, Bodakdev, Ahmedabad"
                            },
                            "servesCuisine": "North Indian, South Indian, Fast Food"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 19,
                        "item": {
                            "@type": "Restaurant",
                            "name": "Sandwich Bazz",
                            "image": "https://b.zmtcdn.com/data/pictures/7/20666137/e8f6354e5b92009412a110310f5a5302_o2_featured_v2.jpg?output-format=webp",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.1",
                                "reviewCount": "3,750"
                            },
                            "url": "/ahmedabad/sandwich-bazz-vastrapur/order",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "",
                                "addressLocality": "",
                                "addressRegion": "",
                                "postalCode": "",
                                "streetAddress": "Shop 3, Ground Floor, Millenium Plaza, Opposite Swaminarayan Mandir, Mansi Circle, Vastrapur, Ahmedabad"
                            },
                            "servesCuisine": "Fast Food, Sandwich"
                        }
                    }
   ]
};

export default restaurantList;