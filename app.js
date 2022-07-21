const express = require('express');
const app = express()

console.log("Check")


app.get('/', (req, res) => {
    res.send("welcome")

});




app.listen(3000, () => {
    console.log("working")
});
    
