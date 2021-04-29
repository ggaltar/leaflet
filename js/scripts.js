// Mapa Leaflet
var mapa = L.map('mapid').setView([10, -84], 7);

// Capa base
var osm = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
  {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(mapa);		
	
// Otra capa base
	var esri = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
  {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }
).addTo(mapa);	    


// Otra capa base	
var OpenTopoMap = L.tileLayer(
	'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 
	{
		maxZoom: 17,
		attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
	}
).addTo(mapa);	


// Otra capa base
var CartoDB_Voyager = L.tileLayer(
	'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
	{
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19
	}
).addTo(mapa);	

	
// Marcadores
liberia = L.marker([10.633333, -85.433333]);
liberia.bindTooltip("Liberia").openTooltip();
liberia.bindPopup('<h2>Liberia</h2><a href="https://es.wikipedia.org/wiki/Liberia_(Costa_Rica)">Información de Liberia</a>').openPopup();
liberia.addTo(mapa);
	
limon = L.marker([10.002216, -83.084037]);
limon.bindTooltip("Limón").openTooltip();
limon.addTo(mapa);	   
	
puntarenas = L.marker([9.966667, -84.833333]);
puntarenas.bindTooltip("Puntarenas").openTooltip();
puntarenas.addTo(mapa);	    	    

sanjose = L.marker([9.930520, -84.084949],
						  {
							icon: L.divIcon(
							  {html: '<i class="fas fa-city"></i>'}
							)
						  }
				  );
sanjose.bindTooltip("San José").openTooltip();
sanjose.bindPopup('<h2>San José</h2><a href="https://es.wikipedia.org/wiki/San_Jos%C3%A9_(Costa_Rica)">Información de San José</a><p><img src="img/chepe.jpg" alt="San Jose" height="50" width="100"></p>').openPopup();
sanjose.addTo(mapa);	    
		
// Conjunto de capas base
var mapasBase = {
	"ESRI": esri,		
	"OSM": osm,
	"Open Topo Map": OpenTopoMap,
	"CartoDB Voyager": CartoDB_Voyager
};	    
	
// Control de capas
	L.control.layers(mapasBase).addTo(mapa);	 
	
// Control de escala
    L.control.scale({position: "topright", imperial: false}).addTo(mapa);