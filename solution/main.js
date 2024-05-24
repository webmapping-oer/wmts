/* WMTS Hintergrundkarten (basemap.at), Script */

/*
    Karte initialisieren und Eingangs-View setzen
    https://leafletjs.com/reference.html#map
    https://leafletjs.com/reference.html#map-fitbounds
*/
let map = L.map('map');
map.fitBounds([
    [46.358770, 8.782379 ],
    [49.037872, 17.5]
]);

/*
    Layer control mit Base Layern definieren und an die Karte hängen
    https://leafletjs.com/reference.html#control-layers
    https://leafletjs.com/reference.html#control-layers-addto

    Base Layer als TileLayer mit Attribution und maximalem Zoom-Level
    https://leafletjs.com/reference.html#tilelayer
    https://leafletjs.com/reference.html#tilelayer-attribution
    https://leafletjs.com/reference.html#tilelayer-maxzoom

    den ersten Base Layer beim Laden der Seite sichtbar machen
    https://leafletjs.com/reference.html#tilelayer-addto
*/
L.control.layers({
    "Geoland Basemap": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    ).addTo(map),
    "Geoland Basemap Overlay": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    ),
    "Basemap von Österreich in Grau": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    ),
    "Basemap für high dpi Displays": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    ),
    "Basemap als farbiges Orthofoto": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    ),
    "Basemap Geländedarstellung in Grau": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/bmapgelaende/grau/google3857/{z}/{y}/{x}.jpeg", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 17
        }
    ),
    "Basemap Oberflächendarstellung in Grau": L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/bmapoberflaeche/grau/google3857/{z}/{y}/{x}.jpeg", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 17
        }
    ),
    "Basemap als farbiges Orthofoto beschriftet": L.layerGroup([
        L.tileLayer(
            "https://mapsneu.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
                attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
                maxZoom: 17
            }
        ),
        L.tileLayer(
            "https://mapsneu.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
                attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
                maxZoom: 17
            }
        )
    ])
}).addTo(map);

/*
    metrischen Maßstab hinzufügen
    https://leafletjs.com/reference.html#control-scale
    https://leafletjs.com/reference.html#control-scale-imperial
*/
L.control.scale({
    imperial: false
}).addTo(map);