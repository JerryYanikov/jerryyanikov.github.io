const slider = document.getElementById('slider');
const pageviews = document.getElementById('views');
const price = document.getElementById('price');
const dis25 = document.getElementById('switch');

//Changing slider background depenfing on its value
slider.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb 0%, #ecf0f9 0%, #ecf0f9 100%)';

slider.addEventListener('input', function(e){
    slider.style.background = `linear-gradient(to right, #a5f3eb ${slider.value}%, #a5f3eb ${slider.value}%, #ecf0f9 0%, #ecf0f9 100%)`;
});

//Setting defaults
pageviews.innerText="10k";
price.innerHTML= 8.00;

dis25.addEventListener('click', function(e){
    if (dis25.checked == true) {
        price.innerText = (price.innerText*0.75)
    } else if (dis25.checked == false & slider.value == 0) {
        price.innerText=8;
    } else if (dis25.checked == false & slider.value > 0 & slider.value < 26) {
        price.innerText=12;
    } else if (dis25.checked == false & slider.value > 27 & slider.value < 51) {
        price.innerText=16;
    } else if (dis25.checked == false & slider.value > 52 & slider.value < 76) {
        price.innerText=24;
    } else if (dis25.checked == false & slider.value > 77) {
        price.innerText=36;
    }
});

function add25dis(){
    if (dis25.checked == true) {
        price.innerText = (price.innerText*0.75);
    }
}

slider.addEventListener('input', function(e){
    if (slider.value == 0){
        pageviews.innerText="10k";
        price.innerText=8;
        add25dis();
    } else if (slider.value > 0 & slider.value < 26) {
        pageviews.innerText="50k";
        price.innerText=12;
        add25dis();
    } else if (slider.value > 27 & slider.value < 51) {
        pageviews.innerText="100k";
        price.innerText=16;
        add25dis();
    } else if (slider.value > 52 & slider.value < 76) {
        pageviews.innerText="500k";
        price.innerText=24;
        add25dis();
    } else {
        pageviews.innerText="1M";
        price.innerText=36;
        add25dis();
    }
});

