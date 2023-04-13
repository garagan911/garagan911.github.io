

function initMap() {
    const uluru = {lat: 34.15699508255299, lng: -118.48321951765146} 
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.15699508255299, lng: -118.48321951765146 },
    zoom: 13,
    mapId:"907d8183a80c8c8d"
    
  });
  const img = '..//img/footer/loc.svg' 
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: img,
    opacity: 0.9,
    width: '18px',
  });
}

window.initMap = initMap;