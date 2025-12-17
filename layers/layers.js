var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Boundary_1 = new ol.format.GeoJSON();
var features_Boundary_1 = format_Boundary_1.readFeatures(json_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1.addFeatures(features_Boundary_1);
var lyr_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1, 
                style: style_Boundary_1,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_1.png" /> Boundary'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Boundary_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Boundary_1];
lyr_Boundary_1.set('fieldAliases', {'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Bgy_Name': 'Bgy_Name', });
lyr_Boundary_1.set('fieldImages', {'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Bgy_Name': 'TextEdit', });
lyr_Boundary_1.set('fieldLabels', {'Pro_Name': 'inline label - always visible', 'Mun_Name': 'inline label - always visible', 'Bgy_Name': 'inline label - always visible', });
lyr_Boundary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});