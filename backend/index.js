// const express = require('express');
// const cors = require('cors');
// const Api = require('./src/routes')
require('dotenv').config()
require('./connection')
import express from 'express'
import cors from 'cors'
import Api from './src/routes'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods:['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

Api(app)

const POST = process.env.POST ||4000

const listener = app.listen(POST, ()=>{
    console.log('Server is running on the post: ' + POST)
})