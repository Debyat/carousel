let displayGoogle = true, displayYelp = true, displayFacebook = true;

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const tabBtns = document.querySelectorAll(".btns button");

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
        'title': 'Title',
        'image': 'images/img-1.jpg',
        'span': 'Sales Manager',
        'type': 'google'
    },
    {
        'title': 'Blanche Pearson',
        'image': 'images/img-2.jpg',
        'span': 'Sales Manager2',
        'type': 'facebook'
    },
    {
        'title': 'Blanche TTT',
        'image': 'images/img-3.jpg',
        'span': 'Sales Manager 3',
        'type': 'yelp'
    },
    {
        'title': 'Blanche TTT TTTTT',
        'image': 'images/img-4.jpg',
        'span': 'Sales Manager 4',
        'type': 'google'
    },
    {
        'title': 'Blanche TTT TTTTT',
        'image': 'images/img-4.jpg',
        'span': 'Sales Manager 4',
        'type': 'google'
    },
    {
        'title': 'Blanche TTT TTTTT',
        'image': 'images/img-4.jpg',
        'span': 'Sales Manager 4',
        'type': 'google'
    }
];

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
                                            <div class="img"><img src="${content.image}" draggable="false"></div>
                                            <h2>${content.title}</h2>
                                            <span>${content.span}</span>
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
    console.log(visibles, cardPerView)
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

// Calling the method
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