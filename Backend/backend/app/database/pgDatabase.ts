import { Client } from 'pg'

const pgDatabase = new Client ({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'root',
    database: 'gestion'
})
pgDatabase.connect()
export default pgDatabase;