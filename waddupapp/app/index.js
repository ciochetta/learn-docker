const app = require("express")()

const port = process.env.PORT || 3333


app.get("/", (req,res) => {
    res.send(`waddup from port ${port}`)
})

app.listen(port, ()=>{
    console.log("Server is on");
    console.log(`Listening on port ${port}`);
}) 