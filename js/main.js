// Milestone 2 - inserisco le immagini grazie all'array;
// Creo un ciclo for che concatena un template literal.
// le immagini saranno nascoste, tranne la prima che avrà una classe active che la renderà visibile;



const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

const imagesWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');

for (index = 0; index < images.length; index++) {

    const newImage = document.createElement('img');
    newImage.classList.add('img-fluid', 'd-none');

    newImage.setAttribute('src', images[index]);


    imagesWrapper.append(newImage);  



}


let imageList = document.querySelectorAll(".d-none");
    imageList[0].classList.remove('d-none')
    // imageList[0].classList.add('active')

const btnNext = document.getElementById('next-button');

    let activeIndex = 0;
 
    btnNext.addEventListener('click', function() {


        imageList[activeIndex].classList.add('d-none');

        activeIndex++;


        if (activeIndex === imageList.length){
            activeIndex = 0;
        }

        imageList[activeIndex].classList.remove('d-none');

        
    });

    const btnPrev = document.getElementById('prev-button');
 
    btnPrev.addEventListener('click', function() {


        imageList[activeIndex].classList.add('d-none');

        activeIndex--;


        if (activeIndex === -1){
            activeIndex = imageList.length -1;
        }

        imageList[activeIndex].classList.remove('d-none');

        
    });    

