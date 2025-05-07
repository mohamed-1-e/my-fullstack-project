require('dotenv').config();
const { Sequelize } = require('sequelize');

if (!process.env.DB_USER || !process.env.DB_NAME || !process.env.DB_HOST) {
    console.error('❌ Missing required database environment variables.');
    process.exit(1);
}

console.log('✅ Database config loaded:');
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', `"${process.env.DB_PASSWORD}"`);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: false,
    }
);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection to the database has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
    }
}

testConnection();

module.exports = sequelize;
