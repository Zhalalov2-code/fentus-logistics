# 🚀 EMAILJS НАСТРОЙКА - ПОШАГОВАЯ ИНСТРУКЦИЯ

## ⏰ Займет всего 5 минут!

### 📋 **ШАГ 1: Регистрация на EmailJS**

1. Откройте: **https://www.emailjs.com/**
2. Нажмите **"Sign Up"** (правый верхний угол)
3. Выберите **"Sign up with Google"** (быстрее) или заполните форму
4. Подтвердите email если нужно

---

### 📧 **ШАГ 2: Подключите Email сервис**

1. В панели управления нажмите **"Email Services"** (слева)
2. Нажмите **"Add New Service"**
3. Выберите **"Gmail"** (или ваш почтовый сервис)
4. Нажмите **"Connect Account"**
5. Войдите в ваш Gmail аккаунт 
6. Разрешите доступ EmailJS
7. **СОХРАНИТЕ SERVICE ID** - понадобится для кода!

---

### 📝 **ШАГ 3: Создайте Email шаблон**

1. Нажмите **"Email Templates"** (слева)
2. Нажмите **"Create New Template"**
3. Введите название: **"Fentus Contact Form"**

**Template Settings:**
- **From Name:** `{{from_name}}`
- **From Email:** `noreply@emailjs.com` (оставьте как есть)
- **To Email:** `info@fentus-logistics.de` (ваш email)
- **Subject:** `Neue Anfrage von {{from_name}}`

**HTML Content (скопируйте и вставьте):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <div style="background-color: #0f3d91; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0;">Fentus Logistics GmbH</h1>
        <p style="margin: 5px 0 0 0;">Neue Anfrage über die Website</p>
    </div>
    
    <div style="padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #0f3d91; border-bottom: 2px solid #0f3d91; padding-bottom: 10px;">Kontaktdaten</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
                <td style="padding: 8px; color: #666;">{{from_name}}</td>
            </tr>
            <tr style="background-color: #fff;">
                <td style="padding: 8px; font-weight: bold; color: #333;">Firma:</td>
                <td style="padding: 8px; color: #666;">{{from_firma}}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold; color: #333;">E-Mail:</td>
                <td style="padding: 8px; color: #666;">{{from_email}}</td>
            </tr>
            <tr style="background-color: #fff;">
                <td style="padding: 8px; font-weight: bold; color: #333;">Telefon:</td>
                <td style="padding: 8px; color: #666;">{{from_phone}}</td>
            </tr>
        </table>
        
        <h2 style="color: #0f3d91; border-bottom: 2px solid #0f3d91; padding-bottom: 10px; margin-top: 30px;">Nachricht</h2>
        <div style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #0f3d91;">
            {{message}}
        </div>
    </div>
    
    <div style="background-color: #0f3d91; color: white; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; font-size: 12px;">
        Diese Anfrage wurde über das Kontaktformular auf <strong>www.fentus-logistics.de</strong> gesendet.
    </div>
</div>
```

4. Нажмите **"Save"**
5. **СОХРАНИТЕ TEMPLATE ID** - понадобится для кода!

---

### 🔑 **ШАГ 4: Получите Public Key**

1. Нажмите **"Account"** (слева внизу)  
2. Найдите **"Public Key"**
3. **СОХРАНИТЕ PUBLIC KEY** - понадобится для кода!

---

### 💻 **ШАГ 5: Обновите код**

Теперь у вас есть 3 значения:
- **SERVICE_ID** (из шага 2)
- **TEMPLATE_ID** (из шага 3)  
- **PUBLIC_KEY** (из шага 4)

**Откройте файл:** `/src/components/AnfrageModal.jsx`

**Найдите строки:**
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';  
const publicKey = 'YOUR_PUBLIC_KEY';
```

**Замените на ваши значения:**
```javascript
const serviceId = 'service_xxxxxxx';     // Ваш Service ID
const templateId = 'template_xxxxxxx';   // Ваш Template ID
const publicKey = 'xxxxxxxxxxxxxxx';     // Ваш Public Key
```

---

### ✅ **ШАГ 6: Тестирование**

1. Сохраните файл
2. Перезапустите сайт: `npm start`
3. Откройте форму "Anfrage"
4. Заполните тестовыми данными
5. Нажмите "Anfrage senden"
6. Проверьте почту info@fentus-logistics.de

---

### 🆘 **Если что-то не работает:**

**Проблема: Ошибка при отправке**
- Проверьте правильность Service ID, Template ID, Public Key
- Убедитесь что Gmail подключен в EmailJS

**Проблема: Письма не приходят**
- Проверьте папку "Спам"
- Убедитесь что указали правильный email в Template

**Проблема: Переменные не заполняются**
- Проверьте что имена переменных в шаблоне точно совпадают: {{from_name}}, {{from_email}} и т.д.

---

### 📊 **Статистика и лимиты:**

- **Бесплатно:** 200 писем/месяц
- **Статистика:** EmailJS → Dashboard → Statistics
- **История:** Все отправленные письма сохраняются

---

**🎉 Готово! Теперь у вас профессиональная система отправки форм!**