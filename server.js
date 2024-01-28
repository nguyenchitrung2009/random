import express from "express"
import fs from "fs"
import cors from "cors"
import rateLimit from "express-rate-limit"
const port = process.env.PORT || 5000
const app = express()
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(express.static("public"))
app.use(limiter)
app.use(cors())
// api key
const apikey = [

    "trungsochang",
    "trung2009",
    "trung1234",
    "trung123",
    "buavai",
    "dcmm",
    "yeuchi",
    "sexx",
    "buaabuaa"
]
app.get("/", (req, res) => {
    res.send("Dũngkon")
})
app.get("/huyen", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/huyen")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://random1111111111111111111111.trungtrungchi20.repl.co/huyen/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/gai", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/gai")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://random1111111111111111111111.trungtrungchi20.repl.co/gai/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/videosex", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/videosex")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://random1111111111111111111111.trungtrungchi20.repl.co/videosex/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/nude", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/nude")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://random1111111111111111111111.trungtrungchi20.repl.co/nude/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/po", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/po")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://random1111111111111111111111.trungtrungchi20.repl.co/po/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})

app.get("/wibu", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/wibu")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/wibu/${randomImage}`
    result.author = "Dũngkon, Gia Quân"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/mirai", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/mirai")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/mirai/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/ngoctuyen", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/ngoctuyen")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/ngoctuyen/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
  app.get("/ciin", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/ciin")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/ciin/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/vu", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/vu")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/vu/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/123", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/123")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/123/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/boy", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/boy")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/boy/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/hoang", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/hoang")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `https://image-random-api.dungkon.repl.co/hoang/${randomImage}`
    result.author = "Dũngkon"
    result.source = "https://github.com/HELLSNAKES/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`)
})










































