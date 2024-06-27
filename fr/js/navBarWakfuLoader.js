
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
            pathToNavBar = baseURL + '/fr/navBars/wakfu/navBar.html'; // TODO edit with /en/ version of it whenever it will be added
        } else {
            pathToNavBar = baseURL + '/fr/navBars/home/navBar.html'; // TODO edit with /en/ version of it whenever it will be added
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
                    // loadWakfuStuffLinksEn(); // TODO
                } else if (currentPath.includes('/wakfu/')) {
                    // loadWakfuLinksEn(); // TODO
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

function loadWakfuStuffLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;

    const stuffLink = document.getElementById('stuffLink');
    stuffLink.href = `${window.location.origin}/fr/wakfu/stuffs/avant_de_se_stuff.html`;
    
}

function loadWakfuLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;

    const stuffLink = document.getElementById('stuffLink');
    stuffLink.href = `${window.location.origin}/fr/wakfu/stuffs/avant_de_se_stuff.html`;
 
}
