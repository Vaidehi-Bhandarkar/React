//Restaurant Data
// const restaurantList = {
//    "@context":"https://schema.org",
//    "@type":"ItemList",
//    "itemListElement":[
//       {
//          "@type":"ListItem",
//          "position":3,
//          "item":{
//             "@type":"Restaurant",
//             "name":"La Pino'z Pizza",
//             "image":"https://b.zmtcdn.com/data/pictures/1/19769671/3ad8013d695b8057b05ad4882e2e5e8c_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.1",
//                "reviewCount":"7,005"
//             },
//             "url":"/ahmedabad/la-pinoz-pizza-1-naranpura/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"6, Near Vishwesh Tower, Naranpura, Ahmedabad"
//             },
//             "servesCuisine":"Pizza, Pasta, Italian"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":2,
//          "item":{
//             "@type":"Restaurant",
//             "name":"McDonald's",
//             "image":"https://b.zmtcdn.com/data/pictures/1/110271/05b4cf99367d1036bccad7c4ca7a95e5_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.0",
//                "reviewCount":"21K"
//             },
//             "url":"/ahmedabad/mcdonalds-ashram-road/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"Ground Floor, City Gold Multiplex, Ashram Road, Ahmedabad"
//             },
//             "servesCuisine":"Burger, Fast Food, Beverages"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":1,
//          "item":{
//             "@type":"Restaurant",
//             "name":"Domino's Pizza",
//             "image":"https://b.zmtcdn.com/data/pictures/6/110116/1fc9a366b808205f6294527b168d9a0b_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.0",
//                "reviewCount":"14.2K"
//             },
//             "url":"/ahmedabad/dominos-pizza-c-g-road/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"2, Ground Floor, Sachet 1, C G Road, Ahmedabad"
//             },
//             "servesCuisine":"Pizza, Italian, Fast Food"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":4,
//          "item":{
//             "@type":"Restaurant",
//             "name":"Jugaad Nights",
//             "image":"https://b.zmtcdn.com/data/pictures/chains/5/18354035/ebb4e14ab03ce56a6a7107628c86c5f7_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.2",
//                "reviewCount":"34.6K"
//             },
//             "url":"/ahmedabad/jugaad-nights-navrangpura/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"1 & 2, Ground Floor, M Square, Swastik Society, Swastik Circle, Near Jain Dairy, Navrangpura, Ahmedabad"
//             },
//             "servesCuisine":"Chinese, North Indian, Continental"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":5,
//          "item":{
//             "@type":"Restaurant",
//             "name":"KFC",
//             "image":"https://b.zmtcdn.com/data/pictures/1/21544661/3704a8f3afd09d718915ca7cd5ecf413_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"3.8",
//                "reviewCount":"915"
//             },
//             "url":"/ahmedabad/kfc-navrangpura/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"334, Shop 3 & 4, Survey 3986, 3987, 3988, 3991, Ground Floor, Sulit Business Spaces, Near Vijay Cross Road, Navrangpura, Ahmedabad"
//             },
//             "servesCuisine":"Burger, Fast Food, Rolls"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":6,
//          "item":{
//             "@type":"Restaurant",
//             "name":"Urban Khichdi",
//             "image":"https://b.zmtcdn.com/data/pictures/chains/0/18718880/52b70d4dc8f94776d9f8146d13009461_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.4",
//                "reviewCount":"26.1K"
//             },
//             "url":"/ahmedabad/urban-khichdi-vastrapur/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"A/FF/103, Shivalik Plaza, Opposite AMA, IIM Road, Vastrapur, Ahmedabad"
//             },
//             "servesCuisine":"North Indian, Healthy Food, Street Food"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":7,
//          "item":{
//             "@type":"Restaurant",
//             "name":"Mahalaxmi Bhaji Pav-Manekchowk Wala",
//             "image":"https://b.zmtcdn.com/data/pictures/chains/9/18603039/4b90a11075263df24271958a9e93a247_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.2",
//                "reviewCount":"29.8K"
//             },
//             "url":"/ahmedabad/mahalaxmi-bhaji-pav-manekchowk-wala-ellis-bridge/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"9, Ground Floor, Dev Complex, Near Parimal Garden, Ellis Bridge, Ahmedabad"
//             },
//             "servesCuisine":"Street Food"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":8,
//          "item":{
//             "@type":"Restaurant",
//             "name":"La Milano Pizzeria",
//             "image":"https://b.zmtcdn.com/data/pictures/chains/1/19708611/58e9a8bb27bf7435a139c53b701a722d_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"4.1",
//                "reviewCount":"5,115"
//             },
//             "url":"/ahmedabad/la-milano-pizzeria-navrangpura/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"Ground Floor 1, Campur Corner, HL College Road, Navrangpura, Ahmedabad"
//             },
//             "servesCuisine":"Pizza, Pasta, Italian"
//          }
//       },
//       {
//          "@type":"ListItem",
//          "position":9,
//          "item":{
//             "@type":"Restaurant",
//             "name":"Honest",
//             "image":"https://b.zmtcdn.com/data/pictures/chains/8/110198/ffa9c907b81ef0453b3c189ae674510d_o2_featured_v2.jpg?output-format=webp",
//             "aggregateRating":{
//                "@type":"AggregateRating",
//                "ratingValue":"3.1",
//                "reviewCount":"2,671"
//             },
//             "url":"/ahmedabad/honest-2-ashram-road/order",
//             "address":{
//                "@type":"PostalAddress",
//                "addressCountry":"",
//                "addressLocality":"",
//                "addressRegion":"",
//                "postalCode":"",
//                "streetAddress":"Block B/, 8 To 10, 14, 15, Sun West Bank, Navrangpura, Ashram Road, Ahmedabad"
//             },
//             "servesCuisine":"South Indian, Chinese, Fast Food"
//          }
//       },
//       {
//                         "@type": "ListItem",
//                         "position": 10,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "Taco Bell",
//                             "image": "https://b.zmtcdn.com/data/pictures/chains/8/19292258/0bb3ddb90f6d62d7e9edc6d40292589d_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "3.6",
//                                 "reviewCount": "3,971"
//                             },
//                             "url": "/ahmedabad/taco-bell-bodakdev/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "Shop 13, Ground Floor, Shivalik Shilp, Iskon Junction, T P Scheme 51, Sarkhej Gandhinagar Highway, Bodakdev, Ahmedabad"
//                             },
//                             "servesCuisine": "Fast Food, Mexican"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 12,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "MMV - Mumbaiya Misal & Vadapav",
//                             "image": "https://b.zmtcdn.com/data/pictures/chains/0/20016730/0dddc1de1bda9aa79b31abb1eb7ade59_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.2",
//                                 "reviewCount": "1,276"
//                             },
//                             "url": "/ahmedabad/mmv-mumbaiya-misal-vadapav-bodakdev/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "Shop 2, Surmount, Byzantine, Opposite Iskon Mega Mall, S.G. Highway, Bodakdev, Ahmedabad"
//                             },
//                             "servesCuisine": "Street Food, Maharashtrian, Beverages"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 13,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "Radhe Dhokla",
//                             "image": "https://b.zmtcdn.com/data/pictures/0/21779600/d26582c3d169673db3c77cc87f71d317_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.3",
//                                 "reviewCount": "1,764"
//                             },
//                             "url": "/ahmedabad/radhe-dhokla-1-vastrapur/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "Shop 1, IM Complex, Vastrapur, Ahmedabad"
//                             },
//                             "servesCuisine": "Gujarati, Street Food, Biryani"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 14,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "Uboat - Gourmet Subs",
//                             "image": "https://b.zmtcdn.com/data/pictures/5/21907715/0266a28240c447fbfa30c1286b45c4b3_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.1",
//                                 "reviewCount": "58"
//                             },
//                             "url": "/ahmedabad/uboat-gourmet-subs-prahlad-nagar/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "29, Ground Floor, Rivera Shopping Complex, Near, Prahladnagar Road, Prahlad Nagar, Ahmedabad"
//                             },
//                             "servesCuisine": "Sandwich, Wraps, Salad"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 15,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "McDonald's",
//                             "image": "https://b.zmtcdn.com/data/pictures/8/19274718/05b4cf99367d1036bccad7c4ca7a95e5_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.0",
//                                 "reviewCount": "9,280"
//                             },
//                             "url": "/ahmedabad/mcdonalds-bodakdev/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "Shop 14, Ground Floor, Shivalik Shilp, TP Scheme 51, SG Highway, Iscon Junction, Bodakdev, Ahmedabad"
//                             },
//                             "servesCuisine": "Burger, Fast Food, Beverages"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 16,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "South Dilli Momo's",
//                             "image": "https://b.zmtcdn.com/data/pictures/8/21449398/4152b5147b9c2238006349d3255212af_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.3",
//                                 "reviewCount": "357"
//                             },
//                             "url": "/ahmedabad/south-dilli-momos-vastrapur/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "Shop 2, Ground Floor, Palak Center, Opposite Regency Tower, Vastrapur, Ahmedabad"
//                             },
//                             "servesCuisine": "Momos"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 17,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "Roastery Cultur - The Coffee Company",
//                             "image": "https://b.zmtcdn.com/data/pictures/4/19010664/1f9f5578a98dbae059b26d3642ff7b5c_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.4",
//                                 "reviewCount": "3,764"
//                             },
//                             "url": "/ahmedabad/roastery-cultur-the-coffee-company-bodakdev/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "41, Springfield Row House, Near Akash Towers, Bodakdev, Ahmedabad"
//                             },
//                             "servesCuisine": "Cafe, Fast Food, Italian"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 18,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "Honest",
//                             "image": "https://b.zmtcdn.com/data/pictures/chains/8/110198/ffa9c907b81ef0453b3c189ae674510d_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "3.9",
//                                 "reviewCount": "12.1K"
//                             },
//                             "url": "/ahmedabad/honest-bodakdev/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "17-19, Ground Floor, Corporate House, Near Shradha Petrol Pump, Bodakdev, Ahmedabad"
//                             },
//                             "servesCuisine": "North Indian, South Indian, Fast Food"
//                         }
//                     },
//                     {
//                         "@type": "ListItem",
//                         "position": 19,
//                         "item": {
//                             "@type": "Restaurant",
//                             "name": "Sandwich Bazz",
//                             "image": "https://b.zmtcdn.com/data/pictures/7/20666137/e8f6354e5b92009412a110310f5a5302_o2_featured_v2.jpg?output-format=webp",
//                             "aggregateRating": {
//                                 "@type": "AggregateRating",
//                                 "ratingValue": "4.1",
//                                 "reviewCount": "3,750"
//                             },
//                             "url": "/ahmedabad/sandwich-bazz-vastrapur/order",
//                             "address": {
//                                 "@type": "PostalAddress",
//                                 "addressCountry": "",
//                                 "addressLocality": "",
//                                 "addressRegion": "",
//                                 "postalCode": "",
//                                 "streetAddress": "Shop 3, Ground Floor, Millenium Plaza, Opposite Swaminarayan Mandir, Mansi Circle, Vastrapur, Ahmedabad"
//                             },
//                             "servesCuisine": "Fast Food, Sandwich"
//                         }
//                     }
//    ]
// };

