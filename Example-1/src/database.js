import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'anyel',
    password: 'anyel',
    database: 'Prueba01'
});

export default pool;