var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Populationdensity_1 = new ol.format.GeoJSON();
var features_Populationdensity_1 = format_Populationdensity_1.readFeatures(json_Populationdensity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Populationdensity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populationdensity_1.addFeatures(features_Populationdensity_1);
var lyr_Populationdensity_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Populationdensity_1, 
                style: style_Populationdensity_1,
                interactive: true,
                title: '<img src="styles/legend/Populationdensity_1.png" /> Population density'
            });
var format_Ratioofhospitalstopopulation_2 = new ol.format.GeoJSON();
var features_Ratioofhospitalstopopulation_2 = format_Ratioofhospitalstopopulation_2.readFeatures(json_Ratioofhospitalstopopulation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ratioofhospitalstopopulation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ratioofhospitalstopopulation_2.addFeatures(features_Ratioofhospitalstopopulation_2);
var lyr_Ratioofhospitalstopopulation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ratioofhospitalstopopulation_2, 
                style: style_Ratioofhospitalstopopulation_2,
                interactive: true,
                title: '<img src="styles/legend/Ratioofhospitalstopopulation_2.png" /> Ratio of hospitals to population '
            });
var format_Confirmednumberofcases_3 = new ol.format.GeoJSON();
var features_Confirmednumberofcases_3 = format_Confirmednumberofcases_3.readFeatures(json_Confirmednumberofcases_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confirmednumberofcases_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confirmednumberofcases_3.addFeatures(features_Confirmednumberofcases_3);
var lyr_Confirmednumberofcases_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Confirmednumberofcases_3, 
                style: style_Confirmednumberofcases_3,
                interactive: true,
                title: '<img src="styles/legend/Confirmednumberofcases_3.png" /> Confirmed number of cases'
            });
var format_Criteriaconsideredareasfollows_4 = new ol.format.GeoJSON();
var features_Criteriaconsideredareasfollows_4 = format_Criteriaconsideredareasfollows_4.readFeatures(json_Criteriaconsideredareasfollows_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Criteriaconsideredareasfollows_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Criteriaconsideredareasfollows_4.addFeatures(features_Criteriaconsideredareasfollows_4);
var lyr_Criteriaconsideredareasfollows_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Criteriaconsideredareasfollows_4, 
                style: style_Criteriaconsideredareasfollows_4,
                interactive: true,
                title: '<img src="styles/legend/Criteriaconsideredareasfollows_4.png" /> Criteria considered are as follows'
            });
var format_Cummulativescoreofregion_5 = new ol.format.GeoJSON();
var features_Cummulativescoreofregion_5 = format_Cummulativescoreofregion_5.readFeatures(json_Cummulativescoreofregion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cummulativescoreofregion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cummulativescoreofregion_5.addFeatures(features_Cummulativescoreofregion_5);
var lyr_Cummulativescoreofregion_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cummulativescoreofregion_5, 
                style: style_Cummulativescoreofregion_5,
                interactive: true,
    title: 'Cummulative score of region<br />\
    <img src="styles/legend/Cummulativescoreofregion_5_0.png" /> 0 - 0.03<br />\
    <img src="styles/legend/Cummulativescoreofregion_5_1.png" /> 0.03 - 0.06<br />\
    <img src="styles/legend/Cummulativescoreofregion_5_2.png" /> 0.06 - 1<br />'
        });

lyr_EsriDarkGray_0.setVisible(true);lyr_Populationdensity_1.setVisible(true);lyr_Ratioofhospitalstopopulation_2.setVisible(true);lyr_Confirmednumberofcases_3.setVisible(true);lyr_Criteriaconsideredareasfollows_4.setVisible(true);lyr_Cummulativescoreofregion_5.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_Populationdensity_1,lyr_Ratioofhospitalstopopulation_2,lyr_Confirmednumberofcases_3,lyr_Criteriaconsideredareasfollows_4,lyr_Cummulativescoreofregion_5];
lyr_Populationdensity_1.set('fieldAliases', {'Id': 'Id', });
lyr_Ratioofhospitalstopopulation_2.set('fieldAliases', {'Id': 'Id', });
lyr_Confirmednumberofcases_3.set('fieldAliases', {'Id': 'Id', });
lyr_Criteriaconsideredareasfollows_4.set('fieldAliases', {'Id': 'Id', });
lyr_Cummulativescoreofregion_5.set('fieldAliases', {'State': 'State', 'District': 'District', 'Criteria_1': 'Criteria_1', 'Criteria_2': 'Criteria_2', 'Criteria_3': 'Criteria_3', 'Score': 'Score', });
lyr_Populationdensity_1.set('fieldImages', {'Id': '', });
lyr_Ratioofhospitalstopopulation_2.set('fieldImages', {'Id': '', });
lyr_Confirmednumberofcases_3.set('fieldImages', {'Id': '', });
lyr_Criteriaconsideredareasfollows_4.set('fieldImages', {'Id': '', });
lyr_Cummulativescoreofregion_5.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Criteria_1': 'TextEdit', 'Criteria_2': 'TextEdit', 'Criteria_3': 'TextEdit', 'Score': 'TextEdit', });
lyr_Populationdensity_1.set('fieldLabels', {'Id': 'no label', });
lyr_Ratioofhospitalstopopulation_2.set('fieldLabels', {'Id': 'no label', });
lyr_Confirmednumberofcases_3.set('fieldLabels', {'Id': 'no label', });
lyr_Criteriaconsideredareasfollows_4.set('fieldLabels', {'Id': 'no label', });
lyr_Cummulativescoreofregion_5.set('fieldLabels', {'State': 'inline label', 'District': 'inline label', 'Criteria_1': 'inline label', 'Criteria_2': 'inline label', 'Criteria_3': 'inline label', 'Score': 'inline label', });
lyr_Cummulativescoreofregion_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});