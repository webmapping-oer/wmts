# Webmapping OER Kurs

![CC-BY Icon](./material/cc-by.png)

> Webmapping OER Kurs Lern-Session [Hintergrundkarten mit Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten der [Verwaltungsgrundkarte Raster Österreich](https://www.data.gv.at/katalog/de/dataset/basemap-at) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).

## Hintergrundkarten mit Web Map Tile Services (WMTS)

Willkommen zur Webmapping OER Lern-Session Hintergrundkarten mit Web Map Tile Services, kurz *WMTS*. Nimm dir einenhalb Stunden Zeit und entdecke am Beispiel der Verwaltungsgrundkarte Österreich, wie du mit einem freien WMTS-Dienst und Leaflet Hintergrundkarten für dein Webmapping Projekt in einer wählbaren Layer-Control implementieren kannst.

Zum Arbeiten benötigst du wie immer einen Standard konformen Browser (z.B. Firefox), Visual Studio Code zum Editieren der HTML und Javascript Dateien und LibreOffice für die Aufgaben und die Übung im Anschluss an die Einheit. Die komplette Einheit kannst du unter **Releases** in der letzten Version downloaden, lokal auf deinem Computer entpacken und in Visual Studio Code über "Ordner Öffnen" verfügbar machen.

Als Voraussetzung bei er Implementierung solltest du den **Leaflet Quick Start Guide** unter <https://leafletjs.com/examples/quick-start/> schon erfolgreich erledigt haben.

### A. Einführung Web Map Tile Services (WMTS)

Die folgende Präsentation gibt einen kurzen Überblick, wie man sich Web Map Tile Services (WMTS) vorstellen kann. Beschäftige dich 5 Minuten mit den wenigen Folien und recherchiere eigenständig im Internet, wenn dir etwas nicht klar ist, oder du mehr Informationen möchtest.

- [Download slides.odp](https://webmapping-oer.github.io/wmts/material/slides.odp)

    ![CC-BY Icon](./material/cc-by.png)

    > Präsentation [Einführung Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts/material/slides.odp) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten für Grafiken von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

### B. Analysiere die GetCapabilities.xml Datei der Verwaltungsgrundkarte Raster Österreich

Wie du aus der Präsentation schon weißt, werden WMTS-Dienste in einer `GetCapabilities.xml` Datei definiert. Sieh dir die entsprechende XML-Datei der Verwaltungsgrundkarte Raster Österreich an:

- [Download GetCapabilities-basemap.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    ![CC-BY Icon](./material/cc-by.png)

    > [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

Finde alle Layer, die vom basemap.at WMTS-Dienst angeboten werden und trage für jeden Layer die Attribute `URL zur XML-Datei`, `Titel`, `Abstract`, `Extent mit Min-XY, Max-XY`, `Style`, `TileMatrixSet`, `ResourceURL` und `maximaler Zoom-Level` in diesem LibreOffice-Template ein:

- [Download GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

    ![CC-BY Icon](./material/cc-0.png)

    > LibreOffice Mustertabelle GetCapabilities_analyse_template.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/) via [GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

> [!TIP]
> Die meisten Attribute sind leicht zu finden, nur beim maximalen Zoom-Level musst du "*etwas ums Eck denken*", denn der steht nicht direkt in der Layer-Definition sondern muss aus dieser abgeleitet werden ...

Zeit: 20 Minuten

### C. WMTS-Url für Leaflet ableiten und Datenquelle ergänzen

In der Leaflet-Dokumentation unter [TileLayer](https://leafletjs.com/reference.html#tilelayer) siehst du, wie WMTS-Dienste in Leaflet implementiert werden können. Sieh dir das *Usage example* für die OpenStreetMap an und versuche, die `ResourceURL` der Layer der Verwaltungsgrundkarte in gültige URLs für Leaflet umzuwandeln. Denke dabei nicht zu kompliziert, sondern versuche, die `ResourceURL` so umzuformen, dass am Ende nur noch `{x}`, `{y}` und `{z}`als Platzhalter in der Leaflet-URL übrig bleiben. Alle anderen `{xxx}`-Einträge sollten aufgelöst sein. Ergänzt die umgeformten URLs in der Analysetabelle in einer neuen Spalte `LeafletURL`

Zusätzlich benötigen wir aus rechtlichen Gründen auch die Attribution für die basemap.at Daten. Sie wird später von Leaflet in der rechten, unteren Ecke als [TileLayer attribution](https://leafletjs.com/reference.html#tilelayer-attribution) angezeigt werden. Was dort stehen soll, findest du bei der Datensatzbeschreibung der basemap.at Verwaltungsgrundkarte Raster Österreich beim Open Data Portal Österreichs (data.gv.at) unter <https://www.data.gv.at/katalog/de/dataset/basemap-at>. Halte Ausschau nach einem "*Lizenzzitat*" und ergänze den HTML-Code für dieses Zitat mit Link zur Lizenz in der Analysetabelle in einer neuen Spalte `Attribution HTML`

Zeit: 10 Minuten

Damit ist unsere Analysetabelle mit den Attributen der basemap.at WMTS-Layer vollständig. Zur Kontrolle kannst du dir diese ausgefüllte Tabelle ansehen und vergleichen, ob du zum selben Ergebnis gekommen bist: 

- [Download GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)

    ![CC-BY Icon](./material/cc-by.png)

    > LibreOffice Analysetabelle GetCapabilities_analyse.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)


### D. Template entpacken und Karte initialisieren

Damit ist es Zeit, sich der Visualisierung mit Leaflet zuzuwenden. Damit du dich auf das Implementieren der Karte konzentrieren kannst, ist ein Template mit HTML-, CSS- und Javascript-Dateien bereits vorbereitet:

- [Download HTML/CSS/Javascript template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

    ![CC-BY Icon](./material/cc-by.png)

    > [HTML/CSS/Javascript Template WMTS Hintergrundkarten (Österreich)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

Entpacke es bei dir lokal am Rechner und öffne das Verzeichnis, in dem du es entpackt hast, mit "*Ordner öffnen*" in Visual Studio Code. Damit kannst du mit dem *Live Server Plugin* von Ritwick Dey die Webseite ansehen, als ob sie im Netz wäre. Klicke dazu einfach auf "*Go Live*" im rechten, unteren Eck des Editors.

In der `index.html` und `main.js` Datei stehen Kommentare, die du im ersten Schritt mit HTML-Elementen und Leaflet-Aufrufen ersetzen musst. Führe folgende Schritte aus:

- binde in `index.html` die Leaflet-Bibliothek über <https://cdnjs.com> ein

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js" integrity="sha512-BwHfrr4c9kmRkLw6iXFdzcdWV/PGkVgiIyIWLLlTSXzWQzxuSg4DiQUCpauz/EWjgk5TYQqX/kvn9pG1NpYfqg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" integrity="sha512-Zcn6bjR/8RZbLEpLIeOwNtzREBAJnUKESxces60Mpoj+2okopSAcSUIUOseddDm0cxnGQzxIR7vJgsLZbdLE3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    ```

- initialisiere in `main.js` mit `L.map()` (<https://leafletjs.com/reference.html#map>) die Karte. Die Optionen `center` und `zoom` kannst du weglassen - wir werden stattdessen den Kartenausschnitt auf den ermittelten Extent der basemap.at Layer setzen.

    ```javascript
    let map = L.map('map');
    ```

- setze mit `map.fitBounds()` (<https://leafletjs.com/reference.html#map-fitbounds>) den Ausschnitt auf den Extent der basemap.at Layer, den wir in der Analysetabelle in der Spalte `Extent mit Min-XY, Max-XY` als `8.782379 46.358770 17.5 49.037872` festgehalten haben. Die Methode `map.fitBounds()` erwartet beim Aufruf als Argument einen Array bestehende aus zwei weiteren Arrays für `Min Lat/Lng` und `Max Lat/Lng` - die Werte des Extents unserer Analysetabelle müssen also vertauscht werden, denn `x` entspricht der geographischen Länge und `y` der geographischen Breite.

    ```javascript
    map.fitBounds([
        [46.358770, 8.782379 ],
        [49.037872, 17.5]
    ]);
    ```

- füge mit `L.control.scale()` <https://leafletjs.com/reference.html#control-scale> einen metrischen Maßstab hinzu. Über die Option `imperial`: `false` kannst du die Skala in Meilen, die sonst zusätzlich angezeigt würde, ausblenden.

    ```javascript
    L.control.scale({
        imperial: false
    }).addTo(map);
    ```

Damit ist die Karte initialisiert. Ob wir auch auf den richtigen Ausschnitt blicken, werden wir erst später sehen, denn noch ist die Kartenfläche grau, mit einer Maßstabsleiste in der linken unteren Ecke und einer Zoom-Kontrolle in der linken oberen Ecke.

### E. Layer-Control mit allen verfügbaren Layern implementieren

Die Layer-Control für die verfügbaren basemap.at Layer erstellst du in zwei Schritten

- füge zuerst mit `L.control.layers()` (https://leafletjs.com/reference.html#control-layers) eine leere Layer-Control hinzu - du wirst sie als Layer-Icon im rechten oberen Eck sehen:

    ```javascript
    L.control.layers().addTo(map);
    ```

- dann kannst du mit `L.tileLayer()` die einzelnen basemap.at Layer definieren. Verwende die Werte der Analysetabelle für die einzelnen Komponenten des Aufrufs: das *URL template* steht in `LeafletURL`, die Option `attribution` in `Attribution HTML` und die Option `maxZoom` in `maximaler Zoom-Level`. Am Beispiel der Geoland Basemap sieht der `L.tileLayer()` Aufruf dann so aus:

    ```javascript
    L.tileLayer(
        "https://mapsneu.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            attribution: `Datenquelle: <a href="https://basemap.at/#lizenz">basemap.at</a>`,
            maxZoom: 20
        }
    )
    ```

> [!TIP]
> Verwende für die Attribution Javascript [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) mit den sogenannten Backticks (`\``), dann musst du dich nicht um Anführungszeichen bei den Links kümmern und könntest über [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation) auch Variablen in der Attribution direkt auflösen

- im letzten Schritt, kannst du alle `L.tileLayer()` Aufrufe mit einem Label in das *Base layers Objekt* der Layer-Control einfügen. Als Label verwenden wir die (bei High-DPI, Gelände und Oberfläche leicht gekürzte) Spalte  `Titel` der Analysetabelle. Vergiss nicht, den ersten Layer auch mit `.addTo(map)` an die Karte zu hängen, denn nur so wird dieser Layer beim Laden der Seite auch gleich angezeigt. Der fertige Code für die Layer-Control sieht damit so aus:

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
### F. Kosmetik beim Template

Ganz zum Schluss, kannst du noch das Template anpassen, bzw. ergänzen. Ändere beim Titel und der Überschrift den Text *Österreich* in *basemap.at*  und füge im Footer bei Quellen noch ein vollständiges Zitat für die Verwaltungsgrundkarte Raster Österreich hinzu

```html
<footer>
    <strong>Quellen: </strong>
   <cite>Kartendaten der <a href="https://www.data.gv.at/katalog/de/dataset/basemap-at">Verwaltungsgrundkarte Raster Österreich</a> von <a href="https://basemap.at/#lizenz">basemap.at</a> unter der Lizenz <a href="https://creativecommons.org/licenses/by/4.0/deed.de">CC-BY 4.0</a></cite>
</footer>
```

### G. Üben, Üben, Üben ...

Als Übung für zu Hause sollst du dich mit zwei weiteren WMTS-Diensten Österreichs beschäftigen: der [eGrundkarte von Tirol](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol) und dem [Web Map Tile Service der Stadt Wien](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien). 

- ergänze die Attribute für alle verfügbaren Layer der beiden WMTS-Dienste in der Analysetabelle

- visualisiere alle verfügbaren Layer der beiden WMTS-Dienste in zwei HTML-Seiten (`tirol.html`, `wien.html`) mit zwei eingebundenen Scripts ()`tirol.js`, `wien.js`). Das CSS Stylesheet `main.js` kannst du für beide Karten verwenden.

Die `GetCapabilities.xml`- Dateien zur Analyse kannst du hier downloaden:

- [Download GetCapabilities-tirol.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    ![CC-BY Icon](./material/cc-by.png)

    > [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [Download GetCapabilities-wien.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    ![CC-BY Icon](./material/cc-by.png)

    > [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

Die Analysetabelle mit allen Einträgen kannst du dir natürlich auch ansehen - am Besten erst nach dem Üben ;-)

- [Download GetCapabilities_analyse_alles.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)

    ![CC-BY Icon](./material/cc-by.png)

    > LibreOffice Analysetabelle (alle Dienste) GetCapabilities_analyse_alles.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [GetCapabilities_analyse_alles.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_alles.ods)


---

### Materialien

- Präsentation [Einführung Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts/material/slides.odp) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten für Grafiken von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

- [Grafik WMTS Kartenkacheln der Verwaltungsgrundkarte Raster Österreich (grau)](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.png) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [concept_wmts_wien.html](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.html). Kartendaten von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

- [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

- [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

- [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [HTML/CSS/Javascript Template WMTS Hintergrundkarten (Österreich)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

- LibreOffice Template GetCapabilities_analyse_template.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/) via [GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

- LibreOffice Analysetabelle GetCapabilities_analyse.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)

- LibreOffice Analysetabelle (alle Dienste) GetCapabilities_analyse_alles.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [GetCapabilities_analyse_alles.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_alles.ods)

---
[Webmapping OER Kurs](https://github.com/webmapping-oer)
