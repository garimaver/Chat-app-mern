const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    // root route http://localhost:5000
    res.send("hello 6000 port")
})
const PORT = 5000
app.listen(PORT, () => console.log(`server is running at ${PORT}`))