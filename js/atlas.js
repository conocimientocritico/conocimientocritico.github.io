// Funciones y datos comunes del atlas

console.log ('Iniciando scripts de Atlas...');

function init_scale_options () {
    return {
        position: 'bottomleft',
        maxWidth: 200,
        metric: true,
        imperial: false,
        updateWhenIdle: false 
    };
}

function init_zoom_options () {
    return {
        position: 'bottomleft',
        zoomInTitle: 'Ampliar',
        zoomOutTitle: 'Reducir'
    };
}

function init_cluster_options () {
    return {
        showCoverageOnHover: false
        // ,
        // spiderfyOnMaxZoom: false
        // ,
        // disableClusteringAtZoom: false
    };
}

function init_wfstPointOptions () {
    return {
        crs: L.CRS.EPSG4326,
        showExisting: true,
        geometryField: 'geom',
        url: `http://localhost:8080/geoserver/wfs`,
        typeNS: 'test',
        typeName: 'test',
        maxFeatures: 90,
        opacity: 1,
        style: function (layer) {
          // you can use if statemt etc
          return {
            color: 'black',
            weight: 1
          }
        }
    };
}

// TODO: Hacer comprobaciones sobre _zoom
function init_map_options ( _zoom ) {
    return {
        // attributionControl: false,
        zoomControl: false,
        zoom: _zoom,
        // Con un nivel 14 minimizaríamos los errores 503 del servidor, pero no los eliminamos (p.e. suroeste de Linares en nivel 15)
        maxZoom: 17,
        minZoom: 5,
        zoomDelta: 0.5,
        zoomSnap: 0.5,
        zooms: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17]
      };
}

function init_attribution_options () {
    return {
        prefix: 'Leaflet.',
        position: 'bottomright'
      };
}

// TODO: ¿Podría/debería implementar aquí las diferentes búsquedas? Títulos, etiquetas, ...
function init_search_options ( _layer ) {
    return {
        container: 'findbox',
        layer: _layer,
        initial: false,
        collapsed: false,
        textErr: 'No se ha podido encontrar ningún mapa',
        textCancel: 'Cancelar',
        textPlaceholder: 'p.e. Maquetación',
        propertyName: 'title',
        zoom: 16
    };
}
