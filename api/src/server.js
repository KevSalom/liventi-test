const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require('dotenv').config()
const axios = require("axios");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


const APIKEY = process.env.APIKEY;

// AitTable Database ID
const BASE_ID= process.env.BASE_ID

// AirTable Databa Name
const TABLE_NAME= process.env.TABLE_NAME



//Get all record by filtered by Email
app.get("/companies/:email", async (req, res) => {

  const REP_EMAIL = req.params.email;
  const headers = {
    Authorization: `Bearer ${APIKEY}`,
  };

  try {
    const { data } = await axios.get(
      `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?filterByFormula={RepEmail}='${REP_EMAIL}'`,
      { headers }
    );
    return res.json(data);
  } catch (error) {
    if (error.respose) {
      return res.status(404).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
});



//Get a record by ID
app.get("/company/:id", async (req, res) => {
  const RECORD_ID = req.params.id;
  const headers = {
    Authorization: `Bearer ${APIKEY}`,
  };

  try {
    const { data } = await axios.get(
      `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${RECORD_ID}`,
      { headers }
    );

    return res.json(data);
  } catch (error) {
    console.error(error.message);
  }
});
  
  





module.exports = app;
