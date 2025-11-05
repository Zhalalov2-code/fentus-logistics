# Настройка отправки email для формы

## Вариант 1: EmailJS (Рекомендуется)

### Шаги настройки:

1. **Регистрация на EmailJS:**
   - Зайдите на https://www.emailjs.com/
   - Зарегистрируйтесь бесплатно
   - Подтвердите email

2. **Настройка Email Service:**
   - В панели управления выберите "Email Services"
   - Добавьте Gmail/Outlook/другой сервис
   - Следуйте инструкциям для подключения

3. **Создание Email Template:**
   - Перейдите в "Email Templates"
   - Создайте новый шаблон
   - Используйте следующие переменные:
     ```
     Neue Anfrage von der Website

     Name: {{from_name}}
     Firma: {{from_firma}}
     Email: {{from_email}}
     Telefon: {{from_phone}}

     Nachricht:
     {{message}}
     ```

4. **Получение ключей:**
   - Service ID: из раздела "Email Services"
   - Template ID: из раздела "Email Templates"
   - Public Key: из "Account" → "General"

5. **Обновление кода:**
   - Откройте `/src/components/AnfrageModal.jsx`
   - Раскомментируйте EmailJS код
   - Замените YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
   - Закомментируйте mailto код

## Вариант 2: Mailto (Текущий)

Сейчас используется простое решение через mailto:
- Открывает почтовый клиент пользователя
- Предзаполняет письмо
- Пользователь должен нажать "Отправить"

## Вариант 3: Netlify Forms

Если сайт хостится на Netlify:
1. Добавьте `netlify` атрибут к форме
2. Netlify автоматически обработает отправку

## Вариант 4: Formspree

1. Зарегистрируйтесь на https://formspree.io/
2. Создайте новую форму
3. Получите endpoint URL
4. Используйте fetch для отправки данных

## Вариант 5: Собственный бэкенд

Создайте API endpoint с Node.js + Nodemailer:
```javascript
// server.js
const nodemailer = require('nodemailer');

app.post('/api/contact', async (req, res) => {
  // Настройка transporter
  // Отправка email
});
```

## Рекомендация:
Для продакшена используйте EmailJS - это самое простое и надежное решение без необходимости в собственном сервере.