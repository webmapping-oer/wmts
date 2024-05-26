# Webmapping OER Kurs - Hintergrundkarten mit Web Map Tile Services (WMTS)

![CC-BY Icon](./material/cc-by.png)

> Webmapping OER Kurs Lern-Session [Hintergrundkarten mit Web Map Tile Services (WMTS)](https://github.com/webmapping-oer/wmts) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten der [Verwaltungsgrundkarte Raster Österreich](https://www.data.gv.at/katalog/de/dataset/basemap-at) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).

Willkommen zur Webmapping OER Lern-Session Hintergrundkarten mit Web Map Tile Services (WMTS). Nimm dir einenhalb Stunden Zeit und entdecke am Beispiel der Verwaltungsgrundkarte Österreich, wie du mit einem freien WMTS-Dienst und Leaflet Hintergrundkarten für dein Webmapping Projekt in einer wählbaren Layer-Control implementieren kannst.

> [!NOTE]
> Zum Arbeiten benötigst du einen Standard konformen Browser (z.B. Firefox), Visual Studio Code zum Editieren der HTML und Javascript Dateien und LibreOffice für die Aufgabe sowie die Übung im Anschluss an die Einheit. Die komplette Einheit kannst du unter *Releases* als ZIP-Datei downloaden, lokal auf deinem Computer entpacken und in Visual Studio Code über "*Ordner Öffnen*" verfügbar machen. Beim Ansehen der Markdown-Dateien (.md) hilft dir die Tastenkombination `Ctrl + Shift + V` und mit dem Visual Studio Code Plugin *Live Server Plugin von Ritwick Dey* kannst du dir HTML-Seiten wie im Web anzeigen lassen. Klicke dazu einfach auf "*Go Live*" im rechten, unteren Eck des Editors.

## 1. Kurzeinführung Web Map Tile Services (WMTS)

Zeit: 10 Minuten

Die folgende Präsentation gibt einen kurzen Überblick, wie man sich Web Map Tile Services (WMTS) vorstellen kann. Beschäftige dich mit den wenigen Folien und recherchiere eigenständig im Internet, wenn dir etwas nicht klar ist, oder du mehr Information möchtest.

- [Download slides.odp](./material/slides.odp)

    ![CC-BY Icon](./material/cc-by.png)

    > Präsentation [Einführung Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts/material/slides.odp) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten für Grafiken von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

## 2. Lerne GetCapabilities.xml kennen

### 2.1. Analysiere die GetCapabilities.xml Datei der Verwaltungsgrundkarte Raster Österreich

Zeit: 20 Minuten

Wie du aus der Präsentation weißt, werden WMTS-Dienste in einer `GetCapabilities.xml` Datei definiert. Sieh dir die entsprechende XML-Datei der Verwaltungsgrundkarte Raster Österreich an:

- [Download GetCapabilities-basemap.xml](./material/GetCapabilities-basemap.xml)

    ![CC-BY Icon](./material/cc-by.png)

    > [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

Finde alle Layer, die vom basemap.at WMTS-Dienst angeboten werden und trage für jeden Layer die Attribute `URL zur XML-Datei`, `Titel`, `Abstract`, `Extent mit Min-XY, Max-XY`, `Style`, `TileMatrixSet`, `ResourceURL` und `maximaler Zoom-Level` in diesem LibreOffice-Template ein:

- [Download GetCapabilities_analyse_template.ods](./material/GetCapabilities_analyse_template.ods)

    ![CC-BY Icon](./material/cc-0.png)

    > [LibreOffice Mustertabelle GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/)

> [!TIP]
> Die meisten Attribute sind leicht zu finden, nur beim maximalen Zoom-Level musst du "*etwas ums Eck denken*", denn der steht nicht direkt in der Layer-Definition sondern muss aus dieser abgeleitet werden ...

## 2.2. Leite die WMTS-Urls für Leaflet ab und ergänze die Datenquelle

Zeit: 10 Minuten

In der Leaflet-Dokumentation unter `L.tileLayer()` (<https://leafletjs.com/reference.html#tilelayer>) siehst du, wie WMTS-Dienste in Leaflet implementiert werden können. Sieh dir das *Usage example* für die OpenStreetMap an und versuche, die `ResourceURL` der Layer der Verwaltungsgrundkarte in gültige URLs für Leaflet umzuwandeln. Denke dabei nicht zu kompliziert, sondern versuche, die `ResourceURL` so umzuformen, dass am Ende nur noch `{x}`, `{y}` und `{z}`als Platzhalter in der Leaflet-URL übrig bleiben. Alle anderen `{xxx}`-Einträge sollten aufgelöst sein. Ergänze die umgeformten URLs in der Analysetabelle in einer neuen Spalte `LeafletURL`

Zusätzlich benötigen wir aus rechtlichen Gründen auch die Attribution für die basemap.at Daten. Sie wird später von Leaflet in der rechten, unteren Ecke der Karte als `attribution` (<https://leafletjs.com/reference.html#tilelayer-attribution>) angezeigt werden. Was dort stehen soll, findest du bei der Datensatzbeschreibung der basemap.at Verwaltungsgrundkarte Raster Österreich beim Open Data Portal Österreichs (data.gv.at) unter <https://www.data.gv.at/katalog/de/dataset/basemap-at>. Halte Ausschau nach einem "*Lizenzzitat*" und ergänze den HTML-Code für dieses Zitat mit Link zur Lizenz in der Analysetabelle in einer neuen Spalte `Attribution HTML`.

Damit ist unsere Analysetabelle mit den Attributen der basemap.at WMTS-Layer vollständig. Zur Kontrolle kannst du dir diese ausgefüllte Tabelle ansehen und vergleichen, ob du zum selben Ergebnis gekommen bist:

- [Download GetCapabilities_analyse.ods](./material/GetCapabilities_analyse.ods)

    ![CC-BY Icon](./material/cc-by.png)

    > [LibreOffice Analysetabelle GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de)

## 3. Implementiere die Leaflet Karte

## 3.1. Entpacke das Template und initialisiere die Karte

Zeit: 10 Minuten

Damit ist es Zeit, sich der Visualisierung mit Leaflet zuzuwenden. Damit du dich auf das Implementieren der Karte konzentrieren kannst, ist ein Template mit HTML-, CSS- und Javascript-Dateien bereits vorbereitet (siehe [Webvorschau](https://webmapping-oer.github.io/wmts/material/template/index.html)):

- [Download HTML/CSS/Javascript template-wmts.zip](./material/template-wmts.zip)

    ![CC-BY Icon](./material/cc-by.png)

    > [HTML/CSS/Javascript Template WMTS Hintergrundkarten (basemap.at)](https://webmapping-oer.github.io/wmts/material/template-wmts.zip) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de)

Entpacke `template-wmts.zip` bei dir lokal am Rechner und öffne das Verzeichnis, in dem du es entpackt hast, mit "*Ordner öffnen*" in Visual Studio Code. Damit kannst du mit dem *Live Server Plugin von Ritwick Dey* die Webseite ansehen, als ob sie im Netz wäre. Klicke dazu einfach auf "*Go Live*" im rechten, unteren Eck des Editors.

In der `index.html` und `main.js` Datei stehen Kommentare, die du im ersten Schritt mit HTML-Elementen und Leaflet-Aufrufen ersetzen musst. Führe folgende Schritte aus:

- binde in `index.html` die Leaflet-Bibliothek über <https://cdnjs.com/libraries/leaflet> ein

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js" integrity="sha512-BwHfrr4c9kmRkLw6iXFdzcdWV/PGkVgiIyIWLLlTSXzWQzxuSg4DiQUCpauz/EWjgk5TYQqX/kvn9pG1NpYfqg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" integrity="sha512-Zcn6bjR/8RZbLEpLIeOwNtzREBAJnUKESxces60Mpoj+2okopSAcSUIUOseddDm0cxnGQzxIR7vJgsLZbdLE3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    ```

- initialisiere in `main.js` mit `L.map()` (<https://leafletjs.com/reference.html#map>) die Karte. Die Optionen `center` und `zoom` kannst du weglassen - wir werden stattdessen den Kartenausschnitt auf den ermittelten Extent der basemap.at Layer setzen.

    ```javascript
    let map = L.map('map');
    ```

- setze mit `map.fitBounds()` (<https://leafletjs.com/reference.html#map-fitbounds>) den Ausschnitt auf den Extent der basemap.at Layer, den wir in der Analysetabelle in der Spalte `Extent mit Min-XY, Max-XY` als `8.782379 46.358770 17.5 49.037872` festgehalten haben. Die Methode `map.fitBounds()` erwartet beim Aufruf als Argument einen Array bestehende aus zwei weiteren Arrays für `Min Lat/Lng` und `Max Lat/Lng` - die Koordinaten-Werte des Extents unserer Analysetabelle müssen also vertauscht werden, denn `x` entspricht der geographischen Länge und `y` der geographischen Breite.

    ```javascript
    map.fitBounds([
        [46.358770, 8.782379 ],
        [49.037872, 17.5]
    ]);
    ```

- füge mit `L.control.scale()` (<https://leafletjs.com/reference.html#control-scale>) einen metrischen Maßstab hinzu. Über die Option `imperial`: `false` kannst du die Skala in Meilen, die sonst zusätzlich angezeigt würde, ausblenden.

    ```javascript
    L.control.scale({
        imperial: false
    }).addTo(map);
    ```

Damit ist die Karte initialisiert. Ob wir auch auf den richtigen Ausschnitt blicken, werden wir erst später sehen, denn noch ist die Kartenfläche grau, mit einer Maßstabsleiste in der linken unteren Ecke und einer Zoom-Kontrolle in der linken oberen Ecke.

## 3.2. Implementiere die Layer-Control mit allen verfügbaren Layern

Zeit: 20 Minuten

Die Layer-Control für die verfügbaren basemap.at Layer erstellst du in zwei Schritten

- füge zuerst mit `L.control.layers()` (<https://leafletjs.com/reference.html#control-layers>) eine leere Layer-Control hinzu - du wirst sie als Layer-Icon im rechten oberen Eck erkennen:

    ```javascript
    L.control.layers().addTo(map);
    ```

- dann kannst du mit `L.tileLayer()` (<https://leafletjs.com/reference.html#tilelayer>) die einzelnen basemap.at Layer definieren. Verwende die Werte der Analysetabelle für die einzelnen Komponenten des Aufrufs: das *URL template* steht in `LeafletURL`, die Option `attribution` in `Attribution HTML` und die Option `maxZoom` in `maximaler Zoom-Level`. Am Beispiel der Geoland Basemap sieht der `L.tileLayer()` Aufruf dann so aus:

    ```javascript
    L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    )
    ```

> [!TIP]
> Verwende für die Attribution sogenannte Javascript [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) mit Backticks (\` \`), dann musst du dich nicht um Anführungszeichen bei den Links kümmern und könntest über [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation) auch Variablen in der Attribution direkt auflösen

- im letzten Schritt, kannst du alle `L.tileLayer()` Aufrufe mit einem Label in das *Base layers Objekt* der Layer-Control einfügen. Verwende als Label die (bei High-DPI, Gelände und Oberfläche leicht gekürzte) Spalte  `Titel` der Analysetabelle. Vergiss nicht, den ersten Layer auch mit `.addTo(map)` an die Karte zu hängen, denn nur so wird dieser Layer beim Laden der Seite auch gleich angezeigt. Der fertige Code für die Layer-Control sieht damit so aus:

    ```javascript
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
    }).addTo(map);
    ```

## 3.3. Gruppiere Orthofoto und Overlay zu einem Layer

Zeit: 5 Minuten

Die Layer der basemap.at umfassen auch drei Layer, die keine Beschriftung aufweisen: Orthofoto, Gelände und Oberfläche. Sie können mit dem Overlay für Beschriftungen ganz einfach kombiniert werden. Versuche es am Beispiel des Orthofotos:

- verwende `L.layerGroup()`(<https://leafletjs.com/reference.html#layergroup>) um das Orthofoto mit dem Overlay zu kombinieren. Du musst nur die beiden `L.tileLayer()` Definitionen als Array übergeben, wobei der zweite Layer, den ersten überlagert. Verwende den niedrigeren Zoom-Level des Orthofotos auch bei der Beschriftung um zu verhindern, dass ab Zoom-Level 18 die Beschriftung alleine übrig bleibt.

- dann musst du die LayerGroup noch mit einem Label an die Layer-Control hängen. Der komplette Code sieht damit so aus:

    ```javascript
    L.control.layers({
        // bestehende tileLayer
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
    ```

## 3.4. Ergänze die Quelle der Kartendaten im Footer der Seite

Zeit: 5 Minuten

Ganz zum Schluss kannst du noch die Quelle für die Kartendaten der Verwaltungsgrundkarte Raster Österreich im Footer ergänzen

```html
Kartendaten der <a href="https://www.data.gv.at/katalog/de/dataset/basemap-at">Verwaltungsgrundkarte Raster Österreich</a> von <a href="https://basemap.at/#lizenz">basemap.at</a> unter der Lizenz <a href="https://creativecommons.org/licenses/by/4.0/deed.de">CC-BY 4.0</a>.
</footer>
```

Damit ist die Karte fertig. Das Ergebnis kannst du dir auch auf der Kurshomepage unter <https://webmapping-oer.github.io/wmts/solution> ansehen.

## 4. Übe das Gelernte am Beispiel von zwei weiteren WMTS-Diensten

Zeit: 90-120 Minuten

Als Übung für zu Hause sollst du dich mit zwei weiteren WMTS-Diensten Österreichs beschäftigen: der [eGrundkarte von Tirol](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol) und dem [Web Map Tile Service der Stadt Wien](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien).

- ergänze die Attribute für alle verfügbaren Layer der beiden WMTS-Dienste in der Analysetabelle

- visualisiere alle verfügbaren Layer der beiden WMTS-Dienste in zwei HTML-Seiten (`tirol.html`, `wien.html`) mit zwei eingebundenen Scripts (`tirol.js`, `wien.js`). Das CSS Stylesheet `main.js` kannst du für beide Karten verwenden.

Die `GetCapabilities.xml`- Dateien zur Analyse kannst du hier downloaden:

- [Download GetCapabilities-tirol.xml](./material/GetCapabilities-basemap.xml)

    ![CC-BY Icon](./material/cc-by.png)

    > [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [Download GetCapabilities-wien.xml](./material/GetCapabilities-basemap.xml)

    ![CC-BY Icon](./material/cc-by.png)

    > [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

Die Analysetabelle mit allen Einträgen kannst du dir natürlich auch ansehen - am Besten erst nach dem Üben ;-)

- [Download GetCapabilities_analyse_alles.ods](./material/GetCapabilities_analyse.ods)

    ![CC-BY Icon](./material/cc-by.png)

    > [LibreOffice Analysetabelle (alle Dienste) GetCapabilities_analyse_alles.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_alles.ods) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de)

---

## 5. Materialien

Hier noch die Liste der verwendeten Materialien mit Lizenz-Zitaten.

- [Präsentation Einführung Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts/material/slides.odp) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten für Grafiken von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

- [Symbol-Icon für die WMTS-Präsentation](https://webmapping-oer.github.io/wmts/material/slides_icon.png) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/)

- [Grafik WMTS Kartenkacheln der Verwaltungsgrundkarte Raster Österreich (grau)](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.png) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [concept_wmts_wien.html](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.html). Kartendaten von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

- [HTML-Seite WMTS Kartenkacheln der Verwaltungsgrundkarte Raster Österreich (grau)](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

- [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

- [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

- [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [HTML/CSS/Javascript Template WMTS Hintergrundkarten (basemap.at)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

- [LibreOffice Template GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/)

- [LibreOffice Analysetabelle GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de)

- [LibreOffice Analysetabelle (alle Dienste) GetCapabilities_analyse_alles.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_alles.ods) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de)

---
[Webmapping OER Kurs](https://github.com/webmapping-oer)
