
const aekamiIconUrl = "https://i.imgur.com/VePAzK3.png";

function loadNavBar() {
    let pathToNavBar;
    const baseURL =  window.location.origin;
    const currentPath = window.location.pathname;

    if (currentPath.includes('/fr/')) {
        if (currentPath.includes('/wakfu/')) {
            pathToNavBar = baseURL + '/fr//navBars/wakfu/navBar.html';
        } else {
            pathToNavBar = baseURL + '/fr/navBars/home/navBar.html';
        }
    }else if (currentPath.includes('/en/')) { 
        if (currentPath.includes('/wakfu/')) {
            pathToNavBar = baseURL + '/en/navBars/wakfu/navBar.html';
        } else {
            pathToNavBar = baseURL + '/en/navBars/home/navBar.html';
        }
    }
    else{
        pathToNavBar = baseURL + '/fr/navBars/home/navBar.html'; // the "default" navbar.
    }

    fetch(pathToNavBar)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching navBar.'); // console.log(response);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('.navBar');
            const navContainer = document.querySelector('.nav');
            navContainer.appendChild(navbar);

            if (currentPath.includes('/fr/')) {
                if (currentPath.includes('/wakfu/stuffs')) {
                    loadWakfuStuffLinksFr();
                } else if (currentPath.includes('/wakfu/')) {
                    loadWakfuLinksFr();
                } else {
                    console.log("You shouldn't be here :thinking:"); // TODO : 404 ?
                }
            }else if (currentPath.includes('/en/')) {
                if (currentPath.includes('/wakfu/stuffs')) {
                    loadWakfuStuffLinksEn();
                } else if (currentPath.includes('/wakfu/')) {
                    loadWakfuLinksEn();
                } else {
                    console.log("You shouldn't be here :thinking:");
                }
            }else {
                console.log("You shouldn't be here :thinking:");
            }

            const listItems = navContainer.querySelectorAll('ul li');
            listItems.forEach(item => {
                const anchor = item.querySelector('a');
                if (anchor) {
                    item.addEventListener('click', () => {
                        window.location.href = anchor.href;
                    });
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
}

/* FR */
function loadWakfuStuffLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = aekamiIconUrl;

    const stuffLink = document.getElementById('stuffLinkFr');
    stuffLink.href = `${window.location.origin}/fr/wakfu/stuffs/avant_de_se_stuff.html`;
    
}

function loadWakfuLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = aekamiIconUrl;


    const stuffLink = document.getElementById('stuffLinkFr');
    stuffLink.href = `${window.location.origin}/fr/wakfu/stuffs/avant_de_se_stuff.html`;
 
}

/* EN */
function loadWakfuStuffLinksEn(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = aekamiIconUrl;

    const stuffLink = document.getElementById('stuffLinkEn');
    stuffLink.href = `${window.location.origin}/en/wakfu/stuffs/before_gearing_up.html`;
    
}

function loadWakfuLinksEn(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = aekamiIconUrl;

    const stuffLinkEn = document.getElementById('stuffLinkEn');
    stuffLinkEn.href = `${window.location.origin}/en/wakfu/stuffs/before_gearing_up.html`;
 
}
