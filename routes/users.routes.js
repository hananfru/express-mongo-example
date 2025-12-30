import express from 'express';
import { db } from '../mongoConnection.js';
import { ObjectId } from 'mongodb';

const collection = db.collection('users');

const router = express.Router();

router.get('/', async (req, res) =>{
    try{
    const users = await collection.find({}).toArray();
    res.send(users);
}
    catch(err) {
        console.log(err.message);
        res.status(500).send({msg: 'Server internal Error'});
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await collection.findOne({_id: new ObjectId(id)})
        delete user.password;
        res.send(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({msg: 'Server internal Error'});
    }
})

export default router;