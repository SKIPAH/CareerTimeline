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

