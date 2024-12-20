import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());

let personalBestLifts = {
    squat: 140,
    bench: 110,
    deadlift: 200,
};


app.get('/api/lifts', (req, res)=>{
    res.json(personalBestLifts);
});


app.post('/api/lifts', (req, res)=>{
    personalBestLifts = {...personalBestLifts, ...req.body};
    res.json({message: 'Lifts updated', personalBestLifts});

});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




/*

TWITTER FREE API VERSION CAN ONLY GET RECENT TWEETS FROM WEEK AGO


const express = require('express');
const axios = require('axios');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.get('/api/tweets', async (req, res) => {
    const {query} = req.query;
    const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}`;

    try{
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,

            },
        });
        res.json(response.data);
    }catch (error){
        res.status(500).json({error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

*/