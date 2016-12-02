$(document).ready(function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiY29temVyYWRkIiwiYSI6ImxjQjFHNFUifQ.ohrYy34a8ZIZejrPSMWIww';
    var map = L.mapbox.map('map', 'mapbox.streets').setView([37.98406, 23.72979], 17);

    L.marker([37.98406, 23.72979], {
        icon: L.mapbox.marker.icon({
            'marker-color': '#000'
        })
    })
    .bindPopup('<strong>Πανεπιστημίου 64<br>7ος όροφος</strong>')
    .addTo(map);
});
