//const express = require('express');
import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug';
const debug = createDebug('app');
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{
    res.send('Hello BorntoDev');
})

app.listen(PORT, ()=>{
    console.log("Listening on port %s", chalk.green(PORT)); //console
    debug("Listening on port" + chalk.green(" : " + PORT)); //debug
})