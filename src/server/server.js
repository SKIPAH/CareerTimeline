import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())
const port = 3001;


app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.status(200).json({message: "Node server is responding"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




/*

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