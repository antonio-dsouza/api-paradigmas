import { createPool } from "mysql2/promise";

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'paradigmas'
    });

    return connection;
}