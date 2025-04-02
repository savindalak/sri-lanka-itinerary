// Ensure initMap is accessible globally
window.initMap = function() {
    // Define map options
    var mapOptions = {
        zoom: 7,  // Adjust zoom level
        center: { lat: 7.8731, lng: 80.7718 },  // Centered on Sri Lanka
    };

    // Create the map inside the "googleMap" div
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    // List of itinerary locations
    var locations = [
        { name: "Homagama", lat: 6.8444, lng: 80.0020 },
        { name: "Monaragala", lat: 6.8720, lng: 81.3452 },
        { name: "Kandy", lat: 7.2906, lng: 80.6337 },
        { name: "Habarana", lat: 8.0270, lng: 80.7450 },
        { name: "Anuradhapura", lat: 8.3114, lng: 80.4037 },
        { name: "Dambulla", lat: 7.8600, lng: 80.6500 },
        { name: "Pinnawala", lat: 7.3006, lng: 80.4090 },
        { name: "Nuwara Eliya", lat: 6.9497, lng: 80.7891 },
        { name: "Ella", lat: 6.8667, lng: 81.0443 },
        { name: "Monaragala (27 Apr)", lat: 6.8720, lng: 81.3452 },
        { name: "Colombo", lat: 6.9271, lng: 79.8612 },
    ];

    // Loop through locations and add markers
    locations.forEach(function(location) {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });
    });
};
