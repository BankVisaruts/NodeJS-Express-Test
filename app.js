//const express = require('express');
import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug';
import morgan from 'morgan';
const debug = createDebug('app');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send('Hello borntoDev');
})

app.listen(port, ()=>{
    //console.log("Listening on port %s", chalk.green(port)); //console
    debug("Listening on port" + chalk.green(" : " + port)); //debug
})