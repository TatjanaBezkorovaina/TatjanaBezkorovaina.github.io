// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 49.58975, lng: 34.55069 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// 49.58975457888412, 34.55069114604577;
