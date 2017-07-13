// Import stuff required by TypeORM to initialize DB connection.
import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions, getConnection } from 'typeorm';

createConnection({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'samplepass',
    database: 'sampledb',
    type: 'postgres',
    entities: [
        __dirname + '/models/{*.ts,*.js}'
    ],
    autoSchemaSync: true
}).then(connection => {
    console.log('Connected!');
}).catch(error => {
    console.error('Error!');
});
