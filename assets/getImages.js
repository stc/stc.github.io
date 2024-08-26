const imageList = [
    ['./assets/img/dotwork.png','https://www.fxhash.xyz/generative/slug/dotwork'],
    ['./assets/img/echo.png','https://www.binaura.net/echo'],
    ['./assets/img/gr1dflow.png','https://highlight.xyz/mint/660573d2f9176ca33f52f34f'],
    ['./assets/img/iss.png','https://www.binaura.net/stc/sand-sort'],
    ['./assets/img/l-poem.png','https://www.fxhash.xyz/generative/25977'],
    ['./assets/img/m0-n0.png','https://www.fxhash.xyz/generative/slug/m0-n0'],
    ['./assets/img/proc.png','https://www.expanded.art/collections/agoston-nagy-procedural-drawings'],
    ['./assets/img/re-frame.png','https://highlight.xyz/mint/66ae4b90a963922a3a55935a'],
    ['./assets/img/tur1ng.png','https://www.fxhash.xyz/generative/slug/tur1ng']
];

function getRandomImages() {
    const randomImages = [];
    const usedIndexes = new Set();
    
    while(randomImages.length < 3) {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        if (!usedIndexes.has(randomIndex)) {
            let arr = [];
            arr.push(imageList[randomIndex][0]);
            arr.push(imageList[randomIndex][1])
            randomImages.push(arr);
            usedIndexes.add(randomIndex);
        }
    }
    return randomImages;
}

function displayImages() {
    const imageContainer = document.getElementById('image-container');
    const randomImages = getRandomImages();
    
    randomImages.forEach(imageData => {
        const anchorElement = document.createElement('a');
                anchorElement.href = imageData[1]; 
                anchorElement.target = '_self'; 

                const imgElement = document.createElement('img');
                imgElement.src = imageData[0];
                imgElement.style.width = "30%"; 
                imgElement.style.margin = "5px";  
                imgElement.style.marginBottom = "50px";  
                
                anchorElement.appendChild(imgElement);
                imageContainer.appendChild(anchorElement);
    });
}

window.onload = displayImages;