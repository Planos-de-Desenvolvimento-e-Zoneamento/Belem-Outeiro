var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_13 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_13 = format_AcessosHidroviriosExternos_13.readFeatures(json_AcessosHidroviriosExternos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosHidroviriosExternos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_13.addFeatures(features_AcessosHidroviriosExternos_13);
var lyr_AcessosHidroviriosExternos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_13, 
                style: style_AcessosHidroviriosExternos_13,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_13.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_14 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_14 = format_AcessosRodoviriosInternosLongoPrazo_14.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_14.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_14);
var lyr_AcessosRodoviriosInternosLongoPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_14, 
                style: style_AcessosRodoviriosInternosLongoPrazo_14,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_14.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_15 = format_AcessosRodoviriosInternosMdioPrazo_15.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_15.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_15);
var lyr_AcessosRodoviriosInternosMdioPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_15, 
                style: style_AcessosRodoviriosInternosMdioPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_15.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_16 = format_AcessosRodoviriosInternosCurtoPrazo_16.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_16.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_16);
var lyr_AcessosRodoviriosInternosCurtoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_16, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_16.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_17 = format_AcessosRodoviriosInternosSituaoAtual_17.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_17.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_17);
var lyr_AcessosRodoviriosInternosSituaoAtual_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_17, 
                style: style_AcessosRodoviriosInternosSituaoAtual_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_17.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_18 = format_AcessosRodoviriosExternos_18.readFeatures(json_AcessosRodoviriosExternos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosExternos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_18.addFeatures(features_AcessosRodoviriosExternos_18);
var lyr_AcessosRodoviriosExternos_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_18, 
                style: style_AcessosRodoviriosExternos_18,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_18.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_19 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_19 = format_reasNoAfetassOperaesPorturiasLongoPrazo_19.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_19.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_19);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_19, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_19,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_19.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_20 = format_reasNoAfetassOperaesPorturiasMdioPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_22 = format_reasNoAfetassOperaesPorturiasSituaoAtual_22.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_22.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_22);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_22, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_22.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_23 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_23 = format_reaseInstalaesAlfandegadas_23.readFeatures(json_reaseInstalaesAlfandegadas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaseInstalaesAlfandegadas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_23.addFeatures(features_reaseInstalaesAlfandegadas_23);
var lyr_reaseInstalaesAlfandegadas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_23, 
                style: style_reaseInstalaesAlfandegadas_23,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_23.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_24 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_24 = format_AcostagemLongoPrazo_24.readFeatures(json_AcostagemLongoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemLongoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_24.addFeatures(features_AcostagemLongoPrazo_24);
var lyr_AcostagemLongoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_24, 
                style: style_AcostagemLongoPrazo_24,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_24.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_25 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_25 = format_AcostagemMdioPrazo_25.readFeatures(json_AcostagemMdioPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemMdioPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_25.addFeatures(features_AcostagemMdioPrazo_25);
var lyr_AcostagemMdioPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_25, 
                style: style_AcostagemMdioPrazo_25,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_25.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_26 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_26 = format_AcostagemCurtoPrazo_26.readFeatures(json_AcostagemCurtoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemCurtoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_26.addFeatures(features_AcostagemCurtoPrazo_26);
var lyr_AcostagemCurtoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_26, 
                style: style_AcostagemCurtoPrazo_26,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_26.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_27 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_27 = format_AcostagemSituaoAtual_27.readFeatures(json_AcostagemSituaoAtual_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemSituaoAtual_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_27.addFeatures(features_AcostagemSituaoAtual_27);
var lyr_AcostagemSituaoAtual_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_27, 
                style: style_AcostagemSituaoAtual_27,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_27.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_28 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_28 = format_ArmazenagemLongoPrazo_28.readFeatures(json_ArmazenagemLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_28.addFeatures(features_ArmazenagemLongoPrazo_28);
var lyr_ArmazenagemLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_28, 
                style: style_ArmazenagemLongoPrazo_28,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_28.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_29 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_29 = format_ArmazenagemMdioPrazo_29.readFeatures(json_ArmazenagemMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_29.addFeatures(features_ArmazenagemMdioPrazo_29);
var lyr_ArmazenagemMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_29, 
                style: style_ArmazenagemMdioPrazo_29,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_29.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_30 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_30 = format_ArmazenagemCurtoPrazo_30.readFeatures(json_ArmazenagemCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_30.addFeatures(features_ArmazenagemCurtoPrazo_30);
var lyr_ArmazenagemCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_30, 
                style: style_ArmazenagemCurtoPrazo_30,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_30.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_31 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_31 = format_ArmazenagemSituaoAtual_31.readFeatures(json_ArmazenagemSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_31.addFeatures(features_ArmazenagemSituaoAtual_31);
var lyr_ArmazenagemSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_31, 
                style: style_ArmazenagemSituaoAtual_31,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_31.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_35 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_35 = format_reasAfetassOperaesPorturiasLongoPrazo_35.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_35.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_35);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_35, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_35,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_35.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_36 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_36 = format_reasAfetassOperaesPorturiasMdioPrazo_36.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_36.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_36);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_36, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_36,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_36.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_37 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_37 = format_reasAfetassOperaesPorturiasCurtoPrazo_37.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_37.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_37);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_37, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_37,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_37.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_38 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_38 = format_reasAfetassOperaesPorturiasSituaoAtual_38.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_38.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_38);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_38, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_38,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_38.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeBelm_39 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeBelm_39 = format_PoligonaldareadoPortoOrganizadodeBelm_39.readFeatures(json_PoligonaldareadoPortoOrganizadodeBelm_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonaldareadoPortoOrganizadodeBelm_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeBelm_39.addFeatures(features_PoligonaldareadoPortoOrganizadodeBelm_39);
var lyr_PoligonaldareadoPortoOrganizadodeBelm_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeBelm_39, 
                style: style_PoligonaldareadoPortoOrganizadodeBelm_39,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Belém',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeBelm_39.png" /> Poligonal da Área do Porto Organizado de Belém'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeBelm_39,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_35,lyr_reasAfetassOperaesPorturiasMdioPrazo_36,lyr_reasAfetassOperaesPorturiasCurtoPrazo_37,lyr_reasAfetassOperaesPorturiasSituaoAtual_38,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_28,lyr_ArmazenagemMdioPrazo_29,lyr_ArmazenagemCurtoPrazo_30,lyr_ArmazenagemSituaoAtual_31,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_24,lyr_AcostagemMdioPrazo_25,lyr_AcostagemCurtoPrazo_26,lyr_AcostagemSituaoAtual_27,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_23,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_18,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_14,lyr_AcessosRodoviriosInternosMdioPrazo_15,lyr_AcessosRodoviriosInternosCurtoPrazo_16,lyr_AcessosRodoviriosInternosSituaoAtual_17,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_13,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_AcessosHidroviriosExternos_13.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_14.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_17.setVisible(false);lyr_AcessosRodoviriosExternos_18.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.setVisible(false);lyr_reaseInstalaesAlfandegadas_23.setVisible(false);lyr_AcostagemLongoPrazo_24.setVisible(false);lyr_AcostagemMdioPrazo_25.setVisible(false);lyr_AcostagemCurtoPrazo_26.setVisible(false);lyr_AcostagemSituaoAtual_27.setVisible(false);lyr_ArmazenagemLongoPrazo_28.setVisible(false);lyr_ArmazenagemMdioPrazo_29.setVisible(false);lyr_ArmazenagemCurtoPrazo_30.setVisible(false);lyr_ArmazenagemSituaoAtual_31.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_35.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_36.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_37.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_38.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeBelm_39.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', 'Número': 'Número de Identificação ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_13.set('fieldAliases', {'Calado': 'Calado (m) ', 'Nome': 'Nome', 'Atual': 'Atualização ', });
lyr_AcessosRodoviriosInternosLongoPrazo_14.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_15.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_16.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_17.set('fieldAliases', {'Ident': 'Identificação ', 'N°_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_18.set('fieldAliases', {'Sigla': 'Sigla', 'Nome': 'Nome', 'Jurisdicao': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reaseInstalaesAlfandegadas_23.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_24.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_25.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_26.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_27.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berço': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_28.set('fieldAliases', {'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_ArmazenagemMdioPrazo_29.set('fieldAliases', {'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_ArmazenagemCurtoPrazo_30.set('fieldAliases', {'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_ArmazenagemSituaoAtual_31.set('fieldAliases', {'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', 'T_Instal': 'Tipo da Instalação ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_35.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_36.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_37.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_38.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_39.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', 'Número': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_13.set('fieldImages', {'Calado': 'TextEdit', 'Nome': 'TextEdit', 'Atual': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_14.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_15.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_16.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_17.set('fieldImages', {'Ident': 'TextEdit', 'N°_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_18.set('fieldImages', {'Sigla': 'TextEdit', 'Nome': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_23.set('fieldImages', {'Inst_Legal': 'TextEdit', });
lyr_AcostagemLongoPrazo_24.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemMdioPrazo_25.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemCurtoPrazo_26.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemSituaoAtual_27.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berço': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_28.set('fieldImages', {'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_29.set('fieldImages', {'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_30.set('fieldImages', {'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_31.set('fieldImages', {'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_35.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_36.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_37.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_38.set('fieldImages', {'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_39.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Número': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_13.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Atual': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_14.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_15.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_16.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_17.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N°_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_18.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_23.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_24.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_25.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_26.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_27.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_28.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_29.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_30.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_31.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_35.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_36.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_37.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_38.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_39.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeBelm_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});