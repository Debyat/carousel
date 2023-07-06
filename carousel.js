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
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'John Doe',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'John Doe',
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
                            'type': 'google'
                        }
                all.push(ap)
            })
        })
        .catch(err => console.error(err));
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

// Display the cards in the ul element
function displayCards(display) {
    let visibles = 0;

    all.forEach(content => {
        if (display == 'all') {
            displayTabs.forEach(tab => {
                if (tab.label == content.type && tab.display) {
                    visibles++;
                    carousel.innerHTML += `<li class="card">
                                            <div class="img"><img src="${content.profile_pic}" draggable="false"></div>
                                            <h2>${content.name}</h2>
                                            <span>${content.rating}</span>
                                            <span>${content.date}</span>
                                            <span>${content.comment}</span>
                                            <span>${content.type}</span>
                                            </li>`;
                }
            });
        } else {
            if (content.type == display) {
                visibles++;
                carousel.innerHTML += `<li class="card">
                                        <div class="img"><img src="${content.image}" draggable="false"></div>
                                        <h2>${content.title}</h2>
                                        <span>${content.span}</span>
                                        <span>${content.type}</span>
                                        </li>`;
            }
        }
    });

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildrens = [...carousel.children];

    duplicate(firstCardWidth, carouselChildrens, visibles);
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
    await getGoogleReviews(); 
    await getYelpReviews();

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
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}
    

// Calling the method
main()


