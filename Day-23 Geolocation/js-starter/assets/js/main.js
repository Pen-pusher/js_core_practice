import '../stylesheets/style.scss';
var currentLat;
var currentLng;
var findLoc = document.getElementById("findLocation");
findLoc.addEventListener('click', () => navigator.geolocation.getCurrentPosition(locationFinder));


function locationFinder(p){
  currentLat = p.coords.latitude;
  currentLng = p.coords.longitude;
  lat.innerHTML = `Latitude: ${currentLat}`;
  lng.innerHTML = `Longitute: ${currentLng}`;
}
function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}