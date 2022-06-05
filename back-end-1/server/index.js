const express = require('express')
const cors = require('cors')

const app = express()
// const port = 4000
app.use(cors());

app.use(express.json());

app.get("/api/users", (req,res)=>{
    let friends = ["George", "Brock", "Jared", "Blake", "Summit"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req,res) =>{
const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
res.status(200).send(phrase);
})


app.listen(4000, () => console.log("Server running on 4000"));
