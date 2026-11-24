var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0 = new ol.format.GeoJSON();
var features_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0 = format_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.readFeatures(json_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.addFeatures(features_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0);var lyr_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0, 
                style: style_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0,
                title: '<img src="styles/legend/LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.png" /> [LapakGIS.com]_BATAS_KECAMATAN_AR_EDISI_JULI_2026_'
            });var format_Lokasi_Wisata_Fix_1 = new ol.format.GeoJSON();
var features_Lokasi_Wisata_Fix_1 = format_Lokasi_Wisata_Fix_1.readFeatures(json_Lokasi_Wisata_Fix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_Wisata_Fix_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lokasi_Wisata_Fix_1.addFeatures(features_Lokasi_Wisata_Fix_1);var lyr_Lokasi_Wisata_Fix_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lokasi_Wisata_Fix_1, 
                style: style_Lokasi_Wisata_Fix_1,
                title: '<img src="styles/legend/Lokasi_Wisata_Fix_1.png" /> Lokasi_Wisata_Fix'
            });var format_jalan_kendal_lengkap_2 = new ol.format.GeoJSON();
var features_jalan_kendal_lengkap_2 = format_jalan_kendal_lengkap_2.readFeatures(json_jalan_kendal_lengkap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_kendal_lengkap_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_kendal_lengkap_2.addFeatures(features_jalan_kendal_lengkap_2);var lyr_jalan_kendal_lengkap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_kendal_lengkap_2, 
                style: style_jalan_kendal_lengkap_2,
                title: '<img src="styles/legend/jalan_kendal_lengkap_2.png" /> jalan_kendal_lengkap'
            });var format_Rute_Kemenangan_Patebon_3 = new ol.format.GeoJSON();
var features_Rute_Kemenangan_Patebon_3 = format_Rute_Kemenangan_Patebon_3.readFeatures(json_Rute_Kemenangan_Patebon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_Kemenangan_Patebon_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rute_Kemenangan_Patebon_3.addFeatures(features_Rute_Kemenangan_Patebon_3);var lyr_Rute_Kemenangan_Patebon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rute_Kemenangan_Patebon_3, 
                style: style_Rute_Kemenangan_Patebon_3,
                title: '<img src="styles/legend/Rute_Kemenangan_Patebon_3.png" /> Rute_Kemenangan_Patebon'
            });var format_Titik_Kandidat_4 = new ol.format.GeoJSON();
var features_Titik_Kandidat_4 = format_Titik_Kandidat_4.readFeatures(json_Titik_Kandidat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Kandidat_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Titik_Kandidat_4.addFeatures(features_Titik_Kandidat_4);var lyr_Titik_Kandidat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_Kandidat_4, 
                style: style_Titik_Kandidat_4,
    title: 'Titik_Kandidat<br />\
    <img src="styles/legend/Titik_Kandidat_4_0.png" /> A<br />\
    <img src="styles/legend/Titik_Kandidat_4_1.png" /> B<br />\
    <img src="styles/legend/Titik_Kandidat_4_2.png" /> C<br />\
    <img src="styles/legend/Titik_Kandidat_4_3.png" /> <br />'
        });

lyr_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.setVisible(true);lyr_Lokasi_Wisata_Fix_1.setVisible(true);lyr_jalan_kendal_lengkap_2.setVisible(true);lyr_Rute_Kemenangan_Patebon_3.setVisible(true);lyr_Titik_Kandidat_4.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0,lyr_Lokasi_Wisata_Fix_1,lyr_jalan_kendal_lengkap_2,lyr_Rute_Kemenangan_Patebon_3,lyr_Titik_Kandidat_4];
lyr_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_Lokasi_Wisata_Fix_1.set('fieldAliases', {'ID': 'ID', 'Nama_Wisat': 'Nama_Wisat', 'Kategori': 'Kategori', 'X_Longtitu': 'X_Longtitu', 'Y_Latitude': 'Y_Latitude', 'Kecamatan': 'Kecamatan', });
lyr_jalan_kendal_lengkap_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'Panjang_KM': 'Panjang_KM', 'Kecepatan': 'Kecepatan', 'Waktu': 'Waktu', });
lyr_Rute_Kemenangan_Patebon_3.set('fieldAliases', {'length': 'length', 'time': 'time', });
lyr_Titik_Kandidat_4.set('fieldAliases', {'id': 'id', 'Kandidat': 'Kandidat', });
lyr_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_Lokasi_Wisata_Fix_1.set('fieldImages', {'ID': 'TextEdit', 'Nama_Wisat': 'TextEdit', 'Kategori': 'TextEdit', 'X_Longtitu': 'TextEdit', 'Y_Latitude': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_jalan_kendal_lengkap_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'Panjang_KM': 'TextEdit', 'Kecepatan': 'TextEdit', 'Waktu': 'TextEdit', });
lyr_Rute_Kemenangan_Patebon_3.set('fieldImages', {'length': 'TextEdit', 'time': 'TextEdit', });
lyr_Titik_Kandidat_4.set('fieldImages', {'id': 'TextEdit', 'Kandidat': 'TextEdit', });
lyr_LapakGIScom_BATAS_KECAMATAN_AR_EDISI_JULI_2026__0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_Lokasi_Wisata_Fix_1.set('fieldLabels', {'ID': 'no label', 'Nama_Wisat': 'no label', 'Kategori': 'no label', 'X_Longtitu': 'no label', 'Y_Latitude': 'no label', 'Kecamatan': 'no label', });
lyr_jalan_kendal_lengkap_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'Panjang_KM': 'no label', 'Kecepatan': 'no label', 'Waktu': 'no label', });
lyr_Rute_Kemenangan_Patebon_3.set('fieldLabels', {'length': 'no label', 'time': 'no label', });
lyr_Titik_Kandidat_4.set('fieldLabels', {'id': 'no label', 'Kandidat': 'no label', });
lyr_Titik_Kandidat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});