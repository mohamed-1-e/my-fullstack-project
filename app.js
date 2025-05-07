const express = require('express');
const app = express();

// تعريف البورت
const PORT = process.env.PORT || 5000;

// نقطة الوصول الرئيسية
app.get('/', (req, res) => {
    res.send('Bienvenu sur l\'application Examen');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
