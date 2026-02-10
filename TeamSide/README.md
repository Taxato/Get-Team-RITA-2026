# Dette er vår teamside

### Remy, Isak, Thomas & Andreas

#### Funksjoner og ansvar:

- Controller
    - addInfo
        - Henter teksten fra inputelement med id "info-input"
        - Sjekker hvem currentSelected er, og så oppdaterer modellen/infoen til personen som er selected med tilføyd informasjon
    - updateInfo
        - Kobler sammen modell og view for å velge/vise riktig info basert på hvilken knapp man trykker

- View
    - updateView
        - Sette sammen all HTML og legge det på nettsiden
    - showColorSelect
        - Tegne opp farge-selection dropdown menyen
    - showInfoSection
        - Tegne opp knappene for å velge hvilken person sin info vi vil vise
        - Linke onclick til alle knappene med riktig funksjons-argumenter
    - showInfoTextAndForm
        - Sjekker om vi har valgt en person
        - Displayer både showInfoText() og showAddInfoForm()
    - showInfoText
        - Tegne infoteksten til personen vi har valgt
    - showAddInfoForm
        - Tegne opp "form" element for å legge til ny info
    - showHeader
        - Sjekke hvilken farge headertekst skal ha
        - Tegne opp Header
    - showNavBar
        - Tegne opp NavBar
    - showFooter
        - Tegne opp Footer