const restaurantList = {
	statusCode: 0,
	data: {
		statusMessage: "done successfully",
		pageOffset: {
			nextOffset: "CJhlELQ4KICQ2fDkv92ueTCnEzgE",
			widgetOffset: {
				NewListingView_category_bar_chicletranking_TwoRows: "",
				NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
				Restaurant_Group_WebView_SEO_PB_Theme: "",
				collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
				inlineFacetFilter: "",
				restaurantCountWidget: "",
			},
		},
		cards: [
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
						header: {
							title: "What's on your mind?",
							headerStyling: {
								padding: {
									left: 16,
									top: 16,
									bottom: 4,
								},
							},
						},
						layout: {
							rows: 1,
							columns: 5,
							horizontalScrollEnabled: true,
							itemSpacing: 24,
							widgetPadding: {},
							containerStyle: {
								containerPadding: {
									left: 8,
									top: 8,
									right: 12,
									bottom: 4,
								},
							},
							scrollBar: {},
							widgetTheme: {
								defaultMode: {
									backgroundColour: "#FFFFFF",
									theme: "THEME_TYPE_LIGHT",
								},
								darkMode: {
									theme: "THEME_TYPE_DARK",
								},
							},
						},
						imageGridCards: {
							info: [
								{
									id: "750591",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
									action: {
										link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
										text: "Biryani",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurants curated for biryani",
										altTextCta: "open",
									},
									entityId:
										"swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "749772",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
									action: {
										link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
										text: "Noodles",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurant curated for noodles",
										altTextCta: "open",
									},
									entityId: "80463",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "750201",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
									action: {
										link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
										text: "Paratha",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurants curated for paratha",
										altTextCta: "open",
									},
									entityId:
										"swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "750581",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
									action: {
										link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
										text: "North Indian",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurants curated for north indian",
										altTextCta: "open",
									},
									entityId:
										"swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "749760",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
									action: {
										link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
										text: "Khichdi",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurants curated for khichdi",
										altTextCta: "open",
									},
									entityId: "80455",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "749762",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
									action: {
										link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
										text: "Lassi",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurant curated for lassi",
										altTextCta: "open",
									},
									entityId: "80458",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "750571",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
									action: {
										link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
										text: "Pure Veg",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurants curated for veg",
										altTextCta: "open",
									},
									entityId:
										"swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "750587",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
									action: {
										link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
										text: "Chinese",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurant curated for chinese",
										altTextCta: "open",
									},
									entityId:
										"swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "750586",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
									action: {
										link: "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
										text: "Gulab Jamun",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurant curated for gulab jamun",
										altTextCta: "open",
									},
									entityId: "80430",
									frequencyCapping: {},
									externalMarketing: {},
								},
								{
									id: "750107",
									imageId:
										"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
									action: {
										link: "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
										text: "Dessert",
										type: "WEBLINK",
									},
									entityType: "BANNER",
									accessibility: {
										altText: "restaurant curated for dessert",
										altTextCta: "open",
									},
									entityId:
										"swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
									frequencyCapping: {},
									externalMarketing: {},
								},
							],
							style: {
								width: {
									type: "TYPE_RELATIVE",
									value: 0.2941,
									reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
								},
								height: {
									type: "TYPE_RELATIVE",
									value: 1.2444,
									reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
								},
							},
						},
						id: "whats_on_your_mind",
						gridElements: {
							infoWithStyle: {
								"@type":
									"type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
								info: [
									{
										id: "750591",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
										action: {
											link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
											text: "Biryani",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurants curated for biryani",
											altTextCta: "open",
										},
										entityId:
											"swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "749772",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
										action: {
											link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
											text: "Noodles",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurant curated for noodles",
											altTextCta: "open",
										},
										entityId: "80463",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "750201",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
										action: {
											link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
											text: "Paratha",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurants curated for paratha",
											altTextCta: "open",
										},
										entityId:
											"swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "750581",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
										action: {
											link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
											text: "North Indian",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurants curated for north indian",
											altTextCta: "open",
										},
										entityId:
											"swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "749760",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
										action: {
											link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
											text: "Khichdi",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurants curated for khichdi",
											altTextCta: "open",
										},
										entityId: "80455",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "749762",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
										action: {
											link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
											text: "Lassi",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurant curated for lassi",
											altTextCta: "open",
										},
										entityId: "80458",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "750571",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
										action: {
											link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
											text: "Pure Veg",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurants curated for veg",
											altTextCta: "open",
										},
										entityId:
											"swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "750587",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
										action: {
											link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
											text: "Chinese",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurant curated for chinese",
											altTextCta: "open",
										},
										entityId:
											"swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "750586",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
										action: {
											link: "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
											text: "Gulab Jamun",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurant curated for gulab jamun",
											altTextCta: "open",
										},
										entityId: "80430",
										frequencyCapping: {},
										externalMarketing: {},
									},
									{
										id: "750107",
										imageId:
											"MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
										action: {
											link: "https://www.swiggy.com/collections/83661?collection_id=83661&search_context=desserts&tags=layout_CCS_Desserts&type=rcv2",
											text: "Dessert",
											type: "WEBLINK",
										},
										entityType: "BANNER",
										accessibility: {
											altText: "restaurant curated for dessert",
											altTextCta: "open",
										},
										entityId:
											"swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Desserts&search_context=desserts",
										frequencyCapping: {},
										externalMarketing: {},
									},
								],
								style: {
									width: {
										type: "TYPE_RELATIVE",
										value: 0.2941,
										reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
									},
									height: {
										type: "TYPE_RELATIVE",
										value: 1.2444,
										reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
									},
								},
							},
						},
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
						header: {
							title: "Top restaurant chains in Chhindwara",
							action: {},
							headerStyling: {
								padding: {
									left: 16,
									top: 28,
									bottom: 18,
								},
							},
						},
						layout: {
							rows: 1,
							columns: 7,
							horizontalScrollEnabled: true,
							itemSpacing: 32,
							widgetPadding: {},
							containerStyle: {
								containerPadding: {
									left: 16,
									right: 12,
									bottom: 12,
								},
							},
							scrollBar: {
								scrollThumbColor: "#E46D47",
								scrollTrackColor: "#02060C",
								width: 54,
								height: 4,
								scrollStyling: {
									padding: {
										top: 6,
										bottom: 24,
									},
								},
							},
							widgetTheme: {
								defaultMode: {
									backgroundColour: "#1B3028",
									theme: "THEME_TYPE_DARK",
								},
								darkMode: {
									backgroundColour: "#1B3028",
									theme: "THEME_TYPE_DARK",
								},
							},
						},
						id: "top_brands_for_you",
						gridElements: {
							infoWithStyle: {
								"@type":
									"type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
								restaurants: [
									{
										info: {
											id: "234875",
											name: "Adil Hotel",
											cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
											locality: "Rautha Wada",
											areaName: "Chhindwara Locality",
											costForTwo: "â‚¹150 for two",
											cuisines: ["North Indian", "Biryani", "Tandoor"],
											avgRating: 4.3,
											parentId: "27123",
											avgRatingString: "4.3",
											totalRatingsString: "1.3K+",
											sla: {
												deliveryTime: 37,
												lastMileTravel: 11.5,
												serviceability: "SERVICEABLE",
												slaString: "35-40 mins",
												lastMileTravelString: "11.5 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-13 00:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "ITEMS",
												subHeader: "AT â‚¹129",
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
											type: "WEBLINK",
										},
									},
									{
										info: {
											id: "151515",
											name: "Gupta Bhojnalay",
											cloudinaryImageId: "jo9pdipf4elcuch8g55q",
											locality: "fulwara chowk",
											areaName: "Chhindwara Locality",
											costForTwo: "â‚¹200 for two",
											cuisines: ["Fast Food", "Indian", "Beverages"],
											avgRating: 4.8,
											veg: true,
											parentId: "91635",
											avgRatingString: "4.8",
											totalRatingsString: "449",
											sla: {
												deliveryTime: 41,
												lastMileTravel: 11,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "11.0 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "v1695133679/badges/Pure_Veg111.png",
														description: "pureveg",
													},
												],
											},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "pureveg",
																	imageId: "v1695133679/badges/Pure_Veg111.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "â‚¹100 OFF",
												subHeader: "ABOVE â‚¹999",
												discountTag: "FLAT DEAL",
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
											type: "WEBLINK",
										},
									},
									{
										info: {
											id: "151648",
											name: "Mr. Gurung Momo & Chinese Corner",
											cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
											locality: "Teacher's Colony",
											areaName: "Mohan Nagar",
											costForTwo: "â‚¹150 for two",
											cuisines: ["Momos", "Chinese", "Fast Food"],
											avgRating: 4.3,
											veg: true,
											parentId: "140255",
											avgRatingString: "4.3",
											totalRatingsString: "1.1K+",
											sla: {
												deliveryTime: 42,
												lastMileTravel: 12.2,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "12.2 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "v1695133679/badges/Pure_Veg111.png",
														description: "pureveg",
													},
												],
											},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "pureveg",
																	imageId: "v1695133679/badges/Pure_Veg111.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "ITEMS",
												subHeader: "AT â‚¹49",
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
											type: "WEBLINK",
										},
									},
									{
										info: {
											id: "184424",
											name: "Sab Ghar Tak Foods",
											cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
											locality: "Sanchar Colony",
											areaName: "Parsia Road",
											costForTwo: "â‚¹200 for two",
											cuisines: [
												"North Indian",
												"South Indian",
												"Chinese",
												"Beverages",
												"Fast Food",
												"Desserts",
											],
											avgRating: 4.1,
											parentId: "173932",
											avgRatingString: "4.1",
											totalRatingsString: "617",
											sla: {
												deliveryTime: 46,
												lastMileTravel: 14.1,
												serviceability: "SERVICEABLE",
												slaString: "45-50 mins",
												lastMileTravelString: "14.1 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "â‚¹50 OFF",
												subHeader: "ABOVE â‚¹199",
												discountTag: "FLAT DEAL",
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
											type: "WEBLINK",
										},
									},
									{
										info: {
											id: "658210",
											name: "The Fusion Lounge",
											cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
											locality: "Triloki nagar",
											areaName: "Railway Station",
											costForTwo: "â‚¹300 for two",
											cuisines: [
												"South Indian",
												"Chinese",
												"Beverages",
												"Fast Food",
												"Desserts",
											],
											avgRating: 4.2,
											parentId: "395453",
											avgRatingString: "4.2",
											totalRatingsString: "350",
											sla: {
												deliveryTime: 45,
												lastMileTravel: 10.4,
												serviceability: "SERVICEABLE",
												slaString: "45-50 mins",
												lastMileTravelString: "10.4 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											aggregatedDiscountInfoV2: {},
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
											type: "WEBLINK",
										},
									},
									{
										info: {
											id: "150591",
											name: "Satkar Restaurant",
											cloudinaryImageId: "rvxp5xbniat84r6efku2",
											locality: "Sinchai Colony",
											areaName: "Satkar Chowk",
											costForTwo: "â‚¹250 for two",
											cuisines: [
												"North Indian",
												"South Indian",
												"Indian",
												"Salads",
												"Desserts",
											],
											avgRating: 4.4,
											veg: true,
											parentId: "21553",
											avgRatingString: "4.4",
											totalRatingsString: "2.9K+",
											sla: {
												deliveryTime: 44,
												lastMileTravel: 13.4,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "13.4 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 22:45:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "Rxawards/_CATEGORY-North%20Indian.png",
														description: "Delivery!",
													},
													{
														imageId:
															"Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
														description: "Delivery!",
													},
												],
											},
											isOpen: true,
											aggregatedDiscountInfoV2: {},
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "Delivery!",
																	imageId:
																		"Rxawards/_CATEGORY-North%20Indian.png",
																},
															},
															{
																attributes: {
																	description: "Delivery!",
																	imageId:
																		"Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
											type: "WEBLINK",
										},
									},
									{
										info: {
											id: "385824",
											name: "The Belgian Waffle Co.",
											cloudinaryImageId:
												"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
											locality: "Sinchai Colony",
											areaName: "Mohan Nagar",
											costForTwo: "â‚¹200 for two",
											cuisines: [
												"Waffle",
												"Desserts",
												"Ice Cream",
												"Beverages",
											],
											avgRating: 4.7,
											veg: true,
											parentId: "2233",
											avgRatingString: "4.7",
											totalRatingsString: "312",
											sla: {
												deliveryTime: 50,
												lastMileTravel: 13.4,
												serviceability: "SERVICEABLE",
												slaString: "45-50 mins",
												lastMileTravelString: "13.4 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 22:45:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "v1695133679/badges/Pure_Veg111.png",
														description: "pureveg",
													},
												],
											},
											isOpen: true,
											aggregatedDiscountInfoV2: {},
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "pureveg",
																	imageId: "v1695133679/badges/Pure_Veg111.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
											type: "WEBLINK",
										},
									},
								],
								theme: "Restaurant_Group_WebView_SEO_PB_Theme",
								widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
								style: {
									width: {
										type: "TYPE_RELATIVE",
										value: 0.41111112,
										reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
									},
									height: {
										type: "TYPE_RELATIVE",
										value: 0.7027027,
										reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
									},
									layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
								},
								collectionId: "84124",
							},
						},
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
						title: "Restaurants with online food delivery in Chhindwara",
						id: "popular_restaurants_title",
					},
				},
			},
			{
				card: {
					card: {
						"@type":
							"type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
						sortConfigs: [
							{
								key: "relevance",
								title: "Relevance (Default)",
								selected: true,
								defaultSelection: true,
							},
							{
								key: "deliveryTimeAsc",
								title: "Delivery Time",
							},
							{
								key: "modelBasedRatingDesc",
								title: "Rating",
							},
							{
								key: "costForTwoAsc",
								title: "Cost: Low to High",
							},
							{
								key: "costForTwoDesc",
								title: "Cost: High to Low",
							},
						],
						restaurantCount: 82,
						facetList: [
							{
								label: "Delivery Time",
								id: "deliveryTime",
								selection: "SELECT_TYPE_MULTISELECT",
								facetInfo: [
									{
										label: "Fast Delivery",
										id: "deliveryTimefacetquery1",
										analytics: {},
										openFilter: true,
									},
								],
								viewType: "VIEW_TYPE_HALF_CARD",
								subLabel: "Filterby",
							},
							{
								label: "Cuisines",
								id: "catalog_cuisines",
								selection: "SELECT_TYPE_MULTISELECT",
								facetInfo: [
									{
										label: "Bakery",
										id: "query_bakery",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Beverages",
										id: "query_beverages",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Bihari",
										id: "query_bihari",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Biryani",
										id: "query_biryani",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Burgers",
										id: "query_burgers",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Cafe",
										id: "query_cafe",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Chaat",
										id: "query_chaat",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Chinese",
										id: "query_chinese",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Continental",
										id: "query_continental",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Desserts",
										id: "query_desserts",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Fast Food",
										id: "query_fast_food",
										analytics: {},
										openFilter: true,
									},
									{
										label: "French",
										id: "query_french",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Healthy Food",
										id: "query_healthy_food",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Ice Cream",
										id: "query_ice_cream",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Ice Cream Cakes",
										id: "query_ice_cream_cakes",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Indian",
										id: "query_indian",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Italian",
										id: "query_italian",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Juices",
										id: "query_juices",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Maharashtrian",
										id: "query_maharashtrian",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Momos",
										id: "query_momos",
										analytics: {},
										openFilter: true,
									},
									{
										label: "North Indian",
										id: "query_north_indian",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Pastas",
										id: "query_pastas",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Pizzas",
										id: "query_pizzas",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Salads",
										id: "query_salads",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Snacks",
										id: "query_snacks",
										analytics: {},
										openFilter: true,
									},
									{
										label: "South Indian",
										id: "query_south_indian",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Street Food",
										id: "query_street_food",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Sweets",
										id: "query_sweets",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Tandoor",
										id: "query_tandoor",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Waffle",
										id: "query_waffle",
										analytics: {},
										openFilter: true,
									},
									{
										label: "pure veg",
										id: "query_pure_veg",
										analytics: {},
										openFilter: true,
									},
									{
										label: "rolls",
										id: "query_rolls",
										analytics: {},
										openFilter: true,
									},
								],
								viewType: "VIEW_TYPE_HALF_CARD",
								canSearch: true,
								subLabel: "Filterbycuisine",
								openFilter: true,
							},
							{
								label: "Explore",
								id: "explore",
								selection: "SELECT_TYPE_MULTISELECT",
								viewType: "VIEW_TYPE_HALF_CARD",
							},
							{
								label: "Ratings",
								id: "rating",
								selection: "SELECT_TYPE_MULTISELECT",
								facetInfo: [
									{
										label: "Ratings 4.5+",
										id: "ratingfacetquery3",
										analytics: {},
									},
									{
										label: "Ratings 4.0+",
										id: "ratingfacetquery4",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Ratings 3.5+",
										id: "ratingfacetquery5",
										analytics: {},
									},
								],
								viewType: "VIEW_TYPE_HALF_CARD",
								subLabel: "Filterby",
							},
							{
								label: "Veg/Non-Veg",
								id: "isVeg",
								selection: "SELECT_TYPE_SINGLESELECT",
								facetInfo: [
									{
										label: "Pure Veg",
										id: "isVegfacetquery2",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Non Veg",
										id: "isVegfacetquery3",
										analytics: {},
									},
								],
								viewType: "VIEW_TYPE_FLATTENED",
								subLabel: "Filterby",
							},
							{
								label: "Offers",
								id: "restaurantOfferMultiTd",
								selection: "SELECT_TYPE_SINGLESELECT",
								facetInfo: [
									{
										label: "Offers",
										id: "restaurantOfferMultiTdfacetquery3",
										analytics: {},
										openFilter: true,
									},
								],
								viewType: "VIEW_TYPE_FLATTENED",
								subLabel: "Restaurantswith",
							},
							{
								label: "Cost for two",
								id: "costForTwo",
								selection: "SELECT_TYPE_MULTISELECT",
								facetInfo: [
									{
										label: "Rs. 300-Rs. 600",
										id: "costForTwofacetquery3",
										analytics: {},
										openFilter: true,
									},
									{
										label: "Less than Rs. 300",
										id: "costForTwofacetquery5",
										analytics: {},
										openFilter: true,
									},
								],
								viewType: "VIEW_TYPE_HALF_CARD",
								subLabel: "Filterby",
							},
						],
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
						layout: {
							columns: 4,
						},
						id: "restaurant_grid_listing_v2",
						gridElements: {
							infoWithStyle: {
								"@type":
									"type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
								restaurants: [
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "1003414",
											name: "Pizza Hut",
											cloudinaryImageId:
												"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
											locality: "Chhindwara",
											areaName: "Parasia Road",
											costForTwo: "â‚¹350 for two",
											cuisines: ["Pizzas"],
											avgRating: 4.3,
											parentId: "721",
											avgRatingString: "4.3",
											totalRatingsString: "111",
											sla: {
												deliveryTime: 50,
												lastMileTravel: 14.3,
												serviceability: "SERVICEABLE",
												slaString: "45-50 mins",
												lastMileTravelString: "14.3 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-13 00:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "ITEMS",
												subHeader: "AT â‚¹59",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "234875",
											name: "Adil Hotel",
											cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
											locality: "Rautha Wada",
											areaName: "Chhindwara Locality",
											costForTwo: "â‚¹150 for two",
											cuisines: ["North Indian", "Biryani", "Tandoor"],
											avgRating: 4.3,
											parentId: "27123",
											avgRatingString: "4.3",
											totalRatingsString: "1.3K+",
											sla: {
												deliveryTime: 37,
												lastMileTravel: 11.5,
												serviceability: "SERVICEABLE",
												slaString: "35-40 mins",
												lastMileTravelString: "11.5 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-13 00:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "ITEMS",
												subHeader: "AT â‚¹129",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "630193",
											name: "Champaran  Handi Restaurant",
											cloudinaryImageId: "xph0vf5pvbxjf8xchwjk",
											locality: "Sinchai Colony",
											areaName: "Nagpur road",
											costForTwo: "â‚¹200 for two",
											cuisines: ["North Indian"],
											avgRating: 4.3,
											parentId: "376324",
											avgRatingString: "4.3",
											totalRatingsString: "414",
											sla: {
												deliveryTime: 43,
												lastMileTravel: 11.9,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "11.9 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											aggregatedDiscountInfoV2: {},
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/champaran-handi-restaurant-sinchai-colony-nagpur-road-rest630193",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "618037",
											name: "Jai Ganesh Bhojnalaya",
											cloudinaryImageId: "yzgqriufpzmloogcn2vl",
											locality: "Railway Colony",
											areaName: "Bus stand",
											costForTwo: "â‚¹200 for two",
											cuisines: [
												"North Indian",
												"South Indian",
												"Indian",
												"Chinese",
											],
											avgRating: 4.1,
											veg: true,
											parentId: "368432",
											avgRatingString: "4.1",
											totalRatingsString: "397",
											sla: {
												deliveryTime: 42,
												lastMileTravel: 13.7,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "13.7 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "v1695133679/badges/Pure_Veg111.png",
														description: "pureveg",
													},
												],
											},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "pureveg",
																	imageId: "v1695133679/badges/Pure_Veg111.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "â‚¹200 OFF",
												subHeader: "ABOVE â‚¹799",
												discountTag: "FLAT DEAL",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "151515",
											name: "Gupta Bhojnalay",
											cloudinaryImageId: "jo9pdipf4elcuch8g55q",
											locality: "fulwara chowk",
											areaName: "Chhindwara Locality",
											costForTwo: "â‚¹200 for two",
											cuisines: ["Fast Food", "Indian", "Beverages"],
											avgRating: 4.8,
											veg: true,
											parentId: "91635",
											avgRatingString: "4.8",
											totalRatingsString: "449",
											sla: {
												deliveryTime: 41,
												lastMileTravel: 11,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "11.0 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "v1695133679/badges/Pure_Veg111.png",
														description: "pureveg",
													},
												],
											},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "pureveg",
																	imageId: "v1695133679/badges/Pure_Veg111.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "â‚¹100 OFF",
												subHeader: "ABOVE â‚¹999",
												discountTag: "FLAT DEAL",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "151648",
											name: "Mr. Gurung Momo & Chinese Corner",
											cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
											locality: "Teacher's Colony",
											areaName: "Mohan Nagar",
											costForTwo: "â‚¹150 for two",
											cuisines: ["Momos", "Chinese", "Fast Food"],
											avgRating: 4.3,
											veg: true,
											parentId: "140255",
											avgRatingString: "4.3",
											totalRatingsString: "1.1K+",
											sla: {
												deliveryTime: 42,
												lastMileTravel: 12.2,
												serviceability: "SERVICEABLE",
												slaString: "40-45 mins",
												lastMileTravelString: "12.2 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {
												imageBadges: [
													{
														imageId: "v1695133679/badges/Pure_Veg111.png",
														description: "pureveg",
													},
												],
											},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {
														badgeObject: [
															{
																attributes: {
																	description: "pureveg",
																	imageId: "v1695133679/badges/Pure_Veg111.png",
																},
															},
														],
													},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "ITEMS",
												subHeader: "AT â‚¹49",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "615927",
											name: "Roof 5",
											cloudinaryImageId: "glepanv4xjfnhsbieam1",
											locality: "Adarsh Nagar Colony",
											areaName: "Chhindwara Locality",
											costForTwo: "â‚¹200 for two",
											cuisines: ["Indian"],
											avgRating: 4.2,
											parentId: "171348",
											avgRatingString: "4.2",
											totalRatingsString: "173",
											sla: {
												deliveryTime: 54,
												lastMileTravel: 14.5,
												serviceability: "SERVICEABLE",
												slaString: "50-55 mins",
												lastMileTravelString: "14.5 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:45:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "â‚¹250 OFF",
												subHeader: "ABOVE â‚¹999",
												discountTag: "FLAT DEAL",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/roof-5-adarsh-nagar-colony-chhindwara-locality-rest615927",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
									{
										"@type":
											"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										info: {
											id: "184424",
											name: "Sab Ghar Tak Foods",
											cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
											locality: "Sanchar Colony",
											areaName: "Parsia Road",
											costForTwo: "â‚¹200 for two",
											cuisines: [
												"North Indian",
												"South Indian",
												"Chinese",
												"Beverages",
												"Fast Food",
												"Desserts",
											],
											avgRating: 4.1,
											parentId: "173932",
											avgRatingString: "4.1",
											totalRatingsString: "617",
											sla: {
												deliveryTime: 46,
												lastMileTravel: 14.1,
												serviceability: "SERVICEABLE",
												slaString: "45-50 mins",
												lastMileTravelString: "14.1 km",
												iconType: "ICON_TYPE_EMPTY",
											},
											availability: {
												nextCloseTime: "2025-06-12 23:00:00",
												opened: true,
											},
											badges: {},
											isOpen: true,
											type: "F",
											badgesV2: {
												entityBadges: {
													imageBased: {},
													textBased: {},
													textExtendedBadges: {},
												},
											},
											aggregatedDiscountInfoV3: {
												header: "â‚¹50 OFF",
												subHeader: "ABOVE â‚¹199",
												discountTag: "FLAT DEAL",
											},
											orderabilityCommunication: {
												title: {},
												subTitle: {},
												message: {},
												customIcon: {},
											},
											differentiatedUi: {
												displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												differentiatedUiMediaDetails: {
													mediaType: "ADS_MEDIA_ENUM_IMAGE",
													lottie: {},
													video: {},
												},
											},
											reviewsSummary: {},
											displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											restaurantOfferPresentationInfo: {},
											externalRatings: {
												aggregatedRating: {
													rating: "--",
												},
											},
											ratingsDisplayPreference:
												"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
										},
										analytics: {
											context: "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
										},
										cta: {
											link: "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
											text: "RESTAURANT_MENU",
											type: "WEBLINK",
										},
										widgetId:
											"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
									},
								],
								theme: "SeoRestaurantListingGridWidget",
							},
						},
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
						message: "Show More",
						id: "show_more_button",
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
						title: "Best Places to Eat Across Cities",
						brands: [
							{
								text: "Best Restaurants in Bangalore",
								link: "https://www.swiggy.com/city/bangalore/best-restaurants",
							},
							{
								text: "Best Restaurants in Pune",
								link: "https://www.swiggy.com/city/pune/best-restaurants",
							},
							{
								text: "Best Restaurants in Mumbai",
								link: "https://www.swiggy.com/city/mumbai/best-restaurants",
							},
							{
								text: "Best Restaurants in Delhi",
								link: "https://www.swiggy.com/city/delhi/best-restaurants",
							},
							{
								text: "Best Restaurants in Hyderabad",
								link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
							},
							{
								text: "Best Restaurants in Kolkata",
								link: "https://www.swiggy.com/city/kolkata/best-restaurants",
							},
							{
								text: "Best Restaurants in Chennai",
								link: "https://www.swiggy.com/city/chennai/best-restaurants",
							},
							{
								text: "Best Restaurants in Chandigarh",
								link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
							},
							{
								text: "Best Restaurants in Ahmedabad",
								link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
							},
							{
								text: "Best Restaurants in Jaipur",
								link: "https://www.swiggy.com/city/jaipur/best-restaurants",
							},
							{
								text: "Best Restaurants in Nagpur",
								link: "https://www.swiggy.com/city/nagpur/best-restaurants",
							},
							{
								text: "Best Restaurants in Bhubaneswar",
								link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
							},
							{
								text: "Best Restaurants in Kochi",
								link: "https://www.swiggy.com/city/kochi/best-restaurants",
							},
							{
								text: "Best Restaurants in Surat",
								link: "https://www.swiggy.com/city/surat/best-restaurants",
							},
							{
								text: "Best Restaurants in Dehradun",
								link: "https://www.swiggy.com/city/dehradun/best-restaurants",
							},
							{
								text: "Best Restaurants in Ludhiana",
								link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
							},
							{
								text: "Best Restaurants in Patna",
								link: "https://www.swiggy.com/city/patna/best-restaurants",
							},
							{
								text: "Best Restaurants in Mangaluru",
								link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
							},
							{
								text: "Best Restaurants in Bhopal",
								link: "https://www.swiggy.com/city/bhopal/best-restaurants",
							},
							{
								text: "Best Restaurants in Gurgaon",
								link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
							},
							{
								text: "Best Restaurants in Coimbatore",
								link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
							},
							{
								text: "Best Restaurants in Agra",
								link: "https://www.swiggy.com/city/agra/best-restaurants",
							},
							{
								text: "Best Restaurants in Noida",
								link: "https://www.swiggy.com/city/noida/best-restaurants",
							},
							{
								text: "Best Restaurants in Vijayawada",
								link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
							},
							{
								text: "Best Restaurants in Guwahati",
								link: "https://www.swiggy.com/city/guwahati/best-restaurants",
							},
							{
								text: "Best Restaurants in Mysore",
								link: "https://www.swiggy.com/city/mysore/best-restaurants",
							},
							{
								text: "Best Restaurants in Pondicherry",
								link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
							},
							{
								text: "Best Restaurants in Thiruvananthapuram",
								link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
							},
							{
								text: "Best Restaurants in Ranchi",
								link: "https://www.swiggy.com/city/ranchi/best-restaurants",
							},
							{
								text: "Best Restaurants in Vizag",
								link: "https://www.swiggy.com/city/vizag/best-restaurants",
							},
							{
								text: "Best Restaurants in Udaipur",
								link: "https://www.swiggy.com/city/udaipur/best-restaurants",
							},
							{
								text: "Best Restaurants in Vadodara",
								link: "https://www.swiggy.com/city/vadodara/best-restaurants",
							},
						],
						id: "restaurant_near_me_links",
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
						title: "Best Cuisines Near Me",
						brands: [
							{
								text: "Chinese Restaurant Near Me",
								link: "https://www.swiggy.com/chinese-restaurants-near-me",
							},
							{
								text: "South Indian Restaurant Near Me",
								link: "https://www.swiggy.com/south-indian-restaurants-near-me",
							},
							{
								text: "Indian Restaurant Near Me",
								link: "https://www.swiggy.com/indian-restaurants-near-me",
							},
							{
								text: "Kerala Restaurant Near Me",
								link: "https://www.swiggy.com/kerala-restaurants-near-me",
							},
							{
								text: "Korean Restaurant Near Me",
								link: "https://www.swiggy.com/korean-restaurants-near-me",
							},
							{
								text: "North Indian Restaurant Near Me",
								link: "https://www.swiggy.com/north-indian-restaurants-near-me",
							},
							{
								text: "Seafood Restaurant Near Me",
								link: "https://www.swiggy.com/seafood-restaurants-near-me",
							},
							{
								text: "Bengali Restaurant Near Me",
								link: "https://www.swiggy.com/bengali-restaurants-near-me",
							},
							{
								text: "Punjabi Restaurant Near Me",
								link: "https://www.swiggy.com/punjabi-restaurants-near-me",
							},
							{
								text: "Italian Restaurant Near Me",
								link: "https://www.swiggy.com/italian-restaurants-near-me",
							},
							{
								text: "Andhra Restaurant Near Me",
								link: "https://www.swiggy.com/andhra-restaurants-near-me",
							},
							{
								text: "Biryani Restaurant Near Me",
								link: "https://www.swiggy.com/biryani-restaurants-near-me",
							},
							{
								text: "Japanese Restaurant Near Me",
								link: "https://www.swiggy.com/japanese-restaurants-near-me",
							},
							{
								text: "Arabian Restaurant Near Me",
								link: "https://www.swiggy.com/arabian-restaurants-near-me",
							},
							{
								text: "Fast Food Restaurant Near Me",
								link: "https://www.swiggy.com/fast-food-restaurants-near-me",
							},
							{
								text: "Jain Restaurant Near Me",
								link: "https://www.swiggy.com/jain-restaurants-near-me",
							},
							{
								text: "Gujarati Restaurant Near Me",
								link: "https://www.swiggy.com/gujarati-restaurants-near-me",
							},
							{
								text: "Thai Restaurant Near Me",
								link: "https://www.swiggy.com/thai-restaurants-near-me",
							},
							{
								text: "Pizzas Restaurant Near Me",
								link: "https://www.swiggy.com/pizzas-restaurants-near-me",
							},
							{
								text: "Asian Restaurant Near Me",
								link: "https://www.swiggy.com/asian-restaurants-near-me",
							},
							{
								text: "Cafe Restaurant Near Me",
								link: "https://www.swiggy.com/cafe-restaurants-near-me",
							},
							{
								text: "Continental Restaurant Near Me",
								link: "https://www.swiggy.com/continental-restaurants-near-me",
							},
							{
								text: "Mexican Restaurant Near Me",
								link: "https://www.swiggy.com/mexican-restaurants-near-me",
							},
							{
								text: "Mughlai Restaurant Near Me",
								link: "https://www.swiggy.com/mughlai-restaurants-near-me",
							},
							{
								text: "Sushi Restaurant Near Me",
								link: "https://www.swiggy.com/sushi-restaurants-near-me",
							},
							{
								text: "Mangalorean Restaurant Near Me",
								link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
							},
							{
								text: "Tibetan Restaurant Near Me",
								link: "https://www.swiggy.com/tibetan-restaurants-near-me",
							},
							{
								text: "Barbecue Restaurant Near Me",
								link: "https://www.swiggy.com/barbecue-restaurants-near-me",
							},
							{
								text: "Maharashtrian Restaurant Near Me",
								link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
							},
							{
								text: "Nepalese Restaurant Near Me",
								link: "https://www.swiggy.com/nepalese-restaurants-near-me",
							},
							{
								text: "Rajasthani Restaurant Near Me",
								link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
							},
							{
								text: "Turkish Restaurant Near Me",
								link: "https://www.swiggy.com/turkish-restaurants-near-me",
							},
						],
						id: "restaurant_near_me_links",
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
						title: "Explore Every Restaurants Near Me",
						brands: [
							{
								text: "Explore Restaurants Near Me",
								link: "https://www.swiggy.com/restaurants-near-me",
							},
							{
								text: "Explore Top Rated Restaurants Near Me",
								link: "https://www.swiggy.com/best-restaurants-near-me",
							},
						],
						id: "restaurant_near_me_links",
					},
				},
			},
			{
				card: {
					card: {
						"@type":
							"type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
						title: "For better experience,download the Swiggy app now",
						androidAppImage: "portal/m/play_store.png",
						androidAppLink:
							"https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
						iosAppImage: "portal/m/app_store.png",
						iosAppLink:
							"https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
						id: "app_install_links",
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
						cities: [
							{
								text: "Bangalore",
								link: "https://www.swiggy.com/city/bangalore",
							},
							{
								text: "Gurgaon",
								link: "https://www.swiggy.com/city/gurgaon",
							},
							{
								text: "Hyderabad",
								link: "https://www.swiggy.com/city/hyderabad",
							},
							{
								text: "Delhi",
								link: "https://www.swiggy.com/city/delhi",
							},
							{
								text: "Mumbai",
								link: "https://www.swiggy.com/city/mumbai",
							},
							{
								text: "Pune",
								link: "https://www.swiggy.com/city/pune",
							},
							{
								text: "Kolkata",
								link: "https://www.swiggy.com/city/kolkata",
							},
							{
								text: "Chennai",
								link: "https://www.swiggy.com/city/chennai",
							},
							{
								text: "Ahmedabad",
								link: "https://www.swiggy.com/city/ahmedabad",
							},
							{
								text: "Chandigarh",
								link: "https://www.swiggy.com/city/chandigarh",
							},
							{
								text: "Jaipur",
								link: "https://www.swiggy.com/city/jaipur",
							},
							{
								text: "Kochi",
								link: "https://www.swiggy.com/city/kochi",
							},
							{
								text: "Coimbatore",
								link: "https://www.swiggy.com/city/coimbatore",
							},
							{
								text: "Lucknow",
								link: "https://www.swiggy.com/city/lucknow",
							},
							{
								text: "Nagpur",
								link: "https://www.swiggy.com/city/nagpur",
							},
							{
								text: "Vadodara",
								link: "https://www.swiggy.com/city/vadodara",
							},
							{
								text: "Indore",
								link: "https://www.swiggy.com/city/indore",
							},
							{
								text: "Guwahati",
								link: "https://www.swiggy.com/city/guwahati",
							},
							{
								text: "Vizag",
								link: "https://www.swiggy.com/city/vizag",
							},
							{
								text: "Surat",
								link: "https://www.swiggy.com/city/surat",
							},
							{
								text: "Dehradun",
								link: "https://www.swiggy.com/city/dehradun",
							},
							{
								text: "Noida",
								link: "https://www.swiggy.com/city/noida",
							},
							{
								text: "Ludhiana",
								link: "https://www.swiggy.com/city/ludhiana",
							},
							{
								text: "Trichy",
								link: "https://www.swiggy.com/city/trichy",
							},
							{
								text: "Vijayawada",
								link: "https://www.swiggy.com/city/vijayawada",
							},
							{
								text: "Kanpur",
								link: "https://www.swiggy.com/city/kanpur",
							},
							{
								text: "Mysore",
								link: "https://www.swiggy.com/city/mysore",
							},
							{
								text: "Nashik",
								link: "https://www.swiggy.com/city/nashik",
							},
							{
								text: "Udaipur",
								link: "https://www.swiggy.com/city/udaipur",
							},
							{
								text: "Pondicherry",
								link: "https://www.swiggy.com/city/pondicherry",
							},
							{
								text: "Agra",
								link: "https://www.swiggy.com/city/agra",
							},
							{
								text: "Aurangabad",
								link: "https://www.swiggy.com/city/aurangabad",
							},
							{
								text: "Jalandhar",
								link: "https://www.swiggy.com/city/jalandhar",
							},
							{
								text: "Kota",
								link: "https://www.swiggy.com/city/kota",
							},
							{
								text: "Madurai",
								link: "https://www.swiggy.com/city/madurai",
							},
							{
								text: "Allahabad",
								link: "https://www.swiggy.com/city/allahabad",
							},
							{
								text: "Manipal",
								link: "https://www.swiggy.com/city/manipal",
							},
							{
								text: "Amritsar",
								link: "https://www.swiggy.com/city/amritsar",
							},
							{
								text: "Bareilly",
								link: "https://www.swiggy.com/city/bareilly",
							},
							{
								text: "Meerut",
								link: "https://www.swiggy.com/city/meerut",
							},
							{
								text: "Bhopal",
								link: "https://www.swiggy.com/city/bhopal",
							},
							{
								text: "Ooty",
								link: "https://www.swiggy.com/city/ooty",
							},
							{
								text: "Bhubaneswar",
								link: "https://www.swiggy.com/city/bhubaneswar",
							},
							{
								text: "Raipur",
								link: "https://www.swiggy.com/city/raipur",
							},
							{
								text: "Bikaner",
								link: "https://www.swiggy.com/city/bikaner",
							},
							{
								text: "Rajkot",
								link: "https://www.swiggy.com/city/rajkot",
							},
							{
								text: "Kozhikode",
								link: "https://www.swiggy.com/city/kozhikode",
							},
							{
								text: "Central Goa",
								link: "https://www.swiggy.com/city/central-goa",
							},
							{
								text: "Sirsa",
								link: "https://www.swiggy.com/city/sirsa",
							},
							{
								text: "Gwalior",
								link: "https://www.swiggy.com/city/gwalior",
							},
							{
								text: "Thrissur",
								link: "https://www.swiggy.com/city/thrissur",
							},
							{
								text: "Kharagpur",
								link: "https://www.swiggy.com/city/kharagpur",
							},
							{
								text: "Tirupati",
								link: "https://www.swiggy.com/city/tirupati",
							},
							{
								text: "Tirupur",
								link: "https://www.swiggy.com/city/tirupur",
							},
							{
								text: "Vellore",
								link: "https://www.swiggy.com/city/vellore",
							},
							{
								text: "Thiruvananthapuram",
								link: "https://www.swiggy.com/city/thiruvananthapuram",
							},
							{
								text: "Warangal",
								link: "https://www.swiggy.com/city/warangal",
							},
							{
								text: "Varanasi",
								link: "https://www.swiggy.com/city/varanasi",
							},
							{
								text: "Mangaluru",
								link: "https://www.swiggy.com/city/mangaluru",
							},
							{
								text: "Patna",
								link: "https://www.swiggy.com/city/patna",
							},
							{
								text: "Ranchi",
								link: "https://www.swiggy.com/city/ranchi",
							},
							{
								text: "Faridabad",
								link: "https://www.swiggy.com/city/faridabad",
							},
							{
								text: "Guntur",
								link: "https://www.swiggy.com/city/guntur",
							},
							{
								text: "Ujjain",
								link: "https://www.swiggy.com/city/ujjain",
							},
							{
								text: "Patiala",
								link: "https://www.swiggy.com/city/patiala",
							},
							{
								text: "Karnal",
								link: "https://www.swiggy.com/city/karnal",
							},
							{
								text: "Kakinada",
								link: "https://www.swiggy.com/city/kakinada",
							},
							{
								text: "Rajahmundry",
								link: "https://www.swiggy.com/city/rajahmundry",
							},
							{
								text: "Bilaspur",
								link: "https://www.swiggy.com/city/bilaspur",
							},
							{
								text: "Bhilai",
								link: "https://www.swiggy.com/city/bhilai",
							},
							{
								text: "Anand",
								link: "https://www.swiggy.com/city/anand",
							},
							{
								text: "Bhavnagar",
								link: "https://www.swiggy.com/city/bhavnagar",
							},
							{
								text: "Jammu",
								link: "https://www.swiggy.com/city/jammu",
							},
							{
								text: "Muktsar",
								link: "https://www.swiggy.com/city/muktsar",
							},
							{
								text: "Panipat",
								link: "https://www.swiggy.com/city/panipat",
							},
							{
								text: "Jamshedpur",
								link: "https://www.swiggy.com/city/jamshedpur",
							},
							{
								text: "Dhanbad",
								link: "https://www.swiggy.com/city/dhanbad",
							},
							{
								text: "Bokaro",
								link: "https://www.swiggy.com/city/bokaro",
							},
							{
								text: "Hubli",
								link: "https://www.swiggy.com/city/hubli",
							},
							{
								text: "Belgaum",
								link: "https://www.swiggy.com/city/belgaum",
							},
							{
								text: "Jabalpur",
								link: "https://www.swiggy.com/city/jabalpur",
							},
							{
								text: "Kolhapur",
								link: "https://www.swiggy.com/city/kolhapur",
							},
							{
								text: "Solapur",
								link: "https://www.swiggy.com/city/solapur",
							},
							{
								text: "Shillong",
								link: "https://www.swiggy.com/city/shillong",
							},
							{
								text: "Cuttack",
								link: "https://www.swiggy.com/city/cuttack",
							},
							{
								text: "Aligarh",
								link: "https://www.swiggy.com/city/aligarh",
							},
							{
								text: "Salem",
								link: "https://www.swiggy.com/city/salem",
							},
							{
								text: "Agartala",
								link: "https://www.swiggy.com/city/agartala",
							},
							{
								text: "Jodhpur",
								link: "https://www.swiggy.com/city/jodhpur",
							},
							{
								text: "Ajmer",
								link: "https://www.swiggy.com/city/ajmer",
							},
							{
								text: "Jhansi",
								link: "https://www.swiggy.com/city/jhansi",
							},
							{
								text: "Gorakhpur",
								link: "https://www.swiggy.com/city/gorakhpur",
							},
							{
								text: "Thanjavur",
								link: "https://www.swiggy.com/city/thanjavur",
							},
							{
								text: "Erode",
								link: "https://www.swiggy.com/city/erode",
							},
							{
								text: "Nellore",
								link: "https://www.swiggy.com/city/nellore",
							},
							{
								text: "Rourkela",
								link: "https://www.swiggy.com/city/rourkela",
							},
							{
								text: "Anantapur",
								link: "https://www.swiggy.com/city/anantapur",
							},
							{
								text: "Kurnool",
								link: "https://www.swiggy.com/city/kurnool",
							},
							{
								text: "Ahmednagar",
								link: "https://www.swiggy.com/city/ahmednagar",
							},
							{
								text: "Phagwara",
								link: "https://www.swiggy.com/city/phagwara",
							},
							{
								text: "Ambala",
								link: "https://www.swiggy.com/city/ambala",
							},
							{
								text: "Ballari",
								link: "https://www.swiggy.com/city/ballari",
							},
							{
								text: "Saharanpur",
								link: "https://www.swiggy.com/city/saharanpur",
							},
							{
								text: "Tirunelveli",
								link: "https://www.swiggy.com/city/tirunelveli",
							},
							{
								text: "Bathinda",
								link: "https://www.swiggy.com/city/bathinda",
							},
							{
								text: "Mathura",
								link: "https://www.swiggy.com/city/mathura",
							},
							{
								text: "Haridwar",
								link: "https://www.swiggy.com/city/haridwar",
							},
							{
								text: "Ratnagiri",
								link: "https://www.swiggy.com/city/ratnagiri",
							},
							{
								text: "Sangli",
								link: "https://www.swiggy.com/city/sangli",
							},
							{
								text: "Amravati",
								link: "https://www.swiggy.com/city/amravati",
							},
							{
								text: "Rishikesh",
								link: "https://www.swiggy.com/city/rishikesh",
							},
							{
								text: "Nagercoil",
								link: "https://www.swiggy.com/city/nagercoil",
							},
							{
								text: "KanyaKumari",
								link: "https://www.swiggy.com/city/kanyakumari",
							},
							{
								text: "Kadapa",
								link: "https://www.swiggy.com/city/kadapa",
							},
							{
								text: "Nizamabad",
								link: "https://www.swiggy.com/city/nizamabad",
							},
							{
								text: "Shivamogga",
								link: "https://www.swiggy.com/city/shivamogga",
							},
							{
								text: "Davanagere",
								link: "https://www.swiggy.com/city/davanagere",
							},
							{
								text: "Roorkee",
								link: "https://www.swiggy.com/city/roorkee",
							},
							{
								text: "Nanded",
								link: "https://www.swiggy.com/city/nanded",
							},
							{
								text: "Rewa",
								link: "https://www.swiggy.com/city/rewa",
							},
							{
								text: "Satna",
								link: "https://www.swiggy.com/city/satna",
							},
							{
								text: "Shimla",
								link: "https://www.swiggy.com/city/shimla",
							},
							{
								text: "Muzaffarpur",
								link: "https://www.swiggy.com/city/muzaffarpur",
							},
							{
								text: "Valsad",
								link: "https://www.swiggy.com/city/valsad",
							},
							{
								text: "Vapi",
								link: "https://www.swiggy.com/city/vapi",
							},
							{
								text: "Chhapra",
								link: "https://www.swiggy.com/city/chhapra",
							},
							{
								text: "Dharamshala",
								link: "https://www.swiggy.com/city/dharamshala",
							},
							{
								text: "Kollam",
								link: "https://www.swiggy.com/city/kollam",
							},
							{
								text: "Silchar",
								link: "https://www.swiggy.com/city/silchar",
							},
							{
								text: "Alappuzha",
								link: "https://www.swiggy.com/city/alappuzha",
							},
							{
								text: "Sonipat",
								link: "https://www.swiggy.com/city/sonipat",
							},
							{
								text: "Rohtak",
								link: "https://www.swiggy.com/city/rohtak",
							},
							{
								text: "Mehsana",
								link: "https://www.swiggy.com/city/mehsana",
							},
							{
								text: "Kullu",
								link: "https://www.swiggy.com/city/kullu",
							},
							{
								text: "Dhule",
								link: "https://www.swiggy.com/city/dhule",
							},
							{
								text: "Dharwad",
								link: "https://www.swiggy.com/city/dharwad",
							},
							{
								text: "Latur",
								link: "https://www.swiggy.com/city/latur",
							},
							{
								text: "Vizianagaram",
								link: "https://www.swiggy.com/city/vizianagaram",
							},
							{
								text: "Khammam",
								link: "https://www.swiggy.com/city/khammam",
							},
							{
								text: "Hampi",
								link: "https://www.swiggy.com/city/hampi",
							},
							{
								text: "Nainital",
								link: "https://www.swiggy.com/city/nainital",
							},
							{
								text: "Akola",
								link: "https://www.swiggy.com/city/akola",
							},
							{
								text: "Kalaburagi",
								link: "https://www.swiggy.com/city/kalaburagi",
							},
							{
								text: "Gaya",
								link: "https://www.swiggy.com/city/gaya",
							},
							{
								text: "Muzaffarnagar",
								link: "https://www.swiggy.com/city/muzaffarnagar",
							},
							{
								text: "Dewas",
								link: "https://www.swiggy.com/city/dewas",
							},
							{
								text: "Korba",
								link: "https://www.swiggy.com/city/korba",
							},
							{
								text: "Mussoorie",
								link: "https://www.swiggy.com/city/mussoorie",
							},
							{
								text: "Jalgaon",
								link: "https://www.swiggy.com/city/jalgaon",
							},
							{
								text: "Yamuna Nagar",
								link: "https://www.swiggy.com/city/yamuna-nagar",
							},
							{
								text: "Bhagalpur",
								link: "https://www.swiggy.com/city/bhagalpur",
							},
							{
								text: "Hapur",
								link: "https://www.swiggy.com/city/hapur",
							},
							{
								text: "Morena",
								link: "https://www.swiggy.com/city/morena",
							},
							{
								text: "Hassan",
								link: "https://www.swiggy.com/city/hassan",
							},
							{
								text: "Hisar",
								link: "https://www.swiggy.com/city/hisar",
							},
							{
								text: "Godhra",
								link: "https://www.swiggy.com/city/godhra",
							},
							{
								text: "Kolar ",
								link: "https://www.swiggy.com/city/kolar",
							},
							{
								text: "Rampur",
								link: "https://www.swiggy.com/city/rampur",
							},
							{
								text: "Sitapur",
								link: "https://www.swiggy.com/city/sitapur",
							},
							{
								text: "Etawah",
								link: "https://www.swiggy.com/city/etawah",
							},
							{
								text: "Porbandar",
								link: "https://www.swiggy.com/city/porbandar",
							},
							{
								text: "Nadiad",
								link: "https://www.swiggy.com/city/nadiad",
							},
							{
								text: "Sagar",
								link: "https://www.swiggy.com/city/sagar",
							},
							{
								text: "Morbi",
								link: "https://www.swiggy.com/city/morbi",
							},
							{
								text: "Chhindwara",
								link: "https://www.swiggy.com/city/chhindwara",
							},
							{
								text: "Tumakuru",
								link: "https://www.swiggy.com/city/tumakuru",
							},
							{
								text: "Singrauli",
								link: "https://www.swiggy.com/city/singrauli",
							},
							{
								text: "Thoothukudi",
								link: "https://www.swiggy.com/city/thoothukudi",
							},
							{
								text: "Katni",
								link: "https://www.swiggy.com/city/katni",
							},
							{
								text: "Khandwa",
								link: "https://www.swiggy.com/city/khandwa",
							},
							{
								text: "Eluru",
								link: "https://www.swiggy.com/city/eluru",
							},
							{
								text: "Malappuram",
								link: "https://www.swiggy.com/city/malappuram",
							},
							{
								text: "Dibrugarh",
								link: "https://www.swiggy.com/city/dibrugarh",
							},
							{
								text: "Deoghar",
								link: "https://www.swiggy.com/city/deoghar",
							},
							{
								text: "Khanna",
								link: "https://www.swiggy.com/city/khanna",
							},
							{
								text: "Bidar",
								link: "https://www.swiggy.com/city/bidar",
							},
							{
								text: "Anantnag",
								link: "https://www.swiggy.com/city/anantnag",
							},
							{
								text: "Madikeri",
								link: "https://www.swiggy.com/city/madikeri",
							},
							{
								text: "Haldwani",
								link: "https://www.swiggy.com/city/haldwani",
							},
							{
								text: "Panchkula",
								link: "https://www.swiggy.com/city/panchkula",
							},
							{
								text: "Farrukhabad",
								link: "https://www.swiggy.com/city/farrukhabad",
							},
							{
								text: "Malegaon",
								link: "https://www.swiggy.com/city/malegaon",
							},
							{
								text: "Dindigul",
								link: "https://www.swiggy.com/city/dindigul",
							},
							{
								text: "Shahjahanpur",
								link: "https://www.swiggy.com/city/shahjahanpur",
							},
							{
								text: "Beed",
								link: "https://www.swiggy.com/city/beed",
							},
							{
								text: "Junagadh",
								link: "https://www.swiggy.com/city/junagadh",
							},
							{
								text: "Asansol",
								link: "https://www.swiggy.com/city/asansol",
							},
							{
								text: "Beawar",
								link: "https://www.swiggy.com/city/beawar",
							},
							{
								text: "Kishangarh",
								link: "https://www.swiggy.com/city/kishangarh",
							},
							{
								text: "Budhwal",
								link: "https://www.swiggy.com/city/budhwal",
							},
							{
								text: "Parbhani",
								link: "https://www.swiggy.com/city/parbhani",
							},
							{
								text: "Gondia",
								link: "https://www.swiggy.com/city/gondia",
							},
							{
								text: "Ichalkaranji",
								link: "https://www.swiggy.com/city/ichalkaranji",
							},
							{
								text: "Jalna",
								link: "https://www.swiggy.com/city/jalna",
							},
							{
								text: "Yavatmal",
								link: "https://www.swiggy.com/city/yavatmal",
							},
							{
								text: "Shivpuri",
								link: "https://www.swiggy.com/city/shivpuri",
							},
							{
								text: "Moga",
								link: "https://www.swiggy.com/city/moga",
							},
							{
								text: "Abohar",
								link: "https://www.swiggy.com/city/abohar",
							},
							{
								text: "Adoni",
								link: "https://www.swiggy.com/city/adoni",
							},
							{
								text: "Madanapalle",
								link: "https://www.swiggy.com/city/madanapalle",
							},
							{
								text: "Tiruvannamalai",
								link: "https://www.swiggy.com/city/tiruvannamalai",
							},
							{
								text: "Satara",
								link: "https://www.swiggy.com/city/satara",
							},
							{
								text: "Ambur",
								link: "https://www.swiggy.com/city/ambur",
							},
							{
								text: "Karimnagar",
								link: "https://www.swiggy.com/city/karimnagar",
							},
							{
								text: "Ratlam",
								link: "https://www.swiggy.com/city/ratlam",
							},
							{
								text: "Moradabad",
								link: "https://www.swiggy.com/city/moradabad",
							},
							{
								text: "Machilipatnam",
								link: "https://www.swiggy.com/city/machilipatnam",
							},
							{
								text: "Ongole",
								link: "https://www.swiggy.com/city/ongole",
							},
							{
								text: "Kottayam",
								link: "https://www.swiggy.com/city/kottayam",
							},
							{
								text: "Darbhanga",
								link: "https://www.swiggy.com/city/darbhanga",
							},
							{
								text: "Kurukshetra",
								link: "https://www.swiggy.com/city/kurukshetra",
							},
							{
								text: "Unnao",
								link: "https://www.swiggy.com/city/unnao",
							},
							{
								text: "Bulandshahr",
								link: "https://www.swiggy.com/city/bulandshahr",
							},
							{
								text: "Durgapur",
								link: "https://www.swiggy.com/city/durgapur",
							},
							{
								text: "Siliguri",
								link: "https://www.swiggy.com/city/siliguri",
							},
							{
								text: "Pali",
								link: "https://www.swiggy.com/city/pali",
							},
							{
								text: "Tadepalligudem",
								link: "https://www.swiggy.com/city/tadepalligudem",
							},
							{
								text: "Ramagundam",
								link: "https://www.swiggy.com/city/ramagundam",
							},
							{
								text: "Mahbubnagar",
								link: "https://www.swiggy.com/city/mahbubnagar",
							},
							{
								text: "Bhiwani",
								link: "https://www.swiggy.com/city/bhiwani",
							},
							{
								text: "Cuddalore",
								link: "https://www.swiggy.com/city/cuddalore",
							},
							{
								text: "Kaithal",
								link: "https://www.swiggy.com/city/kaithal",
							},
							{
								text: "Jagtial",
								link: "https://www.swiggy.com/city/jagtial",
							},
							{
								text: "Palakkad",
								link: "https://www.swiggy.com/city/palakkad",
							},
							{
								text: "Guna",
								link: "https://www.swiggy.com/city/guna",
							},
							{
								text: "Kumbakonam",
								link: "https://www.swiggy.com/city/kumbakonam",
							},
							{
								text: "Maunath Bhanjan",
								link: "https://www.swiggy.com/city/maunath-bhanjan",
							},
							{
								text: "Baripada",
								link: "https://www.swiggy.com/city/baripada",
							},
							{
								text: "Orai",
								link: "https://www.swiggy.com/city/orai",
							},
							{
								text: "Bhadrak",
								link: "https://www.swiggy.com/city/bhadrak",
							},
							{
								text: "Batala",
								link: "https://www.swiggy.com/city/batala",
							},
							{
								text: "Firozpur",
								link: "https://www.swiggy.com/city/firozpur",
							},
							{
								text: "Barnala",
								link: "https://www.swiggy.com/city/barnala",
							},
							{
								text: "Raigarh",
								link: "https://www.swiggy.com/city/raigarh",
							},
							{
								text: "Nagaon",
								link: "https://www.swiggy.com/city/nagaon",
							},
							{
								text: "Mainpuri",
								link: "https://www.swiggy.com/city/mainpuri",
							},
							{
								text: "Balurghat",
								link: "https://www.swiggy.com/city/balurghat",
							},
							{
								text: "Giridih",
								link: "https://www.swiggy.com/city/giridih",
							},
							{
								text: "Ghazipur",
								link: "https://www.swiggy.com/city/ghazipur",
							},
							{
								text: "Jagdalpur",
								link: "https://www.swiggy.com/city/jagdalpur",
							},
							{
								text: "Vidisha",
								link: "https://www.swiggy.com/city/vidisha",
							},
							{
								text: "Dimapur",
								link: "https://www.swiggy.com/city/dimapur",
							},
							{
								text: "Shikohabad",
								link: "https://www.swiggy.com/city/shikohabad",
							},
							{
								text: "Imphal",
								link: "https://www.swiggy.com/city/imphal",
							},
							{
								text: "Lakhimpur",
								link: "https://www.swiggy.com/city/lakhimpur",
							},
							{
								text: "Rudrapur",
								link: "https://www.swiggy.com/city/rudrapur",
							},
							{
								text: "Ambikapur",
								link: "https://www.swiggy.com/city/ambikapur",
							},
							{
								text: "Damoh",
								link: "https://www.swiggy.com/city/damoh",
							},
							{
								text: "Rae Bareli",
								link: "https://www.swiggy.com/city/rae-bareli",
							},
							{
								text: "Tinsukia",
								link: "https://www.swiggy.com/city/tinsukia",
							},
							{
								text: "Rajapalayam",
								link: "https://www.swiggy.com/city/rajapalayam",
							},
							{
								text: "Rajnandgaon",
								link: "https://www.swiggy.com/city/rajnandgaon",
							},
							{
								text: "Kashipur",
								link: "https://www.swiggy.com/city/kashipur",
							},
							{
								text: "Ranibennur",
								link: "https://www.swiggy.com/city/ranibennur",
							},
							{
								text: "Burhanpur",
								link: "https://www.swiggy.com/city/burhanpur",
							},
							{
								text: "Bhadravati",
								link: "https://www.swiggy.com/city/bhadravati",
							},
							{
								text: "Chittoor",
								link: "https://www.swiggy.com/city/chittoor",
							},
							{
								text: "Pudukkottai",
								link: "https://www.swiggy.com/city/pudukkottai",
							},
							{
								text: "Hardoi",
								link: "https://www.swiggy.com/city/hardoi",
							},
							{
								text: "Basti",
								link: "https://www.swiggy.com/city/basti",
							},
							{
								text: "Karaikkudi",
								link: "https://www.swiggy.com/city/karaikkudi",
							},
							{
								text: "Lalitpur",
								link: "https://www.swiggy.com/city/lalitpur",
							},
							{
								text: "Hospet",
								link: "https://www.swiggy.com/city/hospet",
							},
							{
								text: "Budaun",
								link: "https://www.swiggy.com/city/budaun",
							},
							{
								text: "Neemuch",
								link: "https://www.swiggy.com/city/neemuch",
							},
							{
								text: "Pilibhit",
								link: "https://www.swiggy.com/city/pilibhit",
							},
							{
								text: "Amroha",
								link: "https://www.swiggy.com/city/amroha",
							},
							{
								text: "Barshi",
								link: "https://www.swiggy.com/city/barshi",
							},
							{
								text: "Sri Ganganagar",
								link: "https://www.swiggy.com/city/sri-ganganagar",
							},
							{
								text: "Wardha",
								link: "https://www.swiggy.com/city/wardha",
							},
							{
								text: "Sehore",
								link: "https://www.swiggy.com/city/sehore",
							},
							{
								text: "Bhimavaram",
								link: "https://www.swiggy.com/city/bhimavaram",
							},
							{
								text: "Hanumangarh",
								link: "https://www.swiggy.com/city/hanumangarh",
							},
							{
								text: "Pathankot",
								link: "https://www.swiggy.com/city/pathankot",
							},
							{
								text: "Puri",
								link: "https://www.swiggy.com/city/puri",
							},
							{
								text: "Fatehpur",
								link: "https://www.swiggy.com/city/fatehpur",
							},
							{
								text: "Surendranagar Dudhrej",
								link: "https://www.swiggy.com/city/surendranagar-dudhrej",
							},
							{
								text: "Jamnagar",
								link: "https://www.swiggy.com/city/jamnagar",
							},
							{
								text: "Bhuj",
								link: "https://www.swiggy.com/city/bhuj",
							},
							{
								text: "Gandhidham",
								link: "https://www.swiggy.com/city/gandhidham",
							},
							{
								text: "Bharuch",
								link: "https://www.swiggy.com/city/bharuch",
							},
							{
								text: "Navsari",
								link: "https://www.swiggy.com/city/navsari",
							},
							{
								text: "Amreli",
								link: "https://www.swiggy.com/city/amreli",
							},
							{
								text: "Palanpur",
								link: "https://www.swiggy.com/city/palanpur",
							},
							{
								text: "Bhilwara",
								link: "https://www.swiggy.com/city/bhilwara",
							},
							{
								text: "Suratgarh",
								link: "https://www.swiggy.com/city/suratgarh",
							},
							{
								text: "Sikar",
								link: "https://www.swiggy.com/city/sikar",
							},
							{
								text: "Churu",
								link: "https://www.swiggy.com/city/churu",
							},
							{
								text: "Alwar",
								link: "https://www.swiggy.com/city/alwar",
							},
							{
								text: "Bhiwadi",
								link: "https://www.swiggy.com/city/bhiwadi",
							},
							{
								text: "Bharatpur",
								link: "https://www.swiggy.com/city/bharatpur",
							},
							{
								text: "Mount Abu",
								link: "https://www.swiggy.com/city/mount-abu",
							},
							{
								text: "Bundi",
								link: "https://www.swiggy.com/city/bundi",
							},
							{
								text: "Sawai Madhopur",
								link: "https://www.swiggy.com/city/sawai-madhopur",
							},
							{
								text: "Purulia",
								link: "https://www.swiggy.com/city/purulia",
							},
							{
								text: "Bardhaman",
								link: "https://www.swiggy.com/city/bardhaman",
							},
							{
								text: "Raniganj",
								link: "https://www.swiggy.com/city/raniganj",
							},
							{
								text: "Darjeeling",
								link: "https://www.swiggy.com/city/darjeeling",
							},
							{
								text: "Jalpaiguri",
								link: "https://www.swiggy.com/city/jalpaiguri",
							},
							{
								text: "Chittorgarh",
								link: "https://www.swiggy.com/city/chittorgarh",
							},
							{
								text: "Dholpur",
								link: "https://www.swiggy.com/city/dholpur",
							},
							{
								text: "Uluberia",
								link: "https://www.swiggy.com/city/uluberia",
							},
							{
								text: "Nabadwip",
								link: "https://www.swiggy.com/city/nabadwip",
							},
							{
								text: "Bongaon",
								link: "https://www.swiggy.com/city/bongaon",
							},
							{
								text: "Kanchrapara",
								link: "https://www.swiggy.com/city/kanchrapara",
							},
							{
								text: "Bankura",
								link: "https://www.swiggy.com/city/bankura",
							},
							{
								text: "Habra",
								link: "https://www.swiggy.com/city/habra",
							},
							{
								text: "Firozabad",
								link: "https://www.swiggy.com/city/firozabad",
							},
							{
								text: "Nalgonda",
								link: "https://www.swiggy.com/city/nalgonda",
							},
							{
								text: "Chandrapur",
								link: "https://www.swiggy.com/city/chandrapur",
							},
							{
								text: "Bijapur",
								link: "https://www.swiggy.com/city/bijapur",
							},
							{
								text: "Bhusawal",
								link: "https://www.swiggy.com/city/bhusawal",
							},
							{
								text: "Raichur",
								link: "https://www.swiggy.com/city/raichur",
							},
							{
								text: "Bahraich",
								link: "https://www.swiggy.com/city/bahraich",
							},
							{
								text: "Azamgarh",
								link: "https://www.swiggy.com/city/azamgarh",
							},
							{
								text: "Bahadurgarh",
								link: "https://www.swiggy.com/city/bahadurgarh",
							},
							{
								text: "Jind",
								link: "https://www.swiggy.com/city/jind",
							},
							{
								text: "Rewari",
								link: "https://www.swiggy.com/city/rewari",
							},
							{
								text: "Palwal",
								link: "https://www.swiggy.com/city/palwal",
							},
							{
								text: "Hathras",
								link: "https://www.swiggy.com/city/hathras",
							},
							{
								text: "Sambalpur",
								link: "https://www.swiggy.com/city/sambalpur",
							},
							{
								text: "Banda",
								link: "https://www.swiggy.com/city/banda",
							},
							{
								text: "Hoshiarpur",
								link: "https://www.swiggy.com/city/hoshiarpur",
							},
							{
								text: "Faridkot",
								link: "https://www.swiggy.com/city/faridkot",
							},
							{
								text: "Mandsaur",
								link: "https://www.swiggy.com/city/mandsaur",
							},
							{
								text: "Suryapet",
								link: "https://www.swiggy.com/city/suryapet",
							},
							{
								text: "Adilabad",
								link: "https://www.swiggy.com/city/adilabad",
							},
							{
								text: "Narasaraopet",
								link: "https://www.swiggy.com/city/narasaraopet",
							},
							{
								text: "Faizabad",
								link: "https://www.swiggy.com/city/faizabad",
							},
							{
								text: "Tadpatri",
								link: "https://www.swiggy.com/city/tadpatri",
							},
							{
								text: "Gonda",
								link: "https://www.swiggy.com/city/gonda",
							},
							{
								text: "Mughalsarai",
								link: "https://www.swiggy.com/city/mughalsarai",
							},
							{
								text: "Medinipur",
								link: "https://www.swiggy.com/city/medinipur",
							},
							{
								text: "Nagda",
								link: "https://www.swiggy.com/city/nagda",
							},
							{
								text: "Chilakaluripet",
								link: "https://www.swiggy.com/city/chilakaluripet",
							},
							{
								text: "Hindupur",
								link: "https://www.swiggy.com/city/hindupur",
							},
							{
								text: "Kasganj",
								link: "https://www.swiggy.com/city/kasganj",
							},
							{
								text: "Raiganj",
								link: "https://www.swiggy.com/city/raiganj",
							},
							{
								text: "Deoria City",
								link: "https://www.swiggy.com/city/deoria-city",
							},
							{
								text: "Sultanpur",
								link: "https://www.swiggy.com/city/sultanpur",
							},
							{
								text: "Shamli",
								link: "https://www.swiggy.com/city/shamli",
							},
							{
								text: "Krishnanagar",
								link: "https://www.swiggy.com/city/krishnanagar",
							},
							{
								text: "Ballia",
								link: "https://www.swiggy.com/city/ballia",
							},
							{
								text: "Guntakal",
								link: "https://www.swiggy.com/city/guntakal",
							},
							{
								text: "Miryalaguda",
								link: "https://www.swiggy.com/city/miryalaguda",
							},
							{
								text: "Etah",
								link: "https://www.swiggy.com/city/etah",
							},
							{
								text: "Berhampore",
								link: "https://www.swiggy.com/city/berhampore",
							},
							{
								text: "Gudivada",
								link: "https://www.swiggy.com/city/gudivada",
							},
							{
								text: "Haldia",
								link: "https://www.swiggy.com/city/haldia",
							},
							{
								text: "Santipur",
								link: "https://www.swiggy.com/city/santipur",
							},
							{
								text: "Basirhat",
								link: "https://www.swiggy.com/city/basirhat",
							},
							{
								text: "Seoni",
								link: "https://www.swiggy.com/city/seoni",
							},
							{
								text: "Udgir",
								link: "https://www.swiggy.com/city/udgir",
							},
							{
								text: "Proddatur",
								link: "https://www.swiggy.com/city/proddatur",
							},
							{
								text: "Nagapattinam",
								link: "https://www.swiggy.com/city/nagapattinam",
							},
							{
								text: "Chikmagalur",
								link: "https://www.swiggy.com/city/chikmagalur",
							},
							{
								text: "Chandausi",
								link: "https://www.swiggy.com/city/chandausi",
							},
							{
								text: "Bhind",
								link: "https://www.swiggy.com/city/bhind",
							},
							{
								text: "Mandya",
								link: "https://www.swiggy.com/city/mandya",
							},
							{
								text: "Bagalkot",
								link: "https://www.swiggy.com/city/bagalkot",
							},
							{
								text: "Nandurbar",
								link: "https://www.swiggy.com/city/nandurbar",
							},
							{
								text: "Chitradurga",
								link: "https://www.swiggy.com/city/chitradurga",
							},
							{
								text: "Osmanabad",
								link: "https://www.swiggy.com/city/osmanabad",
							},
							{
								text: "Modinagar",
								link: "https://www.swiggy.com/city/modinagar",
							},
							{
								text: "Gadag-Betigeri",
								link: "https://www.swiggy.com/city/gadag-betigeri",
							},
							{
								text: "Hoshangabad",
								link: "https://www.swiggy.com/city/hoshangabad",
							},
							{
								text: "Jaunpur",
								link: "https://www.swiggy.com/city/jaunpur",
							},
							{
								text: "Khurja",
								link: "https://www.swiggy.com/city/khurja",
							},
							{
								text: "Port Blair",
								link: "https://www.swiggy.com/city/port-blair",
							},
							{
								text: "Jorhat",
								link: "https://www.swiggy.com/city/jorhat",
							},
							{
								text: "Nandyal",
								link: "https://www.swiggy.com/city/nandyal",
							},
							{
								text: "Biharsharif",
								link: "https://www.swiggy.com/city/biharsharif",
							},
							{
								text: "Buxar",
								link: "https://www.swiggy.com/city/buxar",
							},
							{
								text: "Siwan",
								link: "https://www.swiggy.com/city/siwan",
							},
							{
								text: "Dehri",
								link: "https://www.swiggy.com/city/dehri",
							},
							{
								text: "Bettiah",
								link: "https://www.swiggy.com/city/bettiah",
							},
							{
								text: "Kishanganj",
								link: "https://www.swiggy.com/city/kishanganj",
							},
							{
								text: "Saharsa",
								link: "https://www.swiggy.com/city/saharsa",
							},
							{
								text: "Hajipur",
								link: "https://www.swiggy.com/city/hajipur",
							},
							{
								text: "Motihari",
								link: "https://www.swiggy.com/city/motihari",
							},
							{
								text: "Sasaram",
								link: "https://www.swiggy.com/city/sasaram",
							},
							{
								text: "Munger",
								link: "https://www.swiggy.com/city/munger",
							},
							{
								text: "Katihar",
								link: "https://www.swiggy.com/city/katihar",
							},
							{
								text: "Arrah",
								link: "https://www.swiggy.com/city/arrah",
							},
							{
								text: "Srikakulam",
								link: "https://www.swiggy.com/city/srikakulam",
							},
							{
								text: "Begusarai",
								link: "https://www.swiggy.com/city/begusarai",
							},
							{
								text: "Neyveli",
								link: "https://www.swiggy.com/city/neyveli",
							},
							{
								text: "Waidhan",
								link: "https://www.swiggy.com/city/waidhan",
							},
							{
								text: "Markapur",
								link: "https://www.swiggy.com/city/markapur",
							},
							{
								text: "Chikkaballapur",
								link: "https://www.swiggy.com/city/chikkaballapur",
							},
							{
								text: "Bhatkal",
								link: "https://www.swiggy.com/city/bhatkal",
							},
							{
								text: "Gokak",
								link: "https://www.swiggy.com/city/gokak",
							},
							{
								text: "Itarsi",
								link: "https://www.swiggy.com/city/itarsi",
							},
							{
								text: "Dabra",
								link: "https://www.swiggy.com/city/dabra",
							},
							{
								text: "Dhar",
								link: "https://www.swiggy.com/city/dhar",
							},
							{
								text: "Chalisgaon",
								link: "https://www.swiggy.com/city/chalisgaon",
							},
							{
								text: "Thiruvallur",
								link: "https://www.swiggy.com/city/thiruvallur",
							},
							{
								text: "Namakkal",
								link: "https://www.swiggy.com/city/namakkal",
							},
							{
								text: "Dharmapuri",
								link: "https://www.swiggy.com/city/dharmapuri",
							},
							{
								text: "Bhandara",
								link: "https://www.swiggy.com/city/bhandara",
							},
							{
								text: "Virudhunagar",
								link: "https://www.swiggy.com/city/virudhunagar",
							},
							{
								text: "Siddipet",
								link: "https://www.swiggy.com/city/siddipet",
							},
							{
								text: "Gadwal",
								link: "https://www.swiggy.com/city/gadwal",
							},
							{
								text: "Bodhan-Rural",
								link: "https://www.swiggy.com/city/bodhan-rural",
							},
							{
								text: "Kamareddy",
								link: "https://www.swiggy.com/city/kamareddy",
							},
							{
								text: "Jhunjhunu",
								link: "https://www.swiggy.com/city/jhunjhunu",
							},
							{
								text: "Kapurthala",
								link: "https://www.swiggy.com/city/kapurthala",
							},
							{
								text: "Sangrur",
								link: "https://www.swiggy.com/city/sangrur",
							},
							{
								text: "Gurdaspur",
								link: "https://www.swiggy.com/city/gurdaspur",
							},
							{
								text: "Ramgarh",
								link: "https://www.swiggy.com/city/ramgarh",
							},
							{
								text: "Bantwal",
								link: "https://www.swiggy.com/city/bantwal",
							},
							{
								text: "Doddaballapura",
								link: "https://www.swiggy.com/city/doddaballapura",
							},
							{
								text: "Buldana",
								link: "https://www.swiggy.com/city/buldana",
							},
							{
								text: "Karad",
								link: "https://www.swiggy.com/city/karad",
							},
							{
								text: "Krishnagiri",
								link: "https://www.swiggy.com/city/krishnagiri",
							},
							{
								text: "Tiptur",
								link: "https://www.swiggy.com/city/tiptur",
							},
							{
								text: "Bhadrachalam",
								link: "https://www.swiggy.com/city/bhadrachalam",
							},
							{
								text: "Mancherial",
								link: "https://www.swiggy.com/city/mancherial",
							},
							{
								text: "Balrampur",
								link: "https://www.swiggy.com/city/balrampur",
							},
							{
								text: "Bharabanki",
								link: "https://www.swiggy.com/city/bharabanki",
							},
							{
								text: "Malout",
								link: "https://www.swiggy.com/city/malout",
							},
							{
								text: "Fatehgarh Sahib",
								link: "https://www.swiggy.com/city/fatehgarh-sahib",
							},
							{
								text: "Ropar",
								link: "https://www.swiggy.com/city/ropar",
							},
							{
								text: "Nangal",
								link: "https://www.swiggy.com/city/nangal",
							},
							{
								text: "Narnaul",
								link: "https://www.swiggy.com/city/narnaul",
							},
							{
								text: "Naraingarh",
								link: "https://www.swiggy.com/city/naraingarh",
							},
							{
								text: "Himmatnagar",
								link: "https://www.swiggy.com/city/himmatnagar",
							},
							{
								text: "Dausa",
								link: "https://www.swiggy.com/city/dausa",
							},
							{
								text: "Jahanabad",
								link: "https://www.swiggy.com/city/jahanabad",
							},
							{
								text: "Samastipur",
								link: "https://www.swiggy.com/city/samastipur",
							},
							{
								text: "Purnea",
								link: "https://www.swiggy.com/city/purnea",
							},
							{
								text: "Berhampur",
								link: "https://www.swiggy.com/city/berhampur",
							},
							{
								text: "Malda",
								link: "https://www.swiggy.com/city/malda",
							},
							{
								text: "Tuni",
								link: "https://www.swiggy.com/city/tuni",
							},
							{
								text: "Puttur",
								link: "https://www.swiggy.com/city/puttur",
							},
							{
								text: "Rayachoty",
								link: "https://www.swiggy.com/city/rayachoty",
							},
							{
								text: "Medak",
								link: "https://www.swiggy.com/city/medak",
							},
							{
								text: "Nirmal",
								link: "https://www.swiggy.com/city/nirmal",
							},
							{
								text: "Mirzapur",
								link: "https://www.swiggy.com/city/mirzapur",
							},
							{
								text: "Tanuku",
								link: "https://www.swiggy.com/city/tanuku",
							},
							{
								text: "Dahod",
								link: "https://www.swiggy.com/city/dahod",
							},
							{
								text: "Barmer",
								link: "https://www.swiggy.com/city/barmer",
							},
							{
								text: "Gangapur City",
								link: "https://www.swiggy.com/city/gangapur-city",
							},
							{
								text: "Mandi Gobindgarh",
								link: "https://www.swiggy.com/city/mandi-gobindgarh",
							},
							{
								text: "Tarn Taran Sahib",
								link: "https://www.swiggy.com/city/tarn-taran-sahib",
							},
							{
								text: "Nakodar",
								link: "https://www.swiggy.com/city/nakodar",
							},
							{
								text: "Ankleshwar",
								link: "https://www.swiggy.com/city/ankleshwar",
							},
							{
								text: "Vyara",
								link: "https://www.swiggy.com/city/vyara",
							},
							{
								text: "Bardoli",
								link: "https://www.swiggy.com/city/bardoli",
							},
							{
								text: "Halol",
								link: "https://www.swiggy.com/city/halol",
							},
							{
								text: "Bijnor",
								link: "https://www.swiggy.com/city/bijnor",
							},
							{
								text: "Sawantwadi",
								link: "https://www.swiggy.com/city/sawantwadi",
							},
							{
								text: "Shrirampur",
								link: "https://www.swiggy.com/city/shrirampur",
							},
							{
								text: "Sangamner",
								link: "https://www.swiggy.com/city/sangamner",
							},
							{
								text: "Baramati",
								link: "https://www.swiggy.com/city/baramati",
							},
							{
								text: "Betul",
								link: "https://www.swiggy.com/city/betul",
							},
							{
								text: "Chhatarpur",
								link: "https://www.swiggy.com/city/chhatarpur",
							},
							{
								text: "Datia",
								link: "https://www.swiggy.com/city/datia",
							},
							{
								text: "Balaghat",
								link: "https://www.swiggy.com/city/balaghat",
							},
							{
								text: "Sivakasi",
								link: "https://www.swiggy.com/city/sivakasi",
							},
							{
								text: "Viluppuram",
								link: "https://www.swiggy.com/city/viluppuram",
							},
							{
								text: "Ramanathapuram",
								link: "https://www.swiggy.com/city/ramanathapuram",
							},
							{
								text: "Sirsi",
								link: "https://www.swiggy.com/city/sirsi",
							},
							{
								text: "Kodaikanal",
								link: "https://www.swiggy.com/city/kodaikanal",
							},
							{
								text: "Theni",
								link: "https://www.swiggy.com/city/theni",
							},
							{
								text: "Karur",
								link: "https://www.swiggy.com/city/karur",
							},
							{
								text: "Karwar",
								link: "https://www.swiggy.com/city/karwar",
							},
							{
								text: "Sindhanur",
								link: "https://www.swiggy.com/city/sindhanur",
							},
							{
								text: "Kannur",
								link: "https://www.swiggy.com/city/kannur",
							},
							{
								text: "Noida 1",
								link: "https://www.swiggy.com/city/noida-1",
							},
							{
								text: "Karunagappaly",
								link: "https://www.swiggy.com/city/karunagappaly",
							},
							{
								text: "Thiruvalla",
								link: "https://www.swiggy.com/city/thiruvalla",
							},
							{
								text: "Thodupuzha",
								link: "https://www.swiggy.com/city/thodupuzha",
							},
							{
								text: "Kadiri",
								link: "https://www.swiggy.com/city/kadiri",
							},
							{
								text: "Kavali",
								link: "https://www.swiggy.com/city/kavali",
							},
							{
								text: "Tezpur",
								link: "https://www.swiggy.com/city/tezpur",
							},
							{
								text: "Kayamkulam",
								link: "https://www.swiggy.com/city/kayamkulam",
							},
							{
								text: "Kottarakkara",
								link: "https://www.swiggy.com/city/kottarakkara",
							},
							{
								text: "Mandi Dabwali",
								link: "https://www.swiggy.com/city/mandi-dabwali",
							},
							{
								text: "Fatehabad",
								link: "https://www.swiggy.com/city/fatehabad",
							},
							{
								text: "Jagraon",
								link: "https://www.swiggy.com/city/jagraon",
							},
							{
								text: "Mansa",
								link: "https://www.swiggy.com/city/mansa",
							},
							{
								text: "Pinjore City",
								link: "https://www.swiggy.com/city/pinjore-city",
							},
							{
								text: "Fazilka",
								link: "https://www.swiggy.com/city/fazilka",
							},
							{
								text: "Baddi",
								link: "https://www.swiggy.com/city/baddi",
							},
							{
								text: "Solan",
								link: "https://www.swiggy.com/city/solan",
							},
							{
								text: "Daltonganj",
								link: "https://www.swiggy.com/city/daltonganj",
							},
							{
								text: "Balangir",
								link: "https://www.swiggy.com/city/balangir",
							},
							{
								text: "Paonta Sahib",
								link: "https://www.swiggy.com/city/paonta-sahib",
							},
							{
								text: "Kothagudem",
								link: "https://www.swiggy.com/city/kothagudem",
							},
							{
								text: "Hansi",
								link: "https://www.swiggy.com/city/hansi",
							},
							{
								text: "Aurangabad_Bihar",
								link: "https://www.swiggy.com/city/aurangabadbihar",
							},
							{
								text: "Charkhi Dadri",
								link: "https://www.swiggy.com/city/charkhi-dadri",
							},
							{
								text: "Gopalganj",
								link: "https://www.swiggy.com/city/gopalganj",
							},
							{
								text: "Jharsuguda",
								link: "https://www.swiggy.com/city/jharsuguda",
							},
							{
								text: "Tohana",
								link: "https://www.swiggy.com/city/tohana",
							},
							{
								text: "Jhalawar",
								link: "https://www.swiggy.com/city/jhalawar",
							},
							{
								text: "Sivasagar",
								link: "https://www.swiggy.com/city/sivasagar",
							},
							{
								text: "Bagdogra",
								link: "https://www.swiggy.com/city/bagdogra",
							},
							{
								text: "Angul",
								link: "https://www.swiggy.com/city/angul",
							},
							{
								text: "Kendrapada",
								link: "https://www.swiggy.com/city/kendrapada",
							},
							{
								text: "Mallapuram (Do not Use)",
								link: "https://www.swiggy.com/city/mallapuram-do-not-use",
							},
							{
								text: "Veraval",
								link: "https://www.swiggy.com/city/veraval",
							},
							{
								text: "Daman",
								link: "https://www.swiggy.com/city/daman",
							},
							{
								text: "Chiplun",
								link: "https://www.swiggy.com/city/chiplun",
							},
							{
								text: "Silvassa",
								link: "https://www.swiggy.com/city/silvassa",
							},
							{
								text: "Bapatla&Chirala",
								link: "https://www.swiggy.com/city/bapatla-and-chirala",
							},
							{
								text: "Lonavla",
								link: "https://www.swiggy.com/city/lonavla",
							},
							{
								text: "Bongaigaon",
								link: "https://www.swiggy.com/city/bongaigaon",
							},
							{
								text: "Golaghat",
								link: "https://www.swiggy.com/city/golaghat",
							},
							{
								text: "Duliajan",
								link: "https://www.swiggy.com/city/duliajan",
							},
							{
								text: "Ramnagar",
								link: "https://www.swiggy.com/city/ramnagar",
							},
							{
								text: "Bolpur",
								link: "https://www.swiggy.com/city/bolpur",
							},
							{
								text: "Madhubani",
								link: "https://www.swiggy.com/city/madhubani",
							},
							{
								text: "Balasore",
								link: "https://www.swiggy.com/city/balasore",
							},
							{
								text: "Palampur",
								link: "https://www.swiggy.com/city/palampur",
							},
							{
								text: "Kotdwar",
								link: "https://www.swiggy.com/city/kotdwar",
							},
							{
								text: "Koppal",
								link: "https://www.swiggy.com/city/koppal",
							},
							{
								text: "Chikhli",
								link: "https://www.swiggy.com/city/chikhli",
							},
							{
								text: "Dahanu",
								link: "https://www.swiggy.com/city/dahanu",
							},
							{
								text: "Itanagar",
								link: "https://www.swiggy.com/city/itanagar",
							},
							{
								text: "Rangpo",
								link: "https://www.swiggy.com/city/rangpo",
							},
							{
								text: "Aizawl",
								link: "https://www.swiggy.com/city/aizawl",
							},
							{
								text: "Gangtok",
								link: "https://www.swiggy.com/city/gangtok",
							},
							{
								text: "Mayiladuthurai",
								link: "https://www.swiggy.com/city/mayiladuthurai",
							},
							{
								text: "Kannauj",
								link: "https://www.swiggy.com/city/kannauj",
							},
							{
								text: "Cooch Behar",
								link: "https://www.swiggy.com/city/cooch-behar",
							},
							{
								text: "Jaigaon",
								link: "https://www.swiggy.com/city/jaigaon",
							},
							{
								text: "Palani",
								link: "https://www.swiggy.com/city/palani",
							},
							{
								text: "Bilimora",
								link: "https://www.swiggy.com/city/bilimora",
							},
							{
								text: "Udhampur",
								link: "https://www.swiggy.com/city/udhampur",
							},
							{
								text: "Boisar",
								link: "https://www.swiggy.com/city/boisar",
							},
							{
								text: "Kohima",
								link: "https://www.swiggy.com/city/kohima",
							},
							{
								text: "Naharlagun",
								link: "https://www.swiggy.com/city/naharlagun",
							},
							{
								text: "Dumka",
								link: "https://www.swiggy.com/city/dumka",
							},
							{
								text: "Rajsamand",
								link: "https://www.swiggy.com/city/rajsamand",
							},
							{
								text: "Gauriganj",
								link: "https://www.swiggy.com/city/gauriganj",
							},
							{
								text: "Bodinayakanur",
								link: "https://www.swiggy.com/city/bodinayakanur",
							},
							{
								text: "Bhawanipatna",
								link: "https://www.swiggy.com/city/bhawanipatna",
							},
							{
								text: "Baran",
								link: "https://www.swiggy.com/city/baran",
							},
							{
								text: "Narsinghpur",
								link: "https://www.swiggy.com/city/narsinghpur",
							},
							{
								text: "Uran Islampur",
								link: "https://www.swiggy.com/city/uran-islampur",
							},
							{
								text: "Kovilpatti",
								link: "https://www.swiggy.com/city/kovilpatti",
							},
							{
								text: "Kasaragod",
								link: "https://www.swiggy.com/city/kasaragod",
							},
							{
								text: "Pusad",
								link: "https://www.swiggy.com/city/pusad",
							},
							{
								text: "Kendujhar",
								link: "https://www.swiggy.com/city/kendujhar",
							},
							{
								text: "Manali",
								link: "https://www.swiggy.com/city/manali",
							},
							{
								text: "Diu",
								link: "https://www.swiggy.com/city/diu",
							},
							{
								text: "Khamgaon",
								link: "https://www.swiggy.com/city/khamgaon",
							},
							{
								text: "Ramanagara",
								link: "https://www.swiggy.com/city/ramanagara",
							},
							{
								text: "Alipurduar",
								link: "https://www.swiggy.com/city/alipurduar",
							},
							{
								text: "Almora",
								link: "https://www.swiggy.com/city/almora",
							},
							{
								text: "Jhargram",
								link: "https://www.swiggy.com/city/jhargram",
							},
							{
								text: "Arambagh",
								link: "https://www.swiggy.com/city/arambagh",
							},
							{
								text: "Bhadohi",
								link: "https://www.swiggy.com/city/bhadohi",
							},
							{
								text: "Tenkasi",
								link: "https://www.swiggy.com/city/tenkasi",
							},
							{
								text: "Srivilliputhur",
								link: "https://www.swiggy.com/city/srivilliputhur",
							},
							{
								text: "Chidambaram",
								link: "https://www.swiggy.com/city/chidambaram",
							},
							{
								text: "Rajgarh",
								link: "https://www.swiggy.com/city/rajgarh",
							},
							{
								text: "Pratapgarh",
								link: "https://www.swiggy.com/city/pratapgarh",
							},
							{
								text: "Washim",
								link: "https://www.swiggy.com/city/washim",
							},
							{
								text: "Mandi HP",
								link: "https://www.swiggy.com/city/mandi-hp",
							},
							{
								text: "Ranaghat",
								link: "https://www.swiggy.com/city/ranaghat",
							},
							{
								text: "Raghunathpur",
								link: "https://www.swiggy.com/city/raghunathpur",
							},
							{
								text: "Suri",
								link: "https://www.swiggy.com/city/suri",
							},
							{
								text: "Kadayanallur",
								link: "https://www.swiggy.com/city/kadayanallur",
							},
							{
								text: "Thiruvarur",
								link: "https://www.swiggy.com/city/thiruvarur",
							},
							{
								text: "Ranaghat-WB",
								link: "https://www.swiggy.com/city/ranaghat-wb",
							},
							{
								text: "Idukki",
								link: "https://www.swiggy.com/city/idukki",
							},
							{
								text: "Wayanad",
								link: "https://www.swiggy.com/city/wayanad",
							},
							{
								text: "Perambalur",
								link: "https://www.swiggy.com/city/perambalur",
							},
							{
								text: "Paramakudi",
								link: "https://www.swiggy.com/city/paramakudi",
							},
							{
								text: "Khopoli",
								link: "https://www.swiggy.com/city/khopoli",
							},
							{
								text: "Bela Pratapgarh",
								link: "https://www.swiggy.com/city/bela-pratapgarh",
							},
							{
								text: "Mahoba",
								link: "https://www.swiggy.com/city/mahoba",
							},
							{
								text: "Sitamarhi",
								link: "https://www.swiggy.com/city/sitamarhi",
							},
							{
								text: "Chakdaha",
								link: "https://www.swiggy.com/city/chakdaha",
							},
							{
								text: "Khalilabad",
								link: "https://www.swiggy.com/city/khalilabad",
							},
							{
								text: "Pattukkottai",
								link: "https://www.swiggy.com/city/pattukkottai",
							},
							{
								text: "Tindivanam",
								link: "https://www.swiggy.com/city/tindivanam",
							},
							{
								text: "Tiruttani",
								link: "https://www.swiggy.com/city/tiruttani",
							},
							{
								text: "Gangarampur",
								link: "https://www.swiggy.com/city/gangarampur",
							},
							{
								text: "Dharapuram",
								link: "https://www.swiggy.com/city/dharapuram",
							},
							{
								text: "Arakkonam",
								link: "https://www.swiggy.com/city/arakkonam",
							},
							{
								text: "Sirkali",
								link: "https://www.swiggy.com/city/sirkali",
							},
							{
								text: "Aruppukottai",
								link: "https://www.swiggy.com/city/aruppukottai",
							},
							{
								text: "Mettupalayam",
								link: "https://www.swiggy.com/city/mettupalayam",
							},
							{
								text: "Digboi",
								link: "https://www.swiggy.com/city/digboi",
							},
							{
								text: "Biswanath Chariali",
								link: "https://www.swiggy.com/city/biswanath-chariali",
							},
							{
								text: "Nalbari",
								link: "https://www.swiggy.com/city/nalbari",
							},
							{
								text: "Shirdi city",
								link: "https://www.swiggy.com/city/shirdi-city",
							},
							{
								text: "Mukerian",
								link: "https://www.swiggy.com/city/mukerian",
							},
							{
								text: "Hosur",
								link: "https://www.swiggy.com/city/hosur",
							},
							{
								text: "Palakollu",
								link: "https://www.swiggy.com/city/palakollu",
							},
							{
								text: "Amalapuram",
								link: "https://www.swiggy.com/city/amalapuram",
							},
							{
								text: "Ravulapalem",
								link: "https://www.swiggy.com/city/ravulapalem",
							},
							{
								text: "Narsipatnam",
								link: "https://www.swiggy.com/city/narsipatnam",
							},
							{
								text: "Barh",
								link: "https://www.swiggy.com/city/barh",
							},
							{
								text: "Palghar",
								link: "https://www.swiggy.com/city/palghar",
							},
							{
								text: "Shahdol",
								link: "https://www.swiggy.com/city/shahdol",
							},
							{
								text: "Kushalnagar",
								link: "https://www.swiggy.com/city/kushalnagar",
							},
							{
								text: "Dungarpur",
								link: "https://www.swiggy.com/city/dungarpur",
							},
							{
								text: "Chaibasa",
								link: "https://www.swiggy.com/city/chaibasa",
							},
							{
								text: "Haveri",
								link: "https://www.swiggy.com/city/haveri",
							},
							{
								text: "Karaikal",
								link: "https://www.swiggy.com/city/karaikal",
							},
							{
								text: "Jjajjar",
								link: "https://www.swiggy.com/city/jjajjar",
							},
							{
								text: "Kokrajhar",
								link: "https://www.swiggy.com/city/kokrajhar",
							},
							{
								text: "Rangia",
								link: "https://www.swiggy.com/city/rangia",
							},
							{
								text: "Hamirpur",
								link: "https://www.swiggy.com/city/hamirpur",
							},
							{
								text: "Una",
								link: "https://www.swiggy.com/city/una",
							},
							{
								text: "Sulthan Bathery",
								link: "https://www.swiggy.com/city/sulthan-bathery",
							},
							{
								text: "Rayagada",
								link: "https://www.swiggy.com/city/rayagada",
							},
							{
								text: "Paradeep",
								link: "https://www.swiggy.com/city/paradeep",
							},
							{
								text: "Mandapeta",
								link: "https://www.swiggy.com/city/mandapeta",
							},
							{
								text: "Jamui",
								link: "https://www.swiggy.com/city/jamui",
							},
							{
								text: "Pilkhuwa",
								link: "https://www.swiggy.com/city/pilkhuwa",
							},
							{
								text: "Parvathipuram",
								link: "https://www.swiggy.com/city/parvathipuram",
							},
							{
								text: "Ambajogai",
								link: "https://www.swiggy.com/city/ambajogai",
							},
							{
								text: "Araria",
								link: "https://www.swiggy.com/city/araria",
							},
							{
								text: "North Lakhimpur",
								link: "https://www.swiggy.com/city/north-lakhimpur",
							},
							{
								text: "Rajampet",
								link: "https://www.swiggy.com/city/rajampet",
							},
							{
								text: "Udumalaipettai",
								link: "https://www.swiggy.com/city/udumalaipettai",
							},
							{
								text: "Tirupattur",
								link: "https://www.swiggy.com/city/tirupattur",
							},
							{
								text: "Hojai",
								link: "https://www.swiggy.com/city/hojai",
							},
							{
								text: "Khagaria",
								link: "https://www.swiggy.com/city/khagaria",
							},
							{
								text: "Dasuya",
								link: "https://www.swiggy.com/city/dasuya",
							},
							{
								text: "Gudur",
								link: "https://www.swiggy.com/city/gudur",
							},
							{
								text: "Sullurpeta",
								link: "https://www.swiggy.com/city/sullurpeta",
							},
							{
								text: "Piler",
								link: "https://www.swiggy.com/city/piler",
							},
							{
								text: "SankaranKoil",
								link: "https://www.swiggy.com/city/sankarankoil",
							},
							{
								text: "Nabha",
								link: "https://www.swiggy.com/city/nabha",
							},
							{
								text: "LPU - Phagwara",
								link: "https://www.swiggy.com/city/lpu-phagwara",
							},
							{
								text: "Jangipur",
								link: "https://www.swiggy.com/city/jangipur",
							},
							{
								text: "Roha",
								link: "https://www.swiggy.com/city/roha",
							},
							{
								text: "Maharajganj",
								link: "https://www.swiggy.com/city/maharajganj",
							},
							{
								text: "Kallakurichi",
								link: "https://www.swiggy.com/city/kallakurichi",
							},
							{
								text: "Kalimpong",
								link: "https://www.swiggy.com/city/kalimpong",
							},
							{
								text: "Sundernagar",
								link: "https://www.swiggy.com/city/sundernagar",
							},
							{
								text: "Nawada",
								link: "https://www.swiggy.com/city/nawada",
							},
							{
								text: "Forbesganj",
								link: "https://www.swiggy.com/city/forbesganj",
							},
							{
								text: "Mokameh Khas",
								link: "https://www.swiggy.com/city/mokameh-khas",
							},
							{
								text: "Bazpur",
								link: "https://www.swiggy.com/city/bazpur",
							},
							{
								text: "Lakhisarai",
								link: "https://www.swiggy.com/city/lakhisarai",
							},
							{
								text: "Rameswaram",
								link: "https://www.swiggy.com/city/rameswaram",
							},
							{
								text: "Sahjanwa",
								link: "https://www.swiggy.com/city/sahjanwa",
							},
							{
								text: "Siddharthnagar",
								link: "https://www.swiggy.com/city/siddharthnagar",
							},
							{
								text: "Nanjangud",
								link: "https://www.swiggy.com/city/nanjangud",
							},
							{
								text: "Chamarajanagar",
								link: "https://www.swiggy.com/city/chamarajanagar",
							},
							{
								text: "Kurali",
								link: "https://www.swiggy.com/city/kurali",
							},
							{
								text: "Sundar Nagar",
								link: "https://www.swiggy.com/city/sundar-nagar",
							},
							{
								text: "Bobbili",
								link: "https://www.swiggy.com/city/bobbili",
							},
							{
								text: "Jangaon",
								link: "https://www.swiggy.com/city/jangaon",
							},
							{
								text: "Banswara",
								link: "https://www.swiggy.com/city/banswara",
							},
							{
								text: "Sundergarh",
								link: "https://www.swiggy.com/city/sundergarh",
							},
							{
								text: "Godda",
								link: "https://www.swiggy.com/city/godda",
							},
							{
								text: "Madhupur",
								link: "https://www.swiggy.com/city/madhupur",
							},
							{
								text: "Katwa",
								link: "https://www.swiggy.com/city/katwa",
							},
							{
								text: "Dhupguri",
								link: "https://www.swiggy.com/city/dhupguri",
							},
							{
								text: "Contai",
								link: "https://www.swiggy.com/city/contai",
							},
							{
								text: "Baramulla",
								link: "https://www.swiggy.com/city/baramulla",
							},
							{
								text: "Kangeyam",
								link: "https://www.swiggy.com/city/kangeyam",
							},
							{
								text: "Naugachia",
								link: "https://www.swiggy.com/city/naugachia",
							},
							{
								text: "Madhepura",
								link: "https://www.swiggy.com/city/madhepura",
							},
							{
								text: "Jamkhambhaliya",
								link: "https://www.swiggy.com/city/jamkhambhaliya",
							},
							{
								text: "Mundra",
								link: "https://www.swiggy.com/city/mundra",
							},
							{
								text: "Patan",
								link: "https://www.swiggy.com/city/patan",
							},
							{
								text: "Mahuva",
								link: "https://www.swiggy.com/city/mahuva",
							},
							{
								text: "Attur",
								link: "https://www.swiggy.com/city/attur",
							},
							{
								text: "Pen",
								link: "https://www.swiggy.com/city/pen",
							},
							{
								text: "Mandla",
								link: "https://www.swiggy.com/city/mandla",
							},
							{
								text: "Sidhi",
								link: "https://www.swiggy.com/city/sidhi",
							},
							{
								text: "Lakshadweep",
								link: "https://www.swiggy.com/city/lakshadweep",
							},
							{
								text: "Chitrakoot",
								link: "https://www.swiggy.com/city/chitrakoot",
							},
							{
								text: "Rajam",
								link: "https://www.swiggy.com/city/rajam",
							},
							{
								text: "Nippani",
								link: "https://www.swiggy.com/city/nippani",
							},
							{
								text: "Sankeshwar",
								link: "https://www.swiggy.com/city/sankeshwar",
							},
							{
								text: "Chikkodi",
								link: "https://www.swiggy.com/city/chikkodi",
							},
							{
								text: "Modasa",
								link: "https://www.swiggy.com/city/modasa",
							},
							{
								text: "Bavla",
								link: "https://www.swiggy.com/city/bavla",
							},
							{
								text: "Puttur_AP",
								link: "https://www.swiggy.com/city/puttur-ap",
							},
							{
								text: "Sinnar",
								link: "https://www.swiggy.com/city/sinnar",
							},
							{
								text: "singur",
								link: "https://www.swiggy.com/city/singur",
							},
							{
								text: "Nelamangala",
								link: "https://www.swiggy.com/city/nelamangala",
							},
							{
								text: "Srinagar Uttarakhand",
								link: "https://www.swiggy.com/city/srinagar-uttarakhand",
							},
							{
								text: "Dhampur",
								link: "https://www.swiggy.com/city/dhampur",
							},
						],
						id: "footer_content",
					},
				},
			},
			{
				card: {
					card: {
						"@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
						citySlug: "chhindwara",
						lat: "21.99740",
						lng: "79.00110",
						userAgent:
							"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
						gandalfRequest:
							'{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE","businessLine":"FOOD"}}',
						id: "meta_data",
						metaInfo: {
							pageType: "FOOD_HOME_PAGE",
							pageTitle:
								"Order Food Online from India's Best Food Delivery Service | Swiggy",
							pageMetaDescription:
								"Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
							pageKeywords:
								"Food delivery, Online food order, Online food dleivery",
						},
						screenType: "filteredCollection",
						seoParams: {
							apiName: "FoodHomePage",
							seoUrl: "www.swiggy.com",
							pageType: "FOOD_HOME_PAGE",
							businessLine: "FOOD",
						},
						pageContext: {
							citySlug: "chhindwara",
							cityName: "Chhindwara",
							pageType: "FOOD_HOME_PAGE",
						},
					},
				},
			},
		],
		firstOffsetRequest: true,
		cacheExpiryTime: 240,
		nextFetch: 1,
	},
	tid: "ea730dc6-7af3-43c2-b22f-83c9bf90ae1d",
	sid: "l4mc1a7d-f5fa-43ab-954a-d88774194c66",
	deviceId: "4c704abf-6285-11ec-da72-3f40f8182bca",
	csrfToken: "TsrSou8T0iHB-RZkPxasu4N1N3OYWbnPt4YhXnT0",
};

export default restaurantList;
