// Initialize and add the map
let map, infoWindow;

/**
 * Initializes the map and adds it to the page.
 */

async function initMap() {
  // The location of Puno
  const position = { lat: -15.840008347211091, lng: -70.02289647126824 };


  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Puno
  map = new Map(document.getElementById("map"), {
    zoom: 14, // Set the initial zoom level
    center: position, // Set the initial center of the map
    mapId: "MAP_SPD", // Set the map ID
    mapTypeControl: false, // Hide the map type control
    fullscreenControl: false, // Hide the fullscreen control
    streetViewControl: false, // Hide the street view control
  });

  // Add the current location to the map
  addCurrentLocation(map);
}

// Call the initMap function to initialize the map
initMap();
