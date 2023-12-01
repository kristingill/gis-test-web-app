// load map
var map = L.map('map').setView([51.505, -0.09], 11);

// map box basemap
var outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/kristin-gill/clnlryzqa005101p9fypefvpa/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3Jpc3Rpbi1naWxsIiwiYSI6ImNsbmxzMjg5MDAyOHMybHI3aHByOTBvMmIifQ.hGwNkAhnIjwSRxMGo92e3g', {
    maxZoom: 19,
    attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/outdoors-v12',
})

// esri basemaps
var gray = L.esri.Vector.vectorBasemapLayer("ArcGIS:DarkGray", { apiKey: esriApiKey });
var topographic = L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic", { apiKey: esriApiKey });
var imagery = L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", { apiKey: esriApiKey });

// basemap gallery
var baseMaps = {
    "Topographic": topographic,
    "Outdoors": outdoors,
    "Dark Gray": gray,
    "Imagery": imagery
};

// add the main basemap to the map
topographic.addTo(map);

// add the basemap gallery to the map
L.control.layers(baseMaps).addTo(map);