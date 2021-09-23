import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.send("<h1>Welcome to authentication app...</h1>")
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))