var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BaciaHidrogrficaParabadoSul_1 = new ol.format.GeoJSON();
var features_BaciaHidrogrficaParabadoSul_1 = format_BaciaHidrogrficaParabadoSul_1.readFeatures(json_BaciaHidrogrficaParabadoSul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciaHidrogrficaParabadoSul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciaHidrogrficaParabadoSul_1.addFeatures(features_BaciaHidrogrficaParabadoSul_1);
var lyr_BaciaHidrogrficaParabadoSul_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BaciaHidrogrficaParabadoSul_1, 
                style: style_BaciaHidrogrficaParabadoSul_1,
                interactive: true,
                title: '<img src="styles/legend/BaciaHidrogrficaParabadoSul_1.png" /> Bacia Hidrográfica Paraíba do Sul'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BaciaHidrogrficaParabadoSul_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BaciaHidrogrficaParabadoSul_1];
lyr_BaciaHidrogrficaParabadoSul_1.set('fieldAliases', {});
lyr_BaciaHidrogrficaParabadoSul_1.set('fieldImages', {});
lyr_BaciaHidrogrficaParabadoSul_1.set('fieldLabels', {});
lyr_BaciaHidrogrficaParabadoSul_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});