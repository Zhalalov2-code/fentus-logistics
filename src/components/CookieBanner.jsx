import { useState, useEffect } from 'react';
import '../css/CookieBanner.css';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Проверяем, есть ли уже согласие пользователя
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Показываем баннер с небольшой задержкой
            setTimeout(() => {
                setIsVisible(true);
                setIsAnimating(true);
            }, 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieTimestamp', new Date().toISOString());
        closeBanner();
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        localStorage.setItem('cookieTimestamp', new Date().toISOString());
        closeBanner();
    };

    const closeBanner = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className={`cookie-overlay ${isAnimating ? 'active' : ''}`} />
            <div className={`cookie-banner ${isAnimating ? 'active' : ''}`}>
                <div className="cookie-content">
                    <div className="cookie-text">
                        <h3>Wir verwenden Cookies</h3>
                        <p>
                            Diese Website nutzt Cookies oder Drittanbieterdienste nur mit Ihrem Einverständnis - jederzeit widerruflich und freiwillig!
                        </p>
                        <p className="cookie-details">
                            <a href="/src/pages/datenschutz" target="_blank" rel="noopener noreferrer">
                                Mehr erfahren in unserer Datenschutzerklärung
                            </a>
                        </p>
                    </div>
                    <div className="cookie-actions">
                        <button
                            className="cookie-btn cookie-accept"
                            onClick={handleAccept}
                        >
                            Alle akzeptieren
                        </button>
                        <button
                            className="cookie-btn cookie-decline"
                            onClick={handleDecline}
                        >
                            Ablehnen
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookieBanner;