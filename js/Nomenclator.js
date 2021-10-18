console.debug ( 'Cargando Nomenclator.js...' );

// Spain

// Nombres Geográficos - Nomenclátor Geográfico Básico de España
// Capabilities:http://www.ign.es/wms-inspire/ngbe?request=GetCapabilities&service=WMS
// Representación de nombres geográficos como los nombres de zonas, regiones, localidades, ciudades, periferias, poblaciones o asentamientos,
// o cualquier rasgo geográfico o topográfico de interés público o histórico procedentes del Nomenclátor Geográfico Básico de España (NGBE).
// Sus denominaciones son conformes con la Directiva Inspire 2007/2/EC así como su estilo. Además tienen asociado un estilo de visualización
// definido por el IGN. Servicio de visualización WMS 1.3.0 conforme al perfil Inspire de ISO 19128:2005.

var SPAIN_NGBE = L.tileLayer.wms('https://www.ign.es/wms-inspire/ngbe', {
    layers: 'GN.GeographicalNames',
    format: 'image/png',
    transparent: true,
    continuousWorld : true,
    attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});


// Nombres Geográficos - Nomenclator Geográfico de Andalucia WFS-INSPIRE
// Capabilities:https://www.ideandalucia.es/wfs-nga-inspire/services?request=GetCapabilities&service=WMS
// Nodo INSPIRE del Instituto de Estadística y Cartografía de Andalucía. Nodo INSPIRE del Instituto de Estadística y Cartografía de Andalucía (IECA). Junta de Andalucía. Servicio WFS-INSPIRE del Nomenclátor Geográfico de Andalucía integrado en la Infraestructura de Datos Espaciales de Andalucía siguiendo las directrices del Sistema Estadístico y Cartográfico de Andalucía (SECA). El Nomenclátor Geográfico de Andalucía (NGA) es un proyecto del IECA iniciado en 2004 con la Base de Datos de Topónimos 1:10.000 (BTA10), que contiene actualmente unos 140.500 topónimos e identificadores geográficos clasificados temáticamente en áreas administrativas, entidades de población, hidrografía, orografía, patrimonio, infraestructuras, actividades industriales, extractivas, servicios y equipamientos. Dichos topónimos han sido georreferenciados con una geometría puntual, que se puede consultar mediante distintos sistemas de referencias. Su fuente de partida es la toponimia incluida en el Mapa Topográfico de Andalucía 1:10.000 (Digital Vectorial v1:1998-2003), cartografía básica de la Comunidad Autónoma, a la que se está incorporando otras fuentes para completar y/o normalizar la toponimia de determinados tipos de entidad. El modelo de datos, basado en el Modelo de Nomenclátor de España v1.2 recomendado por el Grupo de Trabajo IDEE, ha sido adaptado en 2012 a la normativa y especificaciones INSPIRE sobre nombres geográficos. El NGA es un registro dinámico en continua actualización puesto a disposición del SECA y de la sociedad a través de varios servicios web sincronizados de carácter público y gratuito: el Buscador de Nombres Geográficos y los Servicios interoperables de nomenclátor WFS y WFS-INSPIRE. Su finalidad es la de servir de referencia normalizada de la toponimia de Andalucía. 

var ANDALUCIA_NGA_INSPIRE = L.tileLayer.wms('https://www.ideandalucia.es/wfs-nga-inspire/services', {
    layers: 'GN.NamedPlace',
    format: 'image/png',
    transparent: true,
    continuousWorld : true,
    attribution: '© <a href="http://www.juntadeandalucia.es/institutodeestadisticaycartografia" target="_blank">Instituto de Estadística y Cartografía de Andalucía</a>'
});


// Nombres Geográficos - Nomenclator Geográfico de Andalucia WFS
// Capabilities:https://www.ideandalucia.es/wfs-nga/services?request=GetCapabilities&service=WFS
// Nodo del Instituto de Estadística y Cartografía de Andalucía. Junta de Andalucía. Servicio WFS del Nomenclátor Geográfico de Andalucía. Integrado en la Infraestructura de Datos Espaciales de Andalucía siguiendo las directrices del Sistema Cartográfico de Andalucía. El Nomenclátor Geográfico de Andalucía, es un proyecto del Instituto de Estadística y Cartografía de Andalucía, iniciado en 2004 con la Base de Datos de Topónimos 1:10.000 (BTA10), que contiene actualmente unos 140.500 topónimos e identificadores geográficos clasificados temáticamente en áreas administrativas, entidades de población, hidrografía, orografía, patrimonio, infraestructuras, actividades industriales, extractivas, servicios y equipamientos. Dichos topónimos han sido georreferenciados con una geometría puntual, conteniendo unas 190.000 localizaciones: se ofrece un punto por cada municipio y hoja a escala 1:10.000 en los que se encuentra o extiende la entidad geográfica, mediante coordenadas X e Y, huso 30 en el Sistema de Referencia Terrestre Europeo 1989 (EPSG: 25830). Su fuente de partida es la toponimia incluida en el Mapa Topográfico de Andalucía 1:10.000 (Digital Vectorial v1:1998-2003), cartografía básica de la Comunidad Autónoma, aunque a corto y medio plazo se están incorporando o está prevista la incorporación de otras fuentes para completar y/o normalizar la toponimia de determinados tipos de entidad. El modelo de datos adoptado sigue el Modelo de Nomenclátor de España recomendado por el Grupo de Trabajo IDEE. Se ha creado y almacenado en formato SIG. Su finalidad es la de servir de referencia normalizada de la toponimia de Andalucía.

// var ANDALUCIA_NGA = L.WFST({
//     url: 'https://www.ideandalucia.es/wfs-nga/services',
//     typeNS: 'app',
//     typeName: 'Entidad',
//     // crs: L.CRS.EPSG4326,
//     crs: L.CRS.EPSG25830,
//     style: {
//         color: 'blue',
//         weight: 2
//     }
// });

console.debug ( 'Nomenclator.js cargado...' );
