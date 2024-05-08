const fs = require("fs")




// get all tasks

const getTasks = (req, res) => {
fs.readFile('./task.json', 'utf8', (err,data) =>{
    if(err) return err
    console.log(data);
    res.end(data)

}
   
    
)
}


module.exports = {getTasks}