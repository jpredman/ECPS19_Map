var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2019_Municipal_Runoff_1 = new ol.format.GeoJSON();
var features_2019_Municipal_Runoff_1 = format_2019_Municipal_Runoff_1.readFeatures(json_2019_Municipal_Runoff_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_Municipal_Runoff_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_Municipal_Runoff_1.addFeatures(features_2019_Municipal_Runoff_1);
var lyr_2019_Municipal_Runoff_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_Municipal_Runoff_1, 
                style: style_2019_Municipal_Runoff_1,
                interactive: true,
    title: '2019_Municipal_Runoff<br />\
    <img src="styles/legend/2019_Municipal_Runoff_1_0.png" /> 25% - 31%<br />\
    <img src="styles/legend/2019_Municipal_Runoff_1_1.png" /> 31% - 37%<br />\
    <img src="styles/legend/2019_Municipal_Runoff_1_2.png" /> 37% - 44%<br />\
    <img src="styles/legend/2019_Municipal_Runoff_1_3.png" /> 44% - 50%<br />\
    <img src="styles/legend/2019_Municipal_Runoff_1_4.png" /> 50% - 62%<br />'
        });
var format_2019_Municipal_General_2 = new ol.format.GeoJSON();
var features_2019_Municipal_General_2 = format_2019_Municipal_General_2.readFeatures(json_2019_Municipal_General_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_Municipal_General_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_Municipal_General_2.addFeatures(features_2019_Municipal_General_2);
var lyr_2019_Municipal_General_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_Municipal_General_2, 
                style: style_2019_Municipal_General_2,
                interactive: true,
    title: '2019_Municipal_General<br />\
    <img src="styles/legend/2019_Municipal_General_2_0.png" /> 27% - 34%<br />\
    <img src="styles/legend/2019_Municipal_General_2_1.png" /> 34% - 395<br />\
    <img src="styles/legend/2019_Municipal_General_2_2.png" /> 39% - 46%<br />\
    <img src="styles/legend/2019_Municipal_General_2_3.png" /> 46% - 54%<br />\
    <img src="styles/legend/2019_Municipal_General_2_4.png" /> 54% - 67%<br />'
        });
var format_2022_General_Election_3 = new ol.format.GeoJSON();
var features_2022_General_Election_3 = format_2022_General_Election_3.readFeatures(json_2022_General_Election_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_General_Election_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_General_Election_3.addFeatures(features_2022_General_Election_3);
var lyr_2022_General_Election_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_General_Election_3, 
                style: style_2022_General_Election_3,
                interactive: true,
    title: '2022_General_Election<br />\
    <img src="styles/legend/2022_General_Election_3_0.png" /> 9% - 20%<br />\
    <img src="styles/legend/2022_General_Election_3_1.png" /> 20% - 26%<br />\
    <img src="styles/legend/2022_General_Election_3_2.png" /> 26% - 32%<br />\
    <img src="styles/legend/2022_General_Election_3_3.png" /> 32% - 38%<br />\
    <img src="styles/legend/2022_General_Election_3_4.png" /> 38% - 44%<br />'
        });
var format_Police_Districts_4 = new ol.format.GeoJSON();
var features_Police_Districts_4 = format_Police_Districts_4.readFeatures(json_Police_Districts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Police_Districts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police_Districts_4.addFeatures(features_Police_Districts_4);
var lyr_Police_Districts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Police_Districts_4, 
                style: style_Police_Districts_4,
                interactive: false,
                title: '<img src="styles/legend/Police_Districts_4.png" /> Police_Districts'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2019_Municipal_Runoff_1.setVisible(true);lyr_2019_Municipal_General_2.setVisible(true);lyr_2022_General_Election_3.setVisible(true);lyr_Police_Districts_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2019_Municipal_Runoff_1,lyr_2019_Municipal_General_2,lyr_2022_General_Election_3,lyr_Police_Districts_4];
lyr_2019_Municipal_Runoff_1.set('fieldAliases', {'id': 'id', 'shape_area': 'shape_area', 'precinct': 'precinct', 'ward': 'ward', 'full_text': 'full_text', 'shape_len': 'shape_len', 'Register Voters': 'Register Voters', 'Ballots Cast': 'Ballots Cast', 'Turnout %': 'Turnout %', });
lyr_2019_Municipal_General_2.set('fieldAliases', {'id': 'id', 'shape_area': 'shape_area', 'precinct': 'precinct', 'ward': 'ward', 'full_text': 'full_text', 'shape_len': 'shape_len', 'Register Voters': 'Register Voters', 'Ballots Cast': 'Ballots Cast', 'Turnout %': 'Turnout %', });
lyr_2022_General_Election_3.set('fieldAliases', {'id': 'id', 'shape_area': 'shape_area', 'precinct': 'precinct', 'ward': 'ward', 'full_text': 'full_text', 'shape_len': 'shape_len', 'Register Voters': 'Register Voters', 'Ballots Cast': 'Ballots Cast', 'Turnout %': 'Turnout %', });
lyr_Police_Districts_4.set('fieldAliases', {'id': 'id', 'dist_label': 'dist_label', 'dist_num': 'dist_num', });
lyr_2019_Municipal_Runoff_1.set('fieldImages', {'id': 'Range', 'shape_area': 'TextEdit', 'precinct': 'TextEdit', 'ward': 'TextEdit', 'full_text': 'TextEdit', 'shape_len': 'TextEdit', 'Register Voters': 'TextEdit', 'Ballots Cast': 'TextEdit', 'Turnout %': 'TextEdit', });
lyr_2019_Municipal_General_2.set('fieldImages', {'id': 'Range', 'shape_area': 'TextEdit', 'precinct': 'TextEdit', 'ward': 'TextEdit', 'full_text': 'TextEdit', 'shape_len': 'TextEdit', 'Register Voters': 'TextEdit', 'Ballots Cast': 'TextEdit', 'Turnout %': 'TextEdit', });
lyr_2022_General_Election_3.set('fieldImages', {'id': 'Range', 'shape_area': 'TextEdit', 'precinct': 'TextEdit', 'ward': 'TextEdit', 'full_text': 'TextEdit', 'shape_len': 'TextEdit', 'Register Voters': 'TextEdit', 'Ballots Cast': 'TextEdit', 'Turnout %': 'TextEdit', });
lyr_Police_Districts_4.set('fieldImages', {'id': 'TextEdit', 'dist_label': 'TextEdit', 'dist_num': 'TextEdit', });
lyr_2019_Municipal_Runoff_1.set('fieldLabels', {'id': 'no label', 'shape_area': 'no label', 'precinct': 'inline label', 'ward': 'no label', 'full_text': 'no label', 'shape_len': 'no label', 'Register Voters': 'no label', 'Ballots Cast': 'no label', 'Turnout %': 'inline label', });
lyr_2019_Municipal_General_2.set('fieldLabels', {'id': 'no label', 'shape_area': 'no label', 'precinct': 'inline label', 'ward': 'no label', 'full_text': 'no label', 'shape_len': 'no label', 'Register Voters': 'no label', 'Ballots Cast': 'no label', 'Turnout %': 'inline label', });
lyr_2022_General_Election_3.set('fieldLabels', {'id': 'no label', 'shape_area': 'no label', 'precinct': 'inline label', 'ward': 'no label', 'full_text': 'no label', 'shape_len': 'no label', 'Register Voters': 'no label', 'Ballots Cast': 'no label', 'Turnout %': 'inline label', });
lyr_Police_Districts_4.set('fieldLabels', {'id': 'no label', 'dist_label': 'no label', 'dist_num': 'no label', });
lyr_Police_Districts_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});