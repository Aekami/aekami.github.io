
function loadNavBar() {

    const baseURL =  window.location.origin;
    
    fetch(baseURL + '/navBars/home/navBar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching navBar.');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('.navBar');
            document.querySelector('.nav').appendChild(navbar);

            if (currentPath.includes('/wakfu/')) {
                pathToNavBar = baseURL + '/navBars/wakfu/navBar.html';
            } else {
                pathToNavBar = baseURL + '/navBars/home/navBar.html';
                loadWakfuLinks();
            }


        })
        .catch(error => console.error('Error loading navbar:', error));
}

// TODO refactor, should be oblivious to whatver the actual html is. Move to the html navBar file itself.
function loadWakfuLinks(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.href = `${window.location.origin}/images/aekami_elio.png`;

    const colorPicker = document.getElementById('colorPickerLink');
    colorPicker.href = `${window.location.origin}/pages/colorPicker.html`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/wakfu/wakfu-home.html`;

    const aboutLink = document.getElementById('aboutLink');
    aboutLink.href = `${window.location.origin}/pages/about.html`;
}
    