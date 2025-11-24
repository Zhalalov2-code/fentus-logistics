import '../App.css';
import '../css/impressum.css';
import fentusLogo from '../img/fentus-logo.png';

function Impressum() {
    return (
        <div className="App">
            <div className="impressum-container">
                <div className="impressum-content">
                    <a href="/" className="back-link">← Zurück zur Startseite</a>
                    <div className="impressum-header">
                        <img src={fentusLogo} alt="Fentus Logistics GmbH" className="impressum-logo" />
                        <h1>Impressum</h1>
                    </div>

                    <div className="impressum-section">
                        <h2>Angaben gemäß § 5 TMG</h2>
                        <div className="company-info">
                            <p><strong>Fentus Logistics GmbH</strong></p>
                            <p>Schnackenburgallee 149C</p>
                            <p>DE-22525 Hamburg</p>
                        </div>
                    </div>

                    <div className="impressum-section">
                        <h2>Kontakt</h2>
                        <div className="contact-info">
                            <p><strong>Telefon:</strong> +49 (0) 40 285 30 82-0</p>
                            <p><strong>Telefax:</strong> +49 (0) 40 285 30 82-0</p>
                            <p><strong>E-Mail:</strong> info@fentus.de</p>
                            <p><strong>Website:</strong> www.fentus-logistics.de</p>
                        </div>
                    </div>

                    <div className="impressum-section">
                        <h2>Handelsregister</h2>
                        <div className="register-info">
                            <p>Sitz der Gesellschaft: Hamburg</p>
                            <p>Amtsgericht Hamburg: HRB 140577</p>
                            <p>Steuernummer: 45/720/00910</p>
                            <p>USt-IdNr.: DE815627501</p>
                        </div>
                    </div>

                    <div className="impressum-section">
                        <h2>Geschäftsführung</h2>
                        <div className="management-info">
                            <p>Geschäftsführer: Mustafa Saracbasi, Chihangir Ali Hasoglu, Aleksander Kinsfator</p>
                        </div>
                    </div>

                    <div className="impressum-section">
                        <h2>Haftungsbeschränkung</h2>
                        <div className="liability-info">
                            <p>
                                Wir arbeiten ausschließlich auf Grundlage der Allgemeinen Deutschen
                                Spediteurbedingungen 2017 (ADSp 2017). Diese beschränken in Ziffer 23
                                die gesetzliche Haftung für Güterschäden nach § 431 HGB in Höhe von
                                8,33 SZR/kg je Schadenfall bzw. je Schadenereignis auf 1,25 Million
                                bzw. 2,5 Millionen Euro oder 2 SZR/kg, je nachdem, welcher Betrag
                                höher ist, und bei multimodalen Transporten unter Einschluss einer
                                Seebeförderung generell auf 2 SZR/kg.
                            </p>
                        </div>
                    </div>

                    <div className="impressum-section">
                        <h2>Online-Streitbeilegung</h2>
                        <div className="dispute-info">
                            <p>
                                Die Europäische Kommission stellt eine Plattform für die außergerichtliche
                                Online-Streitbeilegung (OS-Plattform) bereit, die unter
                                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                                    www.ec.europa.eu/consumers/odr
                                </a> aufrufbar ist. Wir sind weder verpflichtet noch bereit, an dem
                                Streitschlichtungsverfahren teilzunehmen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impressum;