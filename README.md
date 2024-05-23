# Webmapping OER Kurs

![CC-BY Icon](./material/cc-by.png)

> Lern-Session [Hintergrundkarten mit Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten der [Verwaltungsgrundkarte Raster Österreich](https://www.data.gv.at/katalog/de/dataset/basemap-at) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).

## Hintergrundkarten mit Web Map Tile Services (WMTS)

Willkommen zur Webmapping OER Lern-Session Hintergrundkarten mit Web Map Tile Services, kurz *WMTS*. Nimm dir einenhalb Stunden Zeit und entdecke am Beispiel der Verwaltungsgrundkarte Österreich, wie du mit einem freien WMTS-Dienst und Leaflet Hintergrundkarten für dein Webmapping Projekt in einer wählbaren Layer-Control implementieren kannst.

Zum Arbeiten benötigst du wie immer einen Standard konformen Browser (z.B. Firefox), Visual Studio Code zum Editieren der HTML und Javascript Dateien und LibreOffice für die Aufgaben und die Übung im Anschluss an die Einheit. Die komplette Einheit kannst du unter **Releases** in der letzten Version downloaden, lokal auf deinem Computer entpacken und in Visual Studio Code über "Ordner Öffnen" verfügbar machen.

Als Voraussetzung bei er Implementierung solltest du den **Leaflet Quick Start Guide** unter <https://leafletjs.com/examples/quick-start/> schon erfolgreich erledigt haben.

### A. Einführung Web Map Tile Services (WMTS)

Die Präsentation [slides.odp](https://webmapping-oer.github.io/wmts/material/slides.odp) gibt einen kurzen Überblick, wie man sich Web Map Tile Services (WMTS) vorstellen kann. Beschäftige dich 5 Minuten mit den wenigen Folien und recherchiere eigenständig im Internet, wenn dir etwas nicht klar ist, oder du mehr Informationen möchtest.

### B. Analysiere die GetCapabilities.xml Datei der Verwaltungsgrundkarte Raster Österreich

Wie du aus der Präsentation schon weißt, werden WMTS-Dienste in einer `GetCapabilities.xml` Datei definiert. Sieh dir die entsprechende XML-Datei der Verwaltungsgrundkarte Raster Österreich an:

- [Download GetCapabilities-basemap.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    > [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

Finde alle Layer, die vom basemap.at WMTS-Dienst angeboten werden und trage für jeden Layer die Attribute `URL zur XML-Datei`, `Titel`, `Abstract`, `Extent mit Min-XY, Max-XY`, `Style`, `TileMatrixSet`, `ResourceURL` und `maximaler Zoom-Level` in diesem LibreOffice-Template ein:

- [Download GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

    > LibreOffice Mustertabelle GetCapabilities_analyse_template.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/) via [GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

> [!TIP]
> Die meisten Attribute sind leicht zu finden, nur beim maximalen Zoom-Level musst du "*etwas ums Eck denken*", denn der steht nicht direkt in der Layer-Definition sondern muss aus dieser abgeleitet werden ...

Zeit: 20 Minuten

### C. WMTS-Url für Leaflet ableiten und Datenquelle ergänzen

In der Leaflet-Dokumentation unter [TileLayer](https://leafletjs.com/reference.html#tilelayer) siehst du, wie WMTS-Dienste in Leaflet implementiert werden können. Sieh dir das *Usage example* für die OpenStreetMap an und versuche, die `ResourceURL` der Layer der Verwaltungsgrundkarte in gültige URLs für Leaflet umzuwandeln. Denke dabei nicht zu kompliziert, sondern versuche, die `ResourceURL` so umzuformen, dass am Ende nur noch `{x}`, `{y}` und `{z}`als Platzhalter in der Leaflet-URL übrig bleiben. Alle anderen `{xxx}`-Einträge sollten aufgelöst sein. Ergänzt die umgeformten URLs in der Analyse Tabelle in einer neuen Spalte `LeafletURL`

Zusätzlich benötigen wir aus rechtlichen Gründen auch die Attribution für die basemap.at Daten. Sie wird später von Leaflet in der rechten, unteren Ecke als [TileLayer attribution](https://leafletjs.com/reference.html#tilelayer-attribution) angezeigt werden. Was dort stehen soll, findest du bei der Datensatzbeschreibung der basemap.at Verwaltungsgrundkarte Raster Österreich beim Open Data Portal Österreichs (data.gv.at) unter <https://www.data.gv.at/katalog/de/dataset/basemap-at>. Halte Ausschau nach einem "*Lizenzzitat*" und ergänze den HTML-Code für dieses Zitat mit Link zur Lizenz in der Analyse Tabelle in einer neuen Spalte `Attribution HTML`

Zeit: 10 Minuten

Damit ist unsere Analyse Tabelle mit den Attributen der basemap.at WMTS-Layer vollständig. Zur Kontrolle kannst du dir diese ausgefüllte Tabelle ansehen und vergleichen, ob du zum selben Ergebnis gekommen bist: 

- [Download GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)

    > LibreOffice Analysetabelle GetCapabilities_analyse.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)


### D. Template auspacken

Damit ist es Zeit, sich der Visualisierung mit Leaflet zuzuwenden. Damit du dich auf das Implementieren der Karte konzentrieren kannst, ist ein Template mit HTML-, CSS- und Javascript-Dateien bereits vorbereitet:

- [Download HTML/CSS/Javascript template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

    > [HTML/CSS/Javascript Template WMTS Hintergrundkarten (Österreich)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

Entpacke es bei dir und Öffne das Verzeichnis, in dem du es entpackt hast, mit "*Ordner öffnen*" in Visual Studio Code. Damit kannst du mit dem *Live Server Plugin* die Webseite ansehen, als ob sie im Netz wäre. Klicke dazu einfach auf das "Funk-Symbol" mit dem Label "Go Live" im rechten, unteren Eck des Visual Studio Code Editors.

In der `index.html` und `main.js` Datei stehen Kommentare, die du im ersten Schritt mit HTML-Elementen und Leaflet-Aufrufen ersetzen musst. konkret musst du:

1. die Leaflet-Bibliothek in `index.html` über <https://cdnjs.com> einbinden

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js" integrity="sha512-BwHfrr4c9kmRkLw6iXFdzcdWV/PGkVgiIyIWLLlTSXzWQzxuSg4DiQUCpauz/EWjgk5TYQqX/kvn9pG1NpYfqg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" integrity="sha512-Zcn6bjR/8RZbLEpLIeOwNtzREBAJnUKESxces60Mpoj+2okopSAcSUIUOseddDm0cxnGQzxIR7vJgsLZbdLE3w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    ```

2. die Karte in `main.js` initialisieren. Wähle als Kartenmittelpunkt die Koordinate von Österreich aus dem Wikipedia-Artikel <https://de.wikipedia.org/wiki/%C3%96sterreich>, als Zoom-Level `7`

    ```javascript
    let map = L.map('map', {
        center: [47.59397, 14.12456],
        zoom: 7
    });
    ```

3. einen metrischen Maßstab hinzufügen. Über die Option `imperial`: `false` kannst du die Skala in Meilen ausblenden, die sonst zusätzlich angezeigt würde.

    ```javascript
    L.control.scale({
        imperial: false
    }).addTo(map);
    ```

Den Schritt mit der Layer-Control heben wir uns für den nächsten schritt auf.

### E. Layer-Control mit allen verfügbaren Layern implementieren

TODO

### F. Üben, Üben, Üben ...

Als Übung für zu Hause kannst du dich mit zwei weiteren WMTS-Diensten Österreichs beschäftigen: der [eGrundkarte von Tirol](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol) und dem [Web Map Tile Service der Stadt Wien](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien). Visualisiere alle verfügbaren Layer dieser beiden Dienste in zwei HTML-Seiten `tirol.html` und `wien.html` mit den eingebundenen Scripts `tirol.js` und `wien.js`. Das CSS Stylesheet `main.js` kannst du für beide Karten verwenden.

Die GetCapabilities.xml Dateien kannst du hier downloaden:

- [Download GetCapabilities-tirol.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    > [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [Download GetCapabilities-wien.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    > [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

Vergiss nicht, die Attribute für alle Layer in der Analyse Tabelle zu ergänzen


### Materialien

- [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

- [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

- [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [Grafik WMTS Kartenkacheln der Verwaltungsgrundkarte Raster Österreich (grau)](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.png) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [concept_wmts_wien.html](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.html). Kartendaten von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

- [HTML/CSS/Javascript Template WMTS Hintergrundkarten (Österreich)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

- LibreOffice Template GetCapabilities_analyse_template.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/) via [GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

---
[Webmapping OER Kurs](https://github.com/webmapping-oer)
