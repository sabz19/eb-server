import express from 'express';

import { fetchEBData } from './Eventbrite/query';
//import {environment} from './Environment/environment'

const app = express();
const port = process.env.PORT || 3000;

app.get('/getEventDetails',async (req,res)=>{
    const response = await fetchEBData(req);
    res.send(response);
})

app.get('/getAttendee',(req,res)=>{

});

app.get('/',(req,res)=>{
    res.send('Hello from app');
})

app.listen(port,()=>{
    console.log(`Running on ${port}`);
})