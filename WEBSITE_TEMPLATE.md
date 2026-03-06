# 1️⃣ Markdown-Template

<!-- Design: Dunkler Background, goldene Akzente. Serif für Headlines, Sans-Serif für Fließtext -->

# {{STUDIO_NAME}}
### {{STUDIO_TAGLINE}}

<!-- Bild: Ästhetische Nahaufnahme einer Tätowiermaschine in Aktion oder eines frisch gestochenen Tattoos. Dunkel, hoher Kontrast. {{HERO_IMAGE}} -->

{{HERO_SUBTEXT_1}}
{{HERO_SUBTEXT_2}}

[ {{HERO_CTA_TEXT}} ]({{HERO_CTA_LINK}})
[ Portfolio ansehen ](#portfolio)

---

## The Studio
### {{STUDIO_STORY_HEADLINE}}

{{STUDIO_STORY_TEXT_1}}

{{STUDIO_STORY_TEXT_2}}

<!-- Design: Zwei-Spalten-Layout auf Desktop. Links Text, rechts ein atmosphärisches Bild des Studios (Location). -->

---

## Artists
### Unsere Künstler

<!-- Design: Grid-Layout für die Künstler. Jede Karte zeigt ein Porträt, Name, Stil und einen Link zum Portfolio. -->

#### {{ARTIST_1_NAME}}
**Style:** {{ARTIST_1_STYLE}}
{{ARTIST_1_BIO}}
<!-- Bild: Porträt von {{ARTIST_1_NAME}}, bevorzugt Schwarz-Weiß. {{ARTIST_1_IMAGE}} -->

#### {{ARTIST_2_NAME}}
**Style:** {{ARTIST_2_STYLE}}
{{ARTIST_2_BIO}}
<!-- Bild: Porträt von {{ARTIST_2_NAME}}, bevorzugt Schwarz-Weiß. {{ARTIST_2_IMAGE}} -->

---

## Portfolio
### Unsere Arbeiten

<!-- Design: Masonry-Grid oder responsives CSS-Grid. Filter-Buttons oberhalb der Galerie (All, Realism, Blackwork, etc.). -->
<!-- Bilder: Hochwertige, gut ausgeleuchtete Bilder von fertigen Tattoos. Keine Rötungen, kein Blut. -->

Kategorien: {{PORTFOLIO_CATEGORY_1}} | {{PORTFOLIO_CATEGORY_2}} | {{PORTFOLIO_CATEGORY_3}}

---

## FAQ
### Wissen & Vorbereitung

<!-- Design: Akkordeon-Stil für die Fragen. Ein Klick öffnet die Antwort fließend. -->

**Q: Wie bereite ich mich auf meinen Termin vor?**
A: Komm ausgeschlafen und gut gegessen zu deinem Termin. Verzichte 24 Stunden vorher auf Alkohol und blutverdünnende Medikamente.

**Q: Tut tätowieren weh?**
A: Ja, Tätowieren ist mit Schmerzen verbunden, aber das Empfinden ist sehr individuell und hängt stark von der Körperstelle ab. Wir sorgen für eine entspannte Atmosphäre und legen bei Bedarf Pausen ein.

**Q: Wie pflege ich mein neues Tattoo?**
A: Lass die Folie für die ersten 2-4 Stunden drauf. Danach vorsichtig mit lauwarmem Wasser und pH-neutraler Seife waschen. In den ersten 2 Wochen 2-3 mal täglich dünn mit spezieller Tattoo-Creme eincremen.

---

## Booking & Contact
### {{BOOKING_HEADLINE}}

{{BOOKING_TEXT}}

[ {{HERO_CTA_TEXT}} ]({{BOOKING_LINK}})

**Adresse:** {{ADDRESS}}<br>
**Stadt:** {{STUDIO_CITY}}<br>
**Phone:** {{PHONE}}<br>
**Email:** {{EMAIL}}<br>
**Instagram:** [@{{INSTAGRAM_HANDLE}}](https://instagram.com/{{INSTAGRAM_HANDLE}})

---

# 2️⃣ Design-System

**Farbpalette**
| Rolle | Variable | Hex | Verwendung |
|---|---|---|---|
| Primary | {{PRIMARY_COLOR}} | #C5A059 | Buttons, Hover-Effekte, Akzentlinien, Icons |
| Secondary | {{SECONDARY_COLOR}} | #1A1A1A | Karten-Hintergründe, Footer, abgesetzte Sektionen |
| Accent | {{ACCENT_COLOR}} | #F5F5F5 | Haupttext, helle Überschriften auf dunklem Grund |
| Background | {{BACKGROUND_COLOR}} | #050505 | Haupt-Hintergrundfarbe der gesamten Website |

**Typografie**
| Rolle | Variable | Schriftart | Stil |
|---|---|---|---|
| Headline | {{HEADING_FONT}} | Playfair Display | Serif, elegant, kursiv für Betonungen (italic) |
| Body | {{BODY_FONT}} | Inter | Sans-Serif, klar lesbar, modern, leichtes Gewicht |

**Ästhetik-Profil**
Das Design-System nutzt die Ästhetik "Dark Premium" und agiert minimalistisch. Es arbeitet mit sehr hohem Kontrast zwischen dem tiefschwarzen Hintergrund (`{{BACKGROUND_COLOR}}`) und der weißen Schrift (`{{ACCENT_COLOR}}`). Ein gedämpftes Gold (`{{PRIMARY_COLOR}}`) dient als alleinige Akzentfarbe, um Wertigkeit und Exklusivität auszustrahlen. Großflächige, abgedunkelte Hintergrundbilder und sanfte Fade-in Animationen erzeugen eine ruhige, fokussierte Atmosphäre, die die Kunst (Tätowierungen) unverfälscht in den Vordergrund stellt.

---

# 3️⃣ Variablen-Referenz

| Variable | Beschreibung | Pflicht | Beispiel |
|---|---|---|---|
| {{STUDIO_NAME}} | Name des Tattoo-Studios | ✅ | „INK & STORY" |
| {{STUDIO_TAGLINE}} | Kurzer Slogan oder Untertitel | ✅ | „Premium Tattoo Studio" |
| {{STUDIO_CITY}} | Standort-Stadt des Studios | ✅ | „Berlin" |
| {{PRIMARY_COLOR}} | Haupt-Akzentfarbe (Buttons, Links) | ✅ | „#C5A059" |
| {{SECONDARY_COLOR}} | Sekundäre Hintergrundfarbe (Sektionen) | ✅ | „#1A1A1A" |
| {{ACCENT_COLOR}} | Textfarbe auf dunklem Grund | ✅ | „#F5F5F5" |
| {{BACKGROUND_COLOR}} | Haupt-Hintergrundfarbe | ✅ | „#050505" |
| {{HEADING_FONT}} | Schriftart für alle Überschriften (H1-H6) | ✅ | „Playfair Display" |
| {{BODY_FONT}} | Schriftart für Fließtext und Navigation | ✅ | „Inter" |
| {{HERO_IMAGE}} | Pfad/URL zum Hauptbild im Hero-Bereich | ✅ | „/images/hero-tattoo.jpg" |
| {{HERO_SUBTEXT_1}} | Erster Satz über dem CTA im Hero | ✅ | „Ink that tells" |
| {{HERO_SUBTEXT_2}} | Zweiter Satz (oft kursiv betont) | ✅ | „your story" |
| {{HERO_CTA_TEXT}} | Beschriftung des primären Buttons | ✅ | „Termin buchen" |
| {{HERO_CTA_LINK}} | Ziel des primären Buttons | ✅ | „#booking" |
| {{STUDIO_STORY_HEADLINE}} | Überschrift der About-Sektion | ✅ | „Creative Excellence" |
| {{STUDIO_STORY_TEXT_1}} | Erster Absatz der Studio-Story | ✅ | „Wir glauben daran, dass jedes Tattoo eine einzigartige Geschichte erzählt..." |
| {{STUDIO_STORY_TEXT_2}} | Zweiter Absatz der Studio-Story (USPs) | ✅ | „Höchste Hygienestandards, vegane Premium-Farben und individuelle Beratung..." |
| {{ARTIST_1_NAME}} | Name des ersten Künstlers | ✅ | „Elena Rossi" |
| {{ARTIST_1_STYLE}} | Haupt-Stilrichtung des ersten Künstlers | ✅ | „Fine Line & Micro Realism" |
| {{ARTIST_1_BIO}} | Kurze Beschreibung des ersten Künstlers | ✅ | „Elena ist spezialisiert auf filigrane Details und florale Motive." |
| {{ARTIST_1_IMAGE}} | Pfad/URL zum Porträtfoto | ✅ | „/images/elena.jpg" |
| {{ARTIST_2_NAME}} | Name des zweiten Künstlers | ⬜ | „Marcus Chen" |
| {{ARTIST_2_STYLE}} | Haupt-Stilrichtung des zweiten Künstlers | ⬜ | „Dark Blackwork & Geometric" |
| {{ARTIST_2_BIO}} | Kurze Beschreibung des zweiten Künstlers | ⬜ | „Marcus kreiert großflächige, kontrastreiche Konzepte." |
| {{ARTIST_2_IMAGE}} | Pfad/URL zum Porträtfoto | ⬜ | „/images/marcus.jpg" |
| {{PORTFOLIO_CATEGORY_1}} | Name des ersten Filter-Tags | ✅ | „Fine Line" |
| {{PORTFOLIO_CATEGORY_2}} | Name des zweiten Filter-Tags | ⬜ | „Realism" |
| {{PORTFOLIO_CATEGORY_3}} | Name des dritten Filter-Tags | ⬜ | „Blackwork" |
| {{BOOKING_HEADLINE}} | Überschrift für die Kontakt-Sektion | ✅ | „Dein nächstes Kunstwerk" |
| {{BOOKING_TEXT}} | Einleitungstext vor dem Booking-Formular | ✅ | „Fülle das Formular aus, um einen Termin anzufragen." |
| {{BOOKING_LINK}} | URL zum Booking-Formular (z.B. Typeform/Calendly) | ✅ | „https://booking.studio.com" |
| {{INSTAGRAM_HANDLE}} | Instagram Nutzername (ohne @) | ✅ | „inkandstory" |
| {{PHONE}} | Telefonnummer für Kontakt | ⬜ | „+49 30 1234567" |
| {{EMAIL}} | E-Mail-Adresse für Kontakt | ✅ | „hello@inkandstory.de" |
| {{ADDRESS}} | Physische Adresse des Studios | ✅ | „Kastanienallee 12, 10435 Berlin" |

---

# 4️⃣ Anpassungsanleitung

**So passt du dieses Template für ein neues Studio an:**

1. **Studio-Identität** – Ersetze die Variablen `{{STUDIO_NAME}}`, `{{STUDIO_TAGLINE}}` und `{{STUDIO_CITY}}` durch die echten Daten des neuen Studios in der Navigation und Hero-Sektion.
2. **Farbpalette** – Prüfe das Branding des Studios. Wenn es nicht dunkel (Dark Premium) ist, passe `{{BACKGROUND_COLOR}}` zu Weiß/Hellgrau und `{{ACCENT_COLOR}}` zu Dunkelgrau/Schwarz an. Passe `{{PRIMARY_COLOR}}` zwingend an die Haupt-Markenfarbe (z.B. Neonpink, Blutrot) an.
3. **Typografie** – Ändere `{{HEADING_FONT}}` und `{{BODY_FONT}}` global über CSS/Tailwind. Nutze z.B. eine Old-English Schriftart für traditionelle Studios oder eine urbane Sans-Serif für moderne Konzept-Studios.
4. **Artists** – Trage die echten Künstler unter `{{ARTIST_1_NAME}}` usw. ein. Lade hochauflösende Porträtfotos in den Projektordner und setze die Bildpfade bei `{{ARTIST_1_IMAGE}}`. Kopiere den Markdown-Block für weitere Artists beliebig oft.
5. **Portfolio** – Ersetze die Beispieldaten in der Galerie. Gruppiere die Arbeiten des Studios sinnvoll und definiere die Hauptstilrichtungen in den Filter-Variablen `{{PORTFOLIO_CATEGORY_1}}` etc.
6. **Booking** – Falls das Studio eine eigene Software verwendet (z.B. Calendly, Shore, Timma), verlinke den Booking-Button im Hero und Footer über `{{BOOKING_LINK}}` darauf. Falls nicht, lasse ihn auf ein E-Mail-Kontaktformular zeigen.
7. **Studio Story** – Ersetze die Absätze `{{STUDIO_STORY_TEXT_1}}` und `{{STUDIO_STORY_TEXT_2}}`. Schreibe eine ehrliche Story über die Philosophie, die Künstler und Besonderheiten (vegan, walk-ins, guest spots).
8. **Kontaktdaten** – Fülle `{{ADDRESS}}`, `{{PHONE}}`, `{{EMAIL}}` und `{{INSTAGRAM_HANDLE}}` im Footer aus. Teste, ob der Instagram-Link zum richtigen Profil weiterleitet.
9. **SEO & Meta** – Aktualisiere Meta-Title und Description im `<head>` (z.B. "{{STUDIO_NAME}} | Tattoo Studio in {{STUDIO_CITY}}").
10. **Optionale Sektionen löschen** – Sind bestimmte Inhalte (wie "FAQ" oder ein "Zweiter Artist") nicht gewünscht, entferne die jeweiligen Markdown-Blöcke komplett, damit keine leeren Lücken auf der Seite entstehen.
