let express = require("express");

let app = express();

app.get("/test",(req,resp)=>{
    resp.send(`<h1>Hello</h1>`);
});
app.use(express.static('chatbot'));
app.listen(5050,()=>{
    console.log("server runing http://localhost:5050")
});