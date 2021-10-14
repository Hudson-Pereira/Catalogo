module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_BASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
}