const imageList = [
    ['./assets/img/dotwork.png', 'https://www.fxhash.xyz/generative/slug/dotwork','dotwork'],
    ['./assets/img/echo.png', 'https://www.binaura.net/echo','echo'],
    ['./assets/img/gr1dflow.png', 'https://highlight.xyz/mint/660573d2f9176ca33f52f34f','gr1dflow'],
    ['./assets/img/iss.png', 'https://www.binaura.net/stc/sand-sort','infinite sand sorter'],
    ['./assets/img/l-poem.png', 'https://www.fxhash.xyz/generative/25977','L-Poem'],
    ['./assets/img/m0-n0.png', 'https://www.fxhash.xyz/generative/slug/m0-n0','m0-n0'],
    ['./assets/img/proc.png', 'https://www.expanded.art/collections/agoston-nagy-procedural-drawings','Procedural Drawings'],
    ['./assets/img/re-frame.png', 'https://highlight.xyz/mint/66ae4b90a963922a3a55935a','re-frame'],
    ['./assets/img/tur1ng.png', 'https://www.fxhash.xyz/generative/slug/tur1ng','tur1ng']
];

function getRandomImages() {
    const randomImages = [];
    const usedIndexes = new Set();

    while (randomImages.length < 3) {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        if (!usedIndexes.has(randomIndex)) {
            let arr = [];
            arr.push(imageList[randomIndex][0]);
            arr.push(imageList[randomIndex][1]);
            arr.push(imageList[randomIndex][2]);
            randomImages.push(arr);
            usedIndexes.add(randomIndex);
        }
    }
    return randomImages;
}

function displayImages() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    const randomImages = getRandomImages();

    randomImages.forEach(imageData => {
    
        const imgElement = document.createElement('img');
        imgElement.src = imageData[0];
        imgElement.style.width = "100%";
        imgElement.style.marginTop = "0px";
        imgElement.style.marginLeft = "0px";
        imgElement.style.marginRight = "0px";
        imgElement.style.marginBottom = "0px";

        const divElement = document.createElement('div');
        divElement.className = "divElement";
        divElement.style.width = "30%";
        divElement.style.backgroundColor = "#dddddd"
        divElement.style.marginTop = "0px";
        divElement.style.marginLeft = "0px";
        divElement.style.marginRight = "10px";
        divElement.style.marginBottom = "10px";
        
        const anchorElement = document.createElement('a');
        anchorElement.href = imageData[1];
        anchorElement.target = '_self';
        
        divElement.appendChild(imgElement);
        const overlayElement = document.createElement('div');
        overlayElement.className = "overlay";
        //overlayElement.innerHTML = imageData[2];
        anchorElement.appendChild(overlayElement);
        divElement.appendChild(anchorElement);
        imageContainer.appendChild(divElement);
    });
}

window.onload = displayImages;