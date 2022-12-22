const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    `mongodb+srv://merntodo:merntodo@cluster0.ixcz0zt.mongodb.net/?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
  )
  .then(()=>console.log("Connected to DB"))
  .catch(console.err)

  app.listen(process.env.PORT || 3001,()=>console.log("Server at 3001"));
