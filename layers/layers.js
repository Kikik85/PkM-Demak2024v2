ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([396664.702115, 9204390.416962, 531499.264122, 9269753.766466]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_TitikWawancara_1 = new ol.format.GeoJSON();
var features_TitikWawancara_1 = format_TitikWawancara_1.readFeatures(json_TitikWawancara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TitikWawancara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikWawancara_1.addFeatures(features_TitikWawancara_1);
var lyr_TitikWawancara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikWawancara_1, 
                style: style_TitikWawancara_1,
                popuplayertitle: 'Titik Wawancara',
                interactive: true,
                title: '<img src="styles/legend/TitikWawancara_1.png" /> Titik Wawancara'
            });
var format_BatasAdministrasiDesa_2 = new ol.format.GeoJSON();
var features_BatasAdministrasiDesa_2 = format_BatasAdministrasiDesa_2.readFeatures(json_BatasAdministrasiDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdministrasiDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiDesa_2.addFeatures(features_BatasAdministrasiDesa_2);
var lyr_BatasAdministrasiDesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiDesa_2, 
                style: style_BatasAdministrasiDesa_2,
                popuplayertitle: 'Batas Administrasi Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiDesa_2.png" /> Batas Administrasi Desa'
            });
var format_DaerahFotoUdara_3 = new ol.format.GeoJSON();
var features_DaerahFotoUdara_3 = format_DaerahFotoUdara_3.readFeatures(json_DaerahFotoUdara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DaerahFotoUdara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahFotoUdara_3.addFeatures(features_DaerahFotoUdara_3);
var lyr_DaerahFotoUdara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaerahFotoUdara_3, 
                style: style_DaerahFotoUdara_3,
                popuplayertitle: 'Daerah Foto Udara',
                interactive: true,
                title: '<img src="styles/legend/DaerahFotoUdara_3.png" /> Daerah Foto Udara'
            });
var lyr_DigitalTerrainModelmdiataselipsoid_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Digital Terrain Model (m) di atas elipsoid',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/DigitalTerrainModelmdiataselipsoid_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12314164.614812, -772005.858850, 12319291.168321, -766871.605912]
                            })
                        });
var format_GCP_5 = new ol.format.GeoJSON();
var features_GCP_5 = format_GCP_5.readFeatures(json_GCP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_GCP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCP_5.addFeatures(features_GCP_5);
var lyr_GCP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCP_5, 
                style: style_GCP_5,
                popuplayertitle: 'GCP',
                interactive: true,
                title: '<img src="styles/legend/GCP_5.png" /> GCP'
            });
var format_ICP_6 = new ol.format.GeoJSON();
var features_ICP_6 = format_ICP_6.readFeatures(json_ICP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ICP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICP_6.addFeatures(features_ICP_6);
var lyr_ICP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICP_6, 
                style: style_ICP_6,
                popuplayertitle: 'ICP',
                interactive: true,
                title: '<img src="styles/legend/ICP_6.png" /> ICP'
            });
var lyr_ModelKedalamanBanjirm_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Model Kedalaman Banjir (m)',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ModelKedalamanBanjirm_7.png",
                                attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [458023.561000, 9235283.672000, 463107.561000, 9240341.672000]
                            })
                        });
var lyr_ModelKerawananBanjir_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Model Kerawanan Banjir',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ModelKerawananBanjir_8.png",
                                attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [442261.439300, 9209839.858300, 481621.439300, 9258499.858300]
                            })
                        });
var group_ModelKerawananBanjirshp = new ol.layer.Group({
                                layers: [lyr_ModelKerawananBanjir_8,],
                                fold: "open",
                                title: 'Model Kerawanan Banjir [shp]'});
var group_ModelHECRAS = new ol.layer.Group({
                                layers: [lyr_ModelKedalamanBanjirm_7,],
                                fold: "open",
                                title: 'Model HECRAS'});
var group_FotoUdaradanDEM = new ol.layer.Group({
                                layers: [lyr_DaerahFotoUdara_3,lyr_DigitalTerrainModelmdiataselipsoid_4,lyr_GCP_5,lyr_ICP_6,],
                                fold: "open",
                                title: 'Foto Udara dan DEM'});
var group_DataSpasialLain = new ol.layer.Group({
                                layers: [lyr_TitikWawancara_1,lyr_BatasAdministrasiDesa_2,],
                                fold: "open",
                                title: 'Data Spasial Lain'});

