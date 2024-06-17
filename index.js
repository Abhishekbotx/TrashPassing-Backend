const express = require('express')
const { PORT } = require('./src/config/dotenvConfig')
const cookieParser = require("cookie-parser");
const db = require('./src/config/dbConfig')
const cors = require('cors')
const app = express();



app.use(
    cors({
        origin: "https://trash-passing.vercel.app",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

const apiRoutes = require('./src/routes/index');
app.use(cookieParser());

app.use(express.json());
app.get("/", (req, res) => {
    res.send(`<h1> HomePage Says Hi </h1>`);
});
const prepareAndStartServer = () => {
    app.use('/api', apiRoutes);
    db.connect()
    app.listen(PORT, () => {
        console.log(`server running on port:${PORT}`)
    })
}

prepareAndStartServer()