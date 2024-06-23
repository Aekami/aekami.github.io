
import tilesInfos from "../Json/tileInfos.js";

    function copyToClipboard(textToCopy = "Copied text was empty."){
        navigator.clipboard.writeText(textToCopy); 
    }
    function copyColorToClipboard() {
        let colorCode = this.textContent;
        copyToClipboard(colorCode);

        // Add a class to trigger the animation
        this.classList.add("clicked");

        // Remove the class after the animation ends
            setTimeout(() => {
            this.classList.remove("clicked");
        }, 300); // Duration of the animation in milliseconds
    }
    
    // Dynamically create tiles based on tilesInfos
    function createTiles() {
        let tilesContainer = document.querySelector(".tilesContainer");
        let fragment = document.createDocumentFragment();

        tilesInfos.forEach(tileInfo => {
            // Create a new tile container
            let newTileContainer = document.createElement("div");
            newTileContainer.classList.add("tileContainer");
            
            // Create the actual tile and change its background color
            let newTile = document.createElement("div");
            newTile.classList.add("tile");
            let SanitizedColorCode = DOMPurify.sanitize(tileInfo.colorCode); // TODO safe
            newTile.style.backgroundColor=`#${SanitizedColorCode}`;
            // newTile.style.backgroundColor=`#${tileInfo.colorCode}`;

            // Create and add the title
            let newTileTitle = document.createElement("div");
            newTileTitle.classList.add("tile-title");
            
            // let Sanitizedtitle = DOMPurify.sanitize(tileInfo.title); //
            let Sanitizedtitle = tileInfo.title; // TODO Safe
            console.log(Sanitizedtitle);
            // newTileTitle.append(`${tileInfo.title}`)
            newTileTitle.append(`${Sanitizedtitle}`)

            // Create and add the color code area
            let newTileColorcode = document.createElement("div");
            newTileColorcode.classList.add("tile-color-code");
            let SanitizedColor = DOMPurify.sanitize(tileInfo.colorCode);
            newTileColorcode.append(`${SanitizedColor}`);
            // newTileColorcode.append(`${tileInfo.colorCode}`);
            newTileColorcode.addEventListener("click", copyColorToClipboard);

            // Append children to their respective parents
            newTile.appendChild(newTileTitle);
            newTile.appendChild(newTileColorcode);
            newTileContainer.appendChild(newTile);
            
            fragment.appendChild(newTileContainer);
        });
        tilesContainer.appendChild(fragment);
    }
    // And finally call the function to create the tiles
    createTiles();
