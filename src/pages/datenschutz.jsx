import '../App.css';
import './datenschutz.css';
import fentusLogo from '../img/fentus-logo.png';

function Datenschutz() {
    return (
        <div className="App">
            <div className="datenschutz-container">
                <div className="datenschutz-content">
                    <a href="/" className="back-link">← Zurück zur Startseite</a>
                    <div className="datenschutz-header">
                        <img src={fentusLogo} alt="Fentus Logistics GmbH" className="datenschutz-logo" />
                        <h1>Datenschutzerklärung</h1>
                    </div>

                    <div className="datenschutz-intro">
                        <p>
                            Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen
                            Stellenwert für die Geschäftsleitung der Fentus Logistics GmbH. Eine Nutzung der Internetseiten der
                            Fentus Logistics GmbH ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine
                            betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen
                            möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung
                            personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage,
                            holen wir generell eine Einwilligung der betroffenen Person ein.
                        </p>
                        <p>
                            Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder
                            Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und
                            in Übereinstimmung mit den für die Fentus Logistics GmbH geltenden landesspezifischen Datenschutzbestimmungen.
                            Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck
                            der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene
                            Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
                        </p>
                        <p>
                            Die Fentus Logistics GmbH hat als für die Verarbeitung Verantwortlicher zahlreiche technische und
                            organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite
                            verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen
                            grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann.
                            Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen,
                            beispielsweise telefonisch, an uns zu übermitteln.
                        </p>
                    </div>

                    <div className="datenschutz-section">
                        <h2>1. Begriffsbestimmungen</h2>
                        <p>
                            Die Datenschutzerklärung der Fentus Logistics GmbH beruht auf den Begrifflichkeiten, die durch den
                            Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO)
                            verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere
                            Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten
                            wir vorab die verwendeten Begrifflichkeiten erläutern.
                        </p>
                        <p>Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:</p>

                        <div className="definition-item">
                            <h3>a) personenbezogene Daten</h3>
                            <p>
                                Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
                                natürliche Person (im Folgenden „betroffene Person") beziehen. Als identifizierbar wird eine natürliche
                                Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                                zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen
                                Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen,
                                kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>b) betroffene Person</h3>
                            <p>
                                Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene
                                Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>c) Verarbeitung</h3>
                            <p>
                                Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede
                                solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die
                                Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen,
                                die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung,
                                den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>d) Einschränkung der Verarbeitung</h3>
                            <p>
                                Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel,
                                ihre künftige Verarbeitung einzuschränken.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>e) Profiling</h3>
                            <p>
                                Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht,
                                dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf
                                eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung,
                                wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                                Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>f) Pseudonymisierung</h3>
                            <p>
                                Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die
                                personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen
                                betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert
                                aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten,
                                dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen
                                Person zugewiesen werden.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>g) Verantwortlicher oder für die Verarbeitung Verantwortlicher</h3>
                            <p>
                                Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person,
                                Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
                                Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser
                                Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche
                                beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der
                                Mitgliedstaaten vorgesehen werden.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>h) Auftragsverarbeiter</h3>
                            <p>
                                Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle,
                                die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>i) Empfänger</h3>
                            <p>
                                Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der
                                personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt
                                oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem
                                Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>j) Dritter</h3>
                            <p>
                                Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der
                                betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der
                                unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die
                                personenbezogenen Daten zu verarbeiten.
                            </p>
                        </div>

                        <div className="definition-item">
                            <h3>k) Einwilligung</h3>
                            <p>
                                Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter
                                Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen
                                eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der
                                Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
                            </p>
                        </div>
                    </div>

                    <div className="datenschutz-section">
                        <h2>2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
                        <p>
                            Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der
                            Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem
                            Charakter ist die:
                        </p>
                        <div className="company-info">
                            <p><strong>Fentus Logistics GmbH</strong></p>
                            <p>Schnackenburgallee 149C</p>
                            <p>DE-22525 Hamburg</p>
                            <p>Deutschland</p>
                            <p>Tel.: +49 (0) 40 123 456 70</p>
                            <p>E-Mail: info@fentus-logistics.de</p>
                            <p>Website: www.fentus-logistics.de</p>
                        </div>
                    </div>

                    <div className="datenschutz-section">
                        <h2>3. Cookies</h2>
                        <p>
                            Die Internetseiten der Fentus Logistics GmbH verwenden Cookies. Cookies sind Textdateien, welche über
                            einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.
                        </p>
                        <p>
                            Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID.
                            Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche
                            Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie
                            gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser
                            der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein
                            bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.
                        </p>
                        <p>
                            Durch den Einsatz von Cookies kann die Fentus Logistics GmbH den Nutzern dieser Internetseite
                            nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.
                        </p>
                        <p>
                            Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer
                            entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies
                            dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder
                            andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen Internetbrowsern möglich. Deaktiviert
                            die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter Umständen nicht
                            alle Funktionen unserer Internetseite vollumfänglich nutzbar.
                        </p>
                    </div>

                    <div className="datenschutz-section">
                        <h2>4. Erfassung von allgemeinen Daten und Informationen</h2>
                        <p>
                            Die Internetseite der Fentus Logistics GmbH erfasst mit jedem Aufruf der Internetseite durch eine
                            betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen.
                            Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden
                            können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete
                            Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite
                            gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer
                            Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite,
                            (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden
                            Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen
                            auf unsere informationstechnologischen Systeme dienen.
                        </p>
                    </div>

                    <div className="datenschutz-section">
                        <h2>5. Kontaktmöglichkeit über die Internetseite</h2>
                        <p>
                            Die Internetseite der Fentus Logistics GmbH enthält aufgrund von gesetzlichen Vorschriften Angaben, die
                            eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation
                            mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse)
                            umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die
                            Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen
                            Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die
                            Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder
                            der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen
                            Daten an Dritte.
                        </p>
                    </div>

                    <div className="datenschutz-section">
                        <h2>6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
                        <p>
                            Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen
                            Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies
                            durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder
                            Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.
                        </p>
                        <p>
                            Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder
                            einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen
                            Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
                        </p>
                    </div>

                    <div className="datenschutz-section">
                        <h2>7. Rechte der betroffenen Person</h2>

                        <div className="rights-subsection">
                            <h3>a) Recht auf Bestätigung</h3>
                            <p>
                                Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht,
                                von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende
                                personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in
                                Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
                                Verantwortlichen wenden.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>b) Recht auf Auskunft</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen
                                unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie
                                dieser Auskunft zu erhalten.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>c) Recht auf Berichtigung</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender
                                unrichtiger personenbezogener Daten zu verlangen.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>d) Recht auf Löschung (Recht auf Vergessen werden)</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die
                                sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>e) Recht auf Einschränkung der Verarbeitung</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der
                                Verarbeitung zu verlangen.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>f) Recht auf Datenübertragbarkeit</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten,
                                welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten,
                                gängigen und maschinenlesbaren Format zu erhalten.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>g) Recht auf Widerspruch</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen
                                Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten
                                Widerspruch einzulegen.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten
                                Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden.
                            </p>
                        </div>

                        <div className="rights-subsection">
                            <h3>i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h3>
                            <p>
                                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                                Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung
                                personenbezogener Daten jederzeit zu widerrufen.
                            </p>
                        </div>
                    </div>

                    <div className="datenschutz-section">
                        <h2>8. Rechtsgrundlage der Verarbeitung</h2>
                        <p>
                            Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen
                            wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener
                            Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies
                            beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung
                            einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO.
                        </p>
                    </div>

                    <div className="datenschutz-section">
                        <h2>9. Bestehen einer automatisierten Entscheidungsfindung</h2>
                        <p>
                            Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder
                            ein Profiling.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datenschutz;