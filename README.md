# Webmapping OER Kurs

![CC-BY Icon](./material/cc-by.png)

> Lern-Session [Hintergrundkarten mit Web Map Tile Services (WMTS)](https://webmapping-oer.github.io/wmts) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de). Kartendaten der [Verwaltungsgrundkarte Raster Österreich](https://www.data.gv.at/katalog/de/dataset/basemap-at) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).

## Hintergrundkarten mit Web Map Tile Services (WMTS)

Willkommen zur Webmapping OER Lern-Session Hintergrundkarten mit Web Map Tile Services, kurz *WMTS*. Nimm dir einenhalb Stunden Zeit und entdecke am Beispiel der Verwaltungsgrundkarte Österreich, wie du mit einem freien WMTS-Dienst und Leaflet Hintergrundkarten für dein Webmapping Projekt in einer wählbaren Layer-Control implementieren kannst.

Zum Arbeiten benötigst du wie immer einen Standard konformen Browser (z.B. Firefox), Visual Studio Code zum Editieren der HTML und Javascript Dateien und LibreOffice für die Aufgaben und die Übung im Anschluss an die Einheit. Die komplette Einheit kannst du unter **Releases** in der letzten Version downloaden, lokal auf deinem Computer entpacken und in Visual Studio Code über "Ordner Öffnen" verfügbar machen.

### A. Einführung Web Map Tile Services (WMTS)

Die Präsentation [slides.odp](https://webmapping-oer.github.io/wmts/material/slides.odp) gibt einen kurzen Überblick, wie man sich Web Map Tile Services (WMTS) vorstellen kann. Beschäftige dich 5 Minuten mit den wenigen Folien und recherchiere eigenständig im Internet, wenn dir etwas nicht klar ist, oder du mehr Informationen möchtest.

### B. Analysiere die GetCapabilities.xml Datei der Verwaltungsgrundkarte Raster Österreich

Wie du aus der Präsentation schon weißt, werden WMTS-Dienste in einer `GetCapabilities.xml` Datei definiert. Sieh dir die entsprechende XML-Datei der Verwaltungsgrundkarte Raster Österreich an:

- [Download GetCapabilities-basemap.xml](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml)

    > [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

Finde alle Layer, die vom basemap.at WMTS-Dienst angeboten werden und trage für jeden Layer die Attribute `URL zur XML-Datei`, `Titel`, `Abstract`, `Extent mit Min-XY, Max-XY`, `Style`, `TileMatrixSet`, `ResourceURL` und `maximaler Zoom-Level` in diesem LibreOffice-Template ein:

- [Download GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

    > LibreOffice Mustertabelle GetCapabilities_analyse_template.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/) via [GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

[!TIP]
Die meisten Attribute sind leicht zu finden, nur beim maximalen Zoom-Level musst du "*etwas ums Eck denken*", denn der steht nicht direkt in der Layer-Definition sondern muss aus dieser abgeleitet werden ...

Zeit: 20 Minuten

### C. WMTS-Url für Leaflet ableiten und Datenquelle ergänzen

In der Leaflet-Dokumentation unter [TileLayer](https://leafletjs.com/reference.html#tilelayer) siehst du, wie WMTS-Dienste in Leaflet implementiert werden können. Sieh dir das *Usage example* für die OpenStreetMap an und versuche, die `ResourceURL` der Layer der Verwaltungsgrundkarte in gültige URLs für Leaflet umzuwandeln. Denke dabei nicht zu kompliziert, sondern versuche, die `ResourceURL` so umzuformen, dass am Ende nur noch `{x}`, `{y}` und `{z}`als Platzhalter in der Leaflet-URL übrig bleiben. Alle anderen `{xxx}`-Einträge sollten aufgelöst sein. Ergänzt die umgeformten URLs in einer neuen Spalte `LeafletURL`

Zusätzlich benötigen wir aus rechtlichen Gründen auch die Attribution für die basemap.at Daten. Sie wird später von Leaflet in der rechten, unteren Ecke als [TileLayer attribution](https://leafletjs.com/reference.html#tilelayer-attribution) angezeigt werden. Was dort stehen soll, findest du bei der Datensatzbeschreibung der basemap.at Verwaltungsgrundkarte Raster Österreich beim Open Data Portal Österreichs (data.gv.at) unter <https://www.data.gv.at/katalog/de/dataset/basemap-at>. Halte Ausschau nach einem "*Lizenzzitat*" und ergänze den HTML-Code für dieses Zitat mit Link zur Lizenz in einer neuen Spalte `Attribution HTML`

Zeit: 10 Minuten

Damit ist unsere Tabelle mit den Attributen der basemap.at WMTS-Layer vollständig. Zur Kontrolle kannst du dir diese ausgefüllte Tabelle ansehen und vergleichen, ob du zum selben Ergebnis gekommen bist: 

- [Download GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)

    > LibreOffice Analysetabelle GetCapabilities_analyse.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [GetCapabilities_analyse.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse.ods)


### D. Template auspacken

TODO

- [Download HTML/CSS/Javascript template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

    > [HTML/CSS/Javascript Template WMTS Hintergrundkarten (Österreich)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

### E. Layer-Control mit allen verfügbaren Layern implementieren

TODO

### F. Üben ...

TODO

### Materialien

- [WMTS GetCapabilities XML Datei  für die Verwaltungsgrundkarte Raster Österreich](https://webmapping-oer.github.io/wmts/material/GetCapabilities-basemap.xml) von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at)

- [WMTS GetCapabilities XML Datei  für den Web Map Tile Service (WMTS) Wien](https://webmapping-oer.github.io/wmts/material/GetCapabilities-wien.xml) von [Stadt Wien](https://data.wien.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/stadt-wien_webmaptileservicewmtswien)

- [WMTS GetCapabilities XML Datei  für die eGrundkarte Tirol](https://webmapping-oer.github.io/wmts/material/GetCapabilities-tirol.xml) von [Land Tirol](https://data.tirol.gv.at/) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/land-tirol_elektronischekartetirol)

- [Grafik WMTS Kartenkacheln der Verwaltungsgrundkarte Raster Österreich (grau)](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.png) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [concept_wmts_wien.html](https://webmapping-oer.github.io/wmts/material/concept_wmts_wien.html). Kartendaten von [basemap.at](https://basemap.at/#lizenz) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [data.gv.at](https://www.data.gv.at/katalog/de/dataset/basemap-at).

- [HTML/CSS/Javascript Template WMTS Hintergrundkarten (Österreich)](https://webmapping-oer.github.io/wmts/material/template/index.html) von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.de) via [template-wmts.zip](https://webmapping-oer.github.io/wmts/material/template-wmts.zip)

- LibreOffice Template GetCapabilities_analyse_template.ods von [Klaus Förster](mailto:klaus.foerster@uibk.ac.at) unter der Lizenz [CC0](https://creativecommons.org/public-domain/cc0/) via [GetCapabilities_analyse_template.ods](https://webmapping-oer.github.io/wmts/material/GetCapabilities_analyse_template.ods)

---
[Webmapping OER Kurs](https://github.com/webmapping-oer)
