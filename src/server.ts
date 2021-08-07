import express from 'express';
//import {environment} from './Environment/environment'

const app = express();
const port = process.env.PORT || 3000;

const eventSeriesId = "117176613405";

app.get('/getEventDetails',(req,res)=>{
    const startDate = req.query.start_date;
    const endDate = req.query.end_date;

})

app.get('/getAttendee',(req,res)=>{

});

app.listen(port,()=>{
    console.log(`Running on ${port}`);
})