lyr_GoogleSatelite_0.setVisible(true);lyr_TitikWawancara_1.setVisible(false);lyr_BatasAdministrasiDesa_2.setVisible(false);lyr_DaerahFotoUdara_3.setVisible(false);lyr_DigitalTerrainModelmdiataselipsoid_4.setVisible(true);lyr_GCP_5.setVisible(false);lyr_ICP_6.setVisible(false);lyr_ModelKedalamanBanjirm_7.setVisible(false);lyr_ModelKerawananBanjir_8.setVisible(false);
var layersList = [lyr_GoogleSatelite_0,group_DataSpasialLain,group_FotoUdaradanDEM,group_ModelHECRAS,group_ModelKerawananBanjirshp];
lyr_TitikWawancara_1.set('fieldAliases', {'fid': 'fid', 'date': 'date', 'notes': 'notes', 'photo': 'Foto', '1 TINGGI B': '1 TINGGI B', '2 YANG TER': '2 YANG TER', '3 WAKTU AI': '3 WAKTU AI', '4 BERAPA K': '4 BERAPA K', '5 PENGUNGS': '5 PENGUNGS', '6 TOTAL TE': '6 TOTAL TE', 'SAMPLE_1': 'SAMPLE_1', 'SAMPLE_CM': 'SAMPLE_CM', });
lyr_BatasAdministrasiDesa_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DaerahFotoUdara_3.set('fieldAliases', {'id': 'id', });
lyr_GCP_5.set('fieldAliases', {'Code': 'Code', 'E': 'E', 'sE': 'sE', 'N': 'N', 'sN': 'sN', 'Z': 'Z', 'sZ': 'sZ', });
lyr_ICP_6.set('fieldAliases', {'Code': 'Code', 'E': 'E', 'N': 'N', 'Z': 'Z', });
lyr_TitikWawancara_1.set('fieldImages', {'fid': 'TextEdit', 'date': 'TextEdit', 'notes': 'TextEdit', 'photo': 'ExternalResource', '1 TINGGI B': 'TextEdit', '2 YANG TER': 'TextEdit', '3 WAKTU AI': 'TextEdit', '4 BERAPA K': 'TextEdit', '5 PENGUNGS': 'TextEdit', '6 TOTAL TE': 'TextEdit', 'SAMPLE_1': 'TextEdit', 'SAMPLE_CM': 'TextEdit', });
lyr_BatasAdministrasiDesa_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DaerahFotoUdara_3.set('fieldImages', {'id': 'TextEdit', });
lyr_GCP_5.set('fieldImages', {'Code': 'TextEdit', 'E': 'TextEdit', 'sE': 'TextEdit', 'N': 'TextEdit', 'sN': 'TextEdit', 'Z': 'TextEdit', 'sZ': 'TextEdit', });
lyr_ICP_6.set('fieldImages', {'Code': 'TextEdit', 'E': 'TextEdit', 'N': 'TextEdit', 'Z': 'TextEdit', });
lyr_TitikWawancara_1.set('fieldLabels', {'fid': 'hidden field', 'date': 'hidden field', 'notes': 'hidden field', 'photo': 'hidden field', '1 TINGGI B': 'inline label - visible with data', '2 YANG TER': 'inline label - visible with data', '3 WAKTU AI': 'inline label - visible with data', '4 BERAPA K': 'inline label - visible with data', '5 PENGUNGS': 'inline label - visible with data', '6 TOTAL TE': 'inline label - visible with data', 'SAMPLE_1': 'hidden field', 'SAMPLE_CM': 'hidden field', });
lyr_BatasAdministrasiDesa_2.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_DaerahFotoUdara_3.set('fieldLabels', {'id': 'hidden field', });
lyr_GCP_5.set('fieldLabels', {'Code': 'inline label - visible with data', 'E': 'inline label - visible with data', 'sE': 'hidden field', 'N': 'inline label - visible with data', 'sN': 'hidden field', 'Z': 'inline label - visible with data', 'sZ': 'hidden field', });
lyr_ICP_6.set('fieldLabels', {'Code': 'header label - visible with data', 'E': 'inline label - visible with data', 'N': 'inline label - visible with data', 'Z': 'inline label - visible with data', });
lyr_ICP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});