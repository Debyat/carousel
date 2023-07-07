let displayGoogle = true, displayYelp = true, displayFacebook = true, googleRatings = 0.0;

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const tabBtns = document.querySelectorAll(".btns button");

let type = [];

let displayTabs = [
    {
        'label': 'google',
        'display': displayGoogle,
    },
    {
        'label': 'facebook',
        'display': displayFacebook,
    },
    {
        'label': 'yelp',
        'display': displayYelp,
    }
];

let all = [
    {
        'name': 'Brian Salo',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor.',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Marissa Dumayac',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Julcarl Selma',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Joe John Ferrolino',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Fel Reind Entica',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Nigel dela Riarte',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Ret Karlo Ferrolino',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Daniel Cisneros',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Harvey Aparece',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Joey Destacamento',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Ericka Jane Quitorio',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
];

async function getGoogleReviews() {
    await fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLV2HitsliYgRDP-cgzHt1CI&fields=name,rating,reviews&key=AIzaSyAHRcJ3LBuRPcnoOmx-VfjemwiBPs3UE7M', {
        method: 'GET',
        mode: 'cors',
    })
        .then(response => response.json())
        .then(response => {
            googleRatings = response.result.rating
            all = response.result.reviews.map(res => {
                return {
                    'name': res.author_name,
                    'profile_pic': res.profile_photo_url,
                    'rating': res.rating,
                    'comment': res.text,
                    'date': res.time,
                    'profile_link': res.author_url,
                    'type': 'google'
                }
            })
        })
        .catch(err => console.error(err));
}

async function getYelpReviews() {
    await fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/xaDEiJ0N0SYOv-u0JXBSNQ/reviews?limit=20&sort_by=yelp_sort', {
        method: 'GET',
        mode: 'cors',
        headers: {
            "accept": 'application/json',
            "Authorization": 'Bearer yugTEZuzyqh5VDh7lDWNtqy9mLmi3-W5lgXTjf45a_8_6cswDP0UOoKInNaRM0ckn8rFEhtnME0MvRQ-gParjtflvsovNDswGuUnapmL8h1RHU9evUIZDNYG-xamZHYx',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": "true",
        }
    })
        .then(response => response.json())
        .then(response => {
            response.reviews.forEach(res => {
                let ap = {
                    'name': res.user.name,
                    'profile_pic': res.user.image_url,
                    'rating': res.rating,
                    'comment': res.text,
                    'date': res.time_created,
                    'profile_link': res.profile_url,
                    'type': 'yelp'
                }
                all.push(ap)
            })
        })
        .catch(err => console.error(err));
}

function addFacebook() {
    let insert = [
        {
            'name': 'Philip Bautista',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'John Dave Paciño',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'Kerwien Bengil',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'Joshua Avenido',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'Edward Trisana',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
    ]
    for (i = 0; i < insert.length; i++) {

        all.push(insert[i]);
    }

}

// Display tabs
displayTabs.forEach(tab => {
    if (tab.display) {
        document.querySelector(`#${tab.label}`).style.display = 'block';
    }
})

// Add event listeners for the tab buttons to filter the display of cards
tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.innerHTML = '';
        displayCards(btn.id)
    });
});

// Get the posted Date
function getDate(postedDate) {
    posted_date = new Date(postedDate);
    current_date = new Date();

    var milli_secs = posted_date.getTime() - current_date.getTime();

    // Convert the milli seconds to Days 
    var days = milli_secs / (1000 * 3600 * 24);

    return Math.round(Math.abs(days));
}



