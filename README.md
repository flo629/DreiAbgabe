Leider habe ich aufgrund von Prüfungstress, erst sehr spät mit der Aufabe begonnen und konnte deswegen den Pie Chart und den Line Chart nicht implementieren. Zudem dachte ich ehrlich gesagt, dass die Aufgabe nicht mehr als eine halbe Stunde auf sich nehmen wird.

Das python script funktioniert. Es kann von einer csv datei die Daten einlesen und dann in
einer Sqlite DatenBank speichern. Die Datenbank bzw. die Struktur der Datenbank muss bereits
existieren.

Mit hilfe von Nodejs wird ein Server gestartet. Um ihn zu starten muss man node app in das Terminal schreiben und dann startet dieser. Auf dem Server ist die Datenbank. In einem externen html file und js file kann man mit einem ajax call auf die Datenbank zugreifen. Es gibt drei buttons. Show table: mit dem werden die ersten 20 daten ausgegeben. Mit Show sorted table werden die Vornamen sotiert. Und mit dem Filter list sales smaller 100 werden nur daten angezeigt wo die sales 2021 unter 100 waren. Überall übersichtshalber nur 20 Daten.
