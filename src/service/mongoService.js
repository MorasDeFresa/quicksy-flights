import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://juan:juan1234@cluster0.waccd.mongodb.net/quicksyflights?retryWrites=true&w=majority';

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient && cachedClient.isConnected()) {
        return cachedClient.db();
    }

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Conexión a MongoDB Atlas establecida exitosamente');
        cachedClient = client;
        return client.db();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
}

export async function closeDatabaseConnection() {
    if (cachedClient) {
        await cachedClient.close();
        console.log('Conexión a la base de datos cerrada correctamente');
    }
}
