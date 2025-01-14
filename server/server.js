const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")

mongoose.connect("mongodb+srv://dineshkarthikrajand22cse:qZ1sybKlGq7kVJFw@cluster0.quuvu.mongodb.net/").then(() => console.log("MongoDB is Connected")).catch((error) => console.log(error))

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        cerdentials : true
    })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))