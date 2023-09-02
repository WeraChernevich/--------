const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('close_pop_up');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})

ymaps.ready (init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.010765, 92.842160],
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark(
        [56.010765, 92.842160], 
        {},
        {
            iconLayout: 'default#image',
            iconImageHref:
            './img/features/geo.svg',
            iconImageSize: [74, 74],
            iconImageOffset: [-3, -42],
        }
    )

    myMap.geoObjects.add(myPlacemark);
}

function check() {
    var submit = document.getElementsByName('submit')[0];
    if (document.getElementById('politics').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
    }
  

