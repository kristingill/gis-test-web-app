// test // 
// load map
var map = L.map('map').setView([51.505, -0.09], 10);

// map box basemap
var outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/kristin-gill/clnlryzqa005101p9fypefvpa/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3Jpc3Rpbi1naWxsIiwiYSI6ImNsbmxzMjg5MDAyOHMybHI3aHByOTBvMmIifQ.hGwNkAhnIjwSRxMGo92e3g', {
    maxZoom: 19,
    attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/outdoors-v12',
})

// esri api key to access esri basemaps
esriApiKey = "AAPK67f2536cf24a483196c273b6a3cec4e54MWR-PwT2NxTRNU8lZ8vo28kbXxeyScvfww-zszzPzxIyrrvnGamB-fLC9steR2D";

// esri basemaps
var gray = L.esri.Vector.vectorBasemapLayer("ArcGIS:DarkGray", { apiKey: esriApiKey });
var topographic = L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic", { apiKey: esriApiKey });
var imagery = L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", { apiKey: esriApiKey });
var terrain = L.esri.Vector.vectorBasemapLayer("ArcGIS:Terrain", { apiKey: esriApiKey });
var oceans = L.esri.Vector.vectorBasemapLayer("ArcGIS:Oceans", { apiKey: esriApiKey });

// basemap gallery
var baseMaps = {
    "Topographic": topographic,
    "Outdoors": outdoors,
    "Dark Gray": gray,
    "Imagery": imagery,
    "Terrain": terrain,
    "Oceans": oceans
};

// add the main basemap to the map
topographic.addTo(map);

londonBoroughs = L.esri.featureLayer({
    url: 'https://services2.arcgis.com/40q5LO3kQh3qjhyV/arcgis/rest/services/London_Boroughs/FeatureServer/0',
    style: function (feature) {
        return {
            color: '#9d8df1',
            weight: 3,
            stroke: true,
            opacity: 0.8,
            fill: true,
            fillOpacity: 0.35,
            fillColor: '#b8cdf8'
        };
    }
});

// add the london boroughs layer to the map
londonBoroughs.addTo(map);

// basemap gallery
var overlays = {
    "London Boroughs": londonBoroughs,
};

// add the basemap and overlay gallery to the map
L.control.layers(baseMaps, overlays).addTo(map);

//
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('This is' + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
