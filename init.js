const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
.then( ()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
from: "neha",
to: "preeti",
msg: "send me notes for the exam",
date_at: new Date(),
},

{
from: "rohit",
to: "mohit",
msg: "teach me JS callbacks",
date_at: new Date(),
},

{
from: "amit",
to: "sumit",
msg: "all the best!",
date_at: new Date(),
},

{
from: "anita",
to: "ramesh",
msg: "bring me some fruits",
date_at: new Date(),
},
{
from: "tony",
to: "peter",
msg: "love you 3000",
date_at: new Date(),
},
];

Chat.insertMany(allChats);
