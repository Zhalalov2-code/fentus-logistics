import '../css/bewertungen.css'

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJEWaDKXmGsUcRCSrBkqeaDVA';

const REVIEWS_DATA = [
    { 
        id: 1, 
        rating: 5, 
        text: 'Ein sehr empfehlenswertes Firma auf jedenfall bester Container Transporter Weltweit!!!!',
        time: 'vor einem Jahr'
    },
    { 
        id: 2, 
        rating: 4, 
        text: 'Very reliable partner. The only minor issue was a slight delay in document processing, otherwise great.',
        time: 'vor einem Jahr'
    },
    { 
        id: 3, 
        rating: 5, 
        text: 'Ein sehr empfehlenswertes Firma auf jedenfall bester Container Transporter Weltweit!!!!',
        time: 'vor einem Jahr'
    },
    { 
        id: 4, 
        rating: 5, 
        text: 'Bester Container Transporter Weltweit.',
        time: 'vor 4 Jahren'
    },
];


const Bewertungen = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const renderStars = (count) => {
        return '★'.repeat(count) + '☆'.repeat(5 - count);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                
                <h3 className="modal-title">Fentus Logistics GmbH Hamburg</h3>
                <div className="overall-rating">
                    <span className="rating-text">5 Exzellent</span>
                    <div className="star-display">
                        {renderStars(5)}
                    </div>
                </div>
                <p className="source-info">Ermittelt aus Kundenbewertungen von Google</p>
                <hr className="divider"/>
                
                <div className="reviews-list-container">
                    {REVIEWS_DATA.slice(0, 5).map(review => (
                        <div key={review.id} className="review-item">
                            <div className="review-header">
                                <span className="review-source-icon">G+</span> 
                                <span className="review-stars">{renderStars(review.rating)}</span>
                                <span className="review-time">{review.time}</span>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <hr className="divider-small"/>
                        </div>
                    ))}
                </div>

                <div className="modal-actions">
                    <a 
                        href={GOOGLE_REVIEW_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn secondary"
                    >
                        Weitere Bewertungen
                    </a>
                    <a 
                        href={GOOGLE_REVIEW_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn primary"
                    >
                        Bewertung schreiben
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bewertungen;