// Display the cards in the ul element
function displayCards(display) {
    let visibles = 0;

    all.forEach(content => {
        let stars = '';

        for (var i = 0; i < content.rating; i++) {
            stars += `<svg class="star" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3796_102578)">
                            <path
                                d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                                fill="#ffb400"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_3796_102578">
                                <rect width="14" height="14" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>`
        }

        if (display == 'all') {
            displayTabs.forEach(tab => {
                if (tab.label == content.type && tab.display) {
                    visibles++;
                    // carousel.innerHTML += `<li class="card">
                    //                         <div class="img"><img src="${content.profile_pic}" draggable="false"></div>
                    //                         <h2>${content.name}</h2>
                    //                         <div class="rating-stars">${stars}</div>
                    //                         <span>${content.date}</span>
                    //                         <span>${content.comment}</span>
                    //                         <span>${content.type}</span>
                    //                         </li>`;

                    carousel.innerHTML += `<li class="card">
                                            <div class="content">
                                                <div class="review-image-date-wrapper">
                                                    <img class="review-image" src="${content.profile_pic}">
                                                    <div class="review-name-wrapper">
                                                        <p class="review-name">${content.name}</p>
                                                        <p class="review-date">8 days ago</p>
                                                    </div>
                                                </div>
                                                <div class="star-wrapper">
                                                    ${stars}
                                                </div>
                                                <div class="review-content toggle-content" id="contentText">
                                                    ${content.comment}
                                                </div>
                                                <p class="readmore">Read more</p>
                                                <div class="posted-on-wrapper">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            class="injected-svg"
                                                            data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path fill="#2A84FC"
                                                                d="M21.579 12.234c0-.677-.055-1.359-.172-2.025h-9.403v3.839h5.384a4.615 4.615 0 0 1-1.992 3.029v2.49h3.212c1.886-1.736 2.97-4.3 2.97-7.333Z">
                                                            </path>
                                                            <path fill="#00AC47"
                                                                d="M12.004 21.974c2.688 0 4.956-.882 6.608-2.406l-3.213-2.491c-.893.608-2.047.952-3.392.952-2.6 0-4.806-1.754-5.597-4.113H3.095v2.567a9.97 9.97 0 0 0 8.909 5.491Z">
                                                            </path>
                                                            <path fill="#FFBA00"
                                                                d="M6.407 13.916a5.971 5.971 0 0 1 0-3.817V7.531H3.095a9.977 9.977 0 0 0 0 8.953l3.312-2.568Z">
                                                            </path>
                                                            <path fill="#FC2C25"
                                                                d="M12.004 5.982a5.417 5.417 0 0 1 3.824 1.494l2.846-2.846a9.581 9.581 0 0 0-6.67-2.593A9.967 9.967 0 0 0 3.095 7.53l3.312 2.57c.787-2.363 2.996-4.117 5.597-4.117Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p class="posted-on-text">Posted on</p>
                                                        <a href="#" class="where-is-it-posted">${content.type}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>`;
                }
            });
        } else {
            if (content.type == display) {
                visibles++;
                carousel.innerHTML += `<li class="card">
                                            <div class="content">
                                                <div class="review-image-date-wrapper">
                                                    <img class="review-image" src="${content.profile_pic}">
                                                    <div class="review-name-wrapper">
                                                        <p class="review-name">${content.name}</p>
                                                        <p class="review-date">8 days ago</p>
                                                    </div>
                                                </div>
                                                <div class="star-wrapper">
                                                    ${stars}
                                                </div>
                                                <div class="review-content toggle-content" id="contentText">
                                                    ${content.comment}
                                                </div>
                                                <p class="readmore">Read more</p>
                                                <div class="posted-on-wrapper">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            class="injected-svg"
                                                            data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path fill="#2A84FC"
                                                                d="M21.579 12.234c0-.677-.055-1.359-.172-2.025h-9.403v3.839h5.384a4.615 4.615 0 0 1-1.992 3.029v2.49h3.212c1.886-1.736 2.97-4.3 2.97-7.333Z">
                                                            </path>
                                                            <path fill="#00AC47"
                                                                d="M12.004 21.974c2.688 0 4.956-.882 6.608-2.406l-3.213-2.491c-.893.608-2.047.952-3.392.952-2.6 0-4.806-1.754-5.597-4.113H3.095v2.567a9.97 9.97 0 0 0 8.909 5.491Z">
                                                            </path>
                                                            <path fill="#FFBA00"
                                                                d="M6.407 13.916a5.971 5.971 0 0 1 0-3.817V7.531H3.095a9.977 9.977 0 0 0 0 8.953l3.312-2.568Z">
                                                            </path>
                                                            <path fill="#FC2C25"
                                                                d="M12.004 5.982a5.417 5.417 0 0 1 3.824 1.494l2.846-2.846a9.581 9.581 0 0 0-6.67-2.593A9.967 9.967 0 0 0 3.095 7.53l3.312 2.57c.787-2.363 2.996-4.117 5.597-4.117Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p class="posted-on-text">Posted on</p>
                                                        <a href="#" class="where-is-it-posted">${content.type}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>`;
            }
        }
    });

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildrens = [...carousel.children];

    duplicate(firstCardWidth, carouselChildrens, visibles);

    const readmore = document.querySelectorAll('p.readmore');

    readmore.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.innerHTML == 'Hide') {
                btn.innerHTML = 'Read more'
                btn.parentNode.querySelector('.review-content').classList.add('toggle-content')
            } else {
                btn.innerHTML = 'Hide';
                btn.parentNode.querySelector('.toggle-content').classList.remove('toggle-content')
            }
        });
    });

    var contentHeight = document.getElementById("contentText").offsetHeight;;
    console.log(contentHeight);
}

function displayArrowBtns() {
    document.querySelector('#right').style.display = 'block'
    document.querySelector('#left').style.display = 'block'
}

function hideArrowBtns() {
    document.querySelector('#right').style.display = 'none'
    document.querySelector('#left').style.display = 'none'
}

function duplicate(firstCardWidth, carouselChildrens, visibles) {
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    if (visibles > cardPerView) {
        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        displayArrowBtns()
    } else {
        hideArrowBtns()
    }
}


async function main() {

    // await getGoogleReviews();
    // await getYelpReviews();
    addFacebook()

    displayCards('all')

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        // if (!wrapper.matches(":hover")) autoPlay();
    }

    // const autoPlay = () => {
    //     if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    //     // Autoplay the carousel after every 2500 ms
    //     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    // }
    // autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    // wrapper.addEventListener("mouseleave", autoPlay);
}


// Calling the method
main()


