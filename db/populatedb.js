require('dotenv').config();
const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS user_messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255),
    message TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user_messages (username, message)
VALUES
('Haris', 'Hello World'),
('Amando', 'Hi there!');
`;

async function main() {
    const dbUrl = process.argv[2];
    const client = new Client({ connectionString: dbUrl });

    try {
        await client.connect();
        await client.query(SQL);
        console.log("Table created and data inserted successfully.");
    } catch (err) {
        console.error("Error executing query:", err);
    } finally {
        await client.end();
    }
}

main();