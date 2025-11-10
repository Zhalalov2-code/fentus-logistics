import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../css/AnfrageModal.css'

function AnfrageModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        firma: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    // Инициализация EmailJS
    useEffect(() => {
        // Замените на ваш Public Key после настройки
        emailjs.init('YOUR_PUBLIC_KEY');
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // EmailJS конфигурация - замените на ваши данные после настройки
            const serviceId = 'YOUR_SERVICE_ID';        // Получите на шаге 3
            const templateId = 'YOUR_TEMPLATE_ID';      // Получите на шаге 4
            const publicKey = 'YOUR_PUBLIC_KEY';        // Получите на шаге 5
            
            const templateParams = {
                from_name: formData.name,
                from_firma: formData.firma || 'Nicht angegeben',
                from_email: formData.email,
                from_phone: formData.phone || 'Nicht angegeben',
                message: formData.message,
                to_email: 'info@fentus-logistics.de', // Ваш email для получения писем
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            alert('Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns bald bei Ihnen.');
            setIsLoading(false);
            handleClose();
            
        } catch (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
            setIsLoading(false);
            
            // Fallback на mailto если EmailJS не работает
            const subject = `Anfrage von ${formData.name}${formData.firma ? ` - ${formData.firma}` : ''}`;
            const body = `
Name: ${formData.name}
${formData.firma ? `Firma: ${formData.firma}` : ''}
E-Mail: ${formData.email}
${formData.phone ? `Telefon: ${formData.phone}` : ''}

Nachricht:
${formData.message}
            `.trim();

            const mailtoLink = `mailto:info@fentus-logistics.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            
            alert('Es gab ein Problem mit der automatischen Übermittlung. Ihr E-Mail-Programm wird geöffnet.');
            handleClose();
        }
    };

    const handleClose = () => {
        setFormData({
            name: '',
            firma: '',
            email: '',
            phone: '',
            message: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Anfrage senden</h2>
                    <button className="modal-close" onClick={handleClose}>
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="modal-name">Name *</label>
                            <input
                                type="text"
                                id="modal-name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Ihr vollständiger Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modal-firma">Firma</label>
                            <input
                                type="text"
                                id="modal-firma"
                                name="firma"
                                value={formData.firma}
                                onChange={handleInputChange}
                                placeholder="Name Ihres Unternehmens"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="modal-email">E-Mail *</label>
                            <input
                                type="email"
                                id="modal-email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="ihre.email@beispiel.de"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modal-phone">Telefonnummer</label>
                            <input
                                type="tel"
                                id="modal-phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+49 40 123 456 789"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="modal-message">Nachricht *</label>
                        <textarea
                            id="modal-message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Beschreiben Sie Ihre Anfrage detailliert..."
                            required
                        ></textarea>
                    </div>
                    <div className="modal-actions">
                        <button type="button" onClick={handleClose} className="btn-secondary" disabled={isLoading}>
                            Abbrechen
                        </button>
                        <button type="submit" className="btn-primary" disabled={isLoading}>
                            {isLoading ? 'Wird gesendet...' : 'Anfrage senden'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AnfrageModal;