import express from 'express';
import { client, connectToMongo } from './mongoConnection.js';
import userRoutes from './routes/users.routes.js'

const app = express();
app.use(express.json());

await connectToMongo()

app.use('/users', userRoutes);



process.on('SIGINT', async () => {
    await client.close()
})

app.listen(3000, () => console.log('Listening on port 3000'));

