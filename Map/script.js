let map, directionsService, directionsRenderer;

function initMap() {
  // Initialize the map
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 28.6139, lng: 77.209 },
  });

  // Initialize directions services
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  // Enable autocomplete for input fields
  const startInput = document.getElementById("startLocation");
  const endInput = document.getElementById("endLocation");
  new google.maps.places.Autocomplete(startInput);
  new google.maps.places.Autocomplete(endInput);

  // Add event listeners
  document.getElementById("routeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAndDisplayRoute();
  });

  document
    .getElementById("currentLocationBtn")
    .addEventListener("click", showCurrentLocation);
}

function showCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(userLocation);
        map.setZoom(14);
        const marker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "Your Current Location",
        });

        const infoWindow = new google.maps.InfoWindow({
          content: "<h5>You are here!</h5>",
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      },
      () => {
        alert("Unable to fetch your location. Please enable location services.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

function calculateAndDisplayRoute() {
  const start = document.getElementById("startLocation").value;
  const end = document.getElementById("endLocation").value;

  if (!start || !end) {
    alert("Please enter both start and end locations.");
    return;
  }

  directionsService.route(
    {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        findNearbyPlaces(response.routes[0].overview_path);
      } else {
        alert("Could not display directions due to: " + status);
      }
    }
  );
}

function findNearbyPlaces(routePath) {
  const service = new google.maps.places.PlacesService(map);
  const types = ["lodging", "hospital", "pharmacy", "tourist_attraction"];

  routePath.forEach((point) => {
    types.forEach((type) => {
      service.nearbySearch(
        {
          location: point,
          radius: 5000, // 5 km radius
          type: type,
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach((place) => createMarker(place));
          }
        }
      );
    });
  });
}

function createMarker(place) {
  const marker = new google.maps.Marker({
    position: place.geometry.location,
    map: map,
    title: place.name,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div>
        <h5>${place.name}</h5>
        <p>${place.vicinity}</p>
        <p><strong>Rating:</strong> ${place.rating || "N/A"}</p>
        <p>${place.types.includes("tourist_attraction") ? "Hidden Place" : ""}</p>
      </div>
    `,
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

// Initialize the map
initMap();



