const express = require('express');
const sequelize = require('./config/db'); 
const app = express();

// تعريف البورت
const PORT = process.env.PORT || 5000;

// نقطة الوصول الرئيسية
app.get('/', (req, res) => {
    res.send('✅ Hello, your server is running!');
});

// الاتصال بقاعدة البيانات
app.listen(PORT, async () => {
    console.log(`✅ Server running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('✅ Connexion à la base de données réussie.');
        await sequelize.sync();
        console.log('✅ Database synchronized!');
    } catch (error) {
        console.error('❌ Error connecting to the database:', error);
    }
});
