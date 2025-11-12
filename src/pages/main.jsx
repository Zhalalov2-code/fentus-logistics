import '../App.css';
import fentusLogo from '../img/fentus-logo.png';
import { useState, useEffect, useRef } from 'react';
import AnfrageModal from '../components/AnfrageModal';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import icon7 from '../img/icon7.png';
import icon8 from '../img/icon8.png';
import icon9 from '../img/icon9.png';
import icon10 from '../img/icon10.png';
import icon11 from '../img/icon11.png';
import icon12 from '../img/icon12.png';
import icon13 from '../img/icon13.png';
import icon14 from '../img/icon14.png';
import icon15 from '../img/icon15.png';
import icon16 from '../img/icon16.png';
import icon17 from '../img/icon17.png';

function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [containers, setContainers] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
        setIsMobileMenuOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Intersection Observer для запуска анимации при появлении блока
    useEffect(() => {
        const currentRef = statsRef.current;
        
        // Функция анимации счётчиков
        const animateCounters = () => {
            const duration = 2000; // 2 секунды
            const fps = 60;
            const steps = duration / (1000 / fps);
            
            // Анимация для контейнеров (до 500)
            let currentContainer = 0;
            const containerStep = 500 / steps;
            const containerInterval = setInterval(() => {
                currentContainer += containerStep;
                if (currentContainer >= 500) {
                    setContainers(500);
                    clearInterval(containerInterval);
                } else {
                    setContainers(Math.floor(currentContainer));
                }
            }, 1000 / fps);

            // Анимация для процента доставки (до 98)
            let currentDelivery = 0;
            const deliveryStep = 98 / steps;
            const deliveryInterval = setInterval(() => {
                currentDelivery += deliveryStep;
                if (currentDelivery >= 98) {
                    setDelivery(98);
                    clearInterval(deliveryInterval);
                } else {
                    setDelivery(Math.floor(currentDelivery));
                }
            }, 1000 / fps);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    return (
        <div className="App">
            <header className="top-nav">
                <div className="brand">
                    <img src={fentusLogo} alt="Fentus Logistics GmbH" className="brand-logo" />
                </div>

                {/* Desktop Navigation */}
                <nav>
                    <a href="#about">Über uns</a>
                    <a href="#services">Leistungen</a>
                    <a href="#contact">Kontakt</a>
                    <a href="#map">Standort</a>
                    <span className="nav-anfrage-link" onClick={openModal}>Anfrage</span>
                </nav>
                <a className="nav-cta" href="#contact">
                    Kontakt aufnehmen
                </a>

                {/* Mobile Burger Menu */}
                <button
                    className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Mobile Menu"
                >
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </button>
            </header>

            {/* Mobile Navigation Overlay */}
            <div
                className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            {/* Mobile Navigation Menu */}
            <nav className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <button 
                    className="mobile-menu-close" 
                    onClick={closeMobileMenu}
                    aria-label="Menü schließen"
                ></button>
                <a href="#about" onClick={closeMobileMenu}>Über uns</a>
                <a href="#services" onClick={closeMobileMenu}>Leistungen</a>
                <a href="#contact" onClick={closeMobileMenu}>Kontakt</a>
                <a href="#map" onClick={closeMobileMenu}>Standort</a>
                <span className="nav-item" onClick={openModal}>Anfrage</span>
                <a className="mobile-nav-cta" href="#contact" onClick={closeMobileMenu}>
                    Kontakt aufnehmen
                </a>
            </nav>

            <main>
                <section id="hero" className="hero">
                    <div className="hero-content">
                        <h1>Stark im Hafen, professionell im Transport. Hafenservice in besten Händen.</h1>
                        <br />
                        <div className="hero-actions">
                            <a className="primary-btn" href="#contact">
                                Kontakt
                            </a>
                            <a className="secondary-btn" href="#services">
                                Mehr erfahren
                            </a>
                        </div>
                        <div className="hero-stats" ref={statsRef}>
                            <div>
                                <span className="stat-number">{containers}+</span>
                                <span className="stat-label">Container monatlich</span>
                            </div>
                            <div>
                                <span className="stat-number">{delivery}%</span>
                                <span className="stat-label">pünktliche Lieferungen</span>
                            </div>
                            <div>
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">operative Unterstützung</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="section about">
                    <div className="section-header">
                        <span className="eyebrow">Über das Unternehmen</span>
                        <h2>Fentus Logistics — Ihr flexibler Partner für Container- und Seefrachttransporte</h2>
                        <p>
                            Fentus Logistics steht für zuverlässige Lösungen im nationalen und internationalen Containerverkehr.
                            Unser Schwerpunkt liegt auf der Organisation und Abwicklung von Seefrachttransporten – effizient, sicher und termingerecht.
                        </p>
                        <p>
                            Durch unser starkes Netzwerk erfahrener Dienstleister mit eigenen Fahrzeugen können wir flexibel auf jede Situation reagieren.
                            Ob einzelne Container oder größere Projekte – mit Fentus Logistics haben Sie einen Partner, der schnell handelt,
                            transparent kommuniziert und sich um jedes Detail kümmert.
                        </p>
                    </div>
                    <div className="about-grid">
                        <article>
                            <h3>Partnernetzwerk</h3>
                            <p>
                                Über 120 verlässliche Agenten in den wichtigsten Häfen Europas, Asiens und des Nahen Ostens.
                                Schnelle Buchungsbestätigungen, stabile Kapazitäten auch bei Engpässen und flexible Routenoptionen
                                für eilige oder sensible Sendungen.
                            </p>
                        </article>
                        <article>
                            <h3>Kontrolltechnologien</h3>
                            <p>
                                Moderne Track-&-Trace-Systeme, automatischer Statusabgleich und Benachrichtigungen zu Dokumenten
                                und Ankunftszeiten geben Ihnen jederzeit ein klares Bild Ihrer Sendung. Abweichungen werden früh erkannt,
                                Prognosen laufend aktualisiert.
                            </p>
                        </article>
                        <article>
                            <h3>Branchenfokus</h3>
                            <p>
                                Wir konzentrieren uns auf Branchen, in denen wir zuhause sind: Maschinenbau, FMCG, E-Commerce und Chemieindustrie.
                                Gemeinsam definieren wir Anforderungen und entwickeln abgestimmte Transport- und Lagerkonzepte,
                                die im Alltag bestehen.
                            </p>
                        </article>
                    </div>
                </section>

                <section id="services" className="section services">
                    <div className="section-header">
                        <span className="eyebrow">LEISTUNGEN</span>
                        <h2>Umfassende Logistik- und Transportdienstleistungen</h2>
                    </div>
                    <div className="service-grid">
                        <article>
                            <h3><img src={icon1} alt="" className="service-icon" />Hafenumfuhren</h3>
                            {/* <p>Professionelle Hafenumfuhren und Containertransporte</p> */}
                        </article>
                        <article>
                            <h3><img src={icon2} alt="" className="service-icon" />Nah- und Fernverkehr</h3>
                            {/* <p>Zuverlässige Transport­lösungen im regionalen und überregionalen Bereich</p> */}
                        </article>
                        <article>
                            <h3><img src={icon3} alt="" className="service-icon" />Gefahrguttransport</h3>
                            {/* <p>Sichere Beförderung von Gefahrgütern nach ADR-Vorschriften</p> */}
                        </article>
                        <article>
                            <h3><img src={icon4} alt="" className="service-icon" />Internationaler Transport</h3>
                            {/* <p>Grenzüberschreitende Transportdienstleistungen europaweit</p> */}
                        </article>
                        <article>
                            <h3><img src={icon5} alt="" className="service-icon" />Abfalltransport</h3>
                            {/* <p>Fachgerechte Entsorgung und Transport von Abfallstoffen</p> */}
                        </article>
                        <article>
                            <h3><img src={icon6} alt="" className="service-icon" />Kühlcontainer Transport</h3>
                            {/* <p>Temperaturgeführte Transporte für empfindliche Güter</p> */}
                        </article>
                        <article>
                            <h3><img src={icon7} alt="" className="service-icon" />Chassis für Container</h3>
                            {/* <p>Bereitstellung von Chassis für Containertransporte</p> */}
                        </article>
                        <article>
                            <h3><img src={icon8} alt="" className="service-icon" />Zollabwicklung</h3>
                            {/* <p>Professionelle Zollabfertigung und Dokumentenbearbeitung</p> */}
                        </article>
                        <article>
                            <h3><img src={icon9} alt="" className="service-icon" />Warenlagerung</h3>
                            {/* <p>Sichere Lagerung und Kommissionierung Ihrer Güter</p> */}
                        </article>
                        <article>
                            <h3><img src={icon10} alt="" className="service-icon" />VGM SOLAS</h3>
                            {/* <p>Verified Gross Mass Wiegungen nach SOLAS-Konvention</p> */}
                        </article>
                        <article>
                            <h3><img src={icon11} alt="" className="service-icon" />Containerlagerung</h3>
                            {/* <p>Zwischenlagerung von Containern auf unseren Depotflächen</p> */}
                        </article>
                        <article>
                            <h3><img src={icon12} alt="" className="service-icon" />Container Be- und Entladung</h3>
                            {/* <p>Professionelle Stuffing und Stripping Services</p> */}
                        </article>
                        <article>
                            <h3><img src={icon13} alt="" className="service-icon" />Container Fahrzeugverladung</h3>
                            {/* <p>Spezielle Verladung von Fahrzeugen in Container</p> */}
                        </article>
                        <article>
                            <h3><img src={icon14} alt="" className="service-icon" />Kühlcontainer Anschluss</h3>
                            {/* <p>Reefer-Monitoring und Temperaturüberwachung</p> */}
                        </article>
                        <article>
                            <h3><img src={icon15} alt="" className="service-icon" />Seemäßige Verpackung</h3>
                            {/* <p>Fachgerechte Verpackung für Seefrachttransporte</p> */}
                        </article>
                        <article>
                            <h3><img src={icon16} alt="" className="service-icon" />Waggon Be- und Entladung</h3>
                            {/* <p>Umschlag zwischen Bahn und anderen Verkehrsträgern</p> */}
                        </article>
                        <article>
                            <h3><img src={icon17} alt="" className="service-icon" />Sonderfahrten und Eiltransporte</h3>
                            {/* <p>Express-Transporte und individuelle Sonderlösungen</p> */}
                        </article>
                    </div>
                    <div className="highlight">
                        <h3>Flexible SLAs und transparente Preise</h3>
                        <p>
                            Unsere Verträge passen sich Ihrem Bedarf an – egal ob Volumen, Saisonspitzen oder besondere 
                            Anforderungen. Frühzeitige Statusmeldungen und Analytics-Zugang halten Sie jederzeit informiert.
                        </p>
                    </div>
                </section>

                <section className="section team">
                    <div className="section-header">
                        <span className="eyebrow">UNSER TEAM</span>
                        <h2>Zuverlässig. Engagiert. Immer an Ihrer Seite.</h2>
                        <p>Sie suchen einen zuverlässigen Partner für Ihren Auftrag?</p>
                    </div>
                    <div className="team-content">
                        <p>
                            Bei Fentus Logistics steht Ihr Auftrag im Mittelpunkt. Wir kümmern uns um jedes Detail – 
                            von der Planung bis zur sicheren Ankunft Ihrer Güter.
                        </p>
                        <p>
                            Seit über 10 Jahren verbinden wir Erfahrung mit moderner Organisation. Ob Spedition, Logistik 
                            oder Hafenservice – wir entwickeln Lösungen, die passen: effizient, flexibel und auf Ihre 
                            Bedürfnisse zugeschnitten.
                        </p>
                        <p>
                            Wir begleiten unsere Kunden persönlich, denken mit und handeln vorausschauend – 
                            damit alles reibungslos läuft. Vertrauen Sie auf Fentus Logistics – Ihr Partner, 
                            wenn Zuverlässigkeit und Qualität zählen.
                        </p>
                    </div>
                </section>

                <section className="section testimonials">
                    <div className="section-header">
                        <span className="eyebrow">Vertrauen uns</span>
                        <h2>Kundenbewertungen</h2>
                    </div>
                    <div className="testimonial-grid">
                        <blockquote>
                            <p>
                                Ein sehr empfehlenswertes Firma auf jedenfall bester Container Transporter Weltweit!!!!
                            </p>
                            <cite>Alperen Kocak</cite>
                        </blockquote>
                        <blockquote>
                            <p>

                                Bester Container Transporter Weltweit.
                            </p>
                            <cite>Ali Reza Sekander</cite>
                        </blockquote>
                    </div>
                </section>

                <section id="contact" className="section contact">
                    <div className="contact-card">
                        <h2>Kontaktieren Sie uns</h2>
                        <p>
                            Erzählen Sie uns von Ihrer Aufgabe und wir erstellen Ihnen ein
                            individuelles Angebot in weniger als 24 Stunden.
                        </p>
                        <div className="contact-details">
                            <div>
                                <h3>Büro in Hamburg</h3>
                                <p>
                                    Fentus Logistics GmbH<br />
                                    Schnackenburgallee 149C<br />
                                    22525 Hamburg, Germany
                                </p>
                            </div>
                            <div>
                                <h3>Kontaktdaten</h3>
                                <p>
                                    Tel.: +49 40 123 456 70<br />
                                    Email: hello@fentus-logistics.de<br />
                                </p>
                            </div>
                        </div>
                        <form className="contact-form">
                            <input type="text" name="name" placeholder="Name und Unternehmen" />
                            <input type="email" name="email" placeholder="E-Mail" />
                            <input type="tel" name="phone" placeholder="Telefon" />
                            <textarea name="message" rows="4" placeholder="Beschreiben Sie Fracht und Richtung" />
                            <button type="submit">Anfrage senden</button>
                        </form>
                    </div>
                    <aside className="contact-info">
                        <div className="info-block">
                            <span className="info-title">Arbeitszeiten</span>
                            <span className="info-text">Mo–Fr 08:30–19:00 CET</span>
                        </div>
                        <div className="info-block">
                            <span className="info-title">Sprachen</span>
                            <span className="info-text">Deutsch • English • Русский</span>
                        </div>
                    </aside>
                </section>

                <section id="map" className="section map-section">
                    <div className="section-header">
                        <span className="eyebrow">Standort</span>
                        <h2>Unser Büro auf der Schnackenburgallee in Hamburg</h2>
                        <p>
                            Wir befinden uns in der Schnackenburgallee 149C, 22525 Hamburg in einem
                            entwickelten Geschäftsviertel Hamburgs. Günstige Lage mit ausgezeichneter
                            Verkehrsanbindung und Nähe zu den wichtigsten Logistikrouten Norddeutschlands.
                        </p>
                    </div>
                    <div className="large-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.4926219286447!2d10.000185215766847!3d53.54558548002718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1867929836611%3A0x500d9aa792c12a09!2sAm%20Sandtorkai%2039%2C%2020457%20Hamburg%2C%20Germany!5e0!3m2!1sen!2sde!4v1635789012345!5m2!1sen!2sde"
                            width="100%"
                            height="600"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Standort Fentus Logistics in Hamburg"
                            className="large-map"
                        ></iframe>
                    </div>
                </section>
            </main>

            {/* Modal für Anfrage */}
            <AnfrageModal isOpen={isModalOpen} onClose={closeModal} />

            <footer className="footer">
                <div>
                    <strong>Fentus Logistics GmbH</strong>
                </div>
                <div className="footer-links">
                    <a href="/src/pages/impressum">Impressum,</a>
                    <a href="/src/pages/datenschutz">Datenschutz</a>
                </div>
                <div className="footer-note">© {new Date().getFullYear()} Fentus Logistics GmbH. Alle Rechte vorbehalten.</div>
            </footer>
        </div>
    );
}

export default Main;
