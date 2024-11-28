const {v4 : uuid}= require("uuid");

const userdata = {

    "users":[
        {
            id:uuid(),
            username:"chandan",
            password:"chandan123",
            emailID:"chandan@gmail.com"
        },
        
        {
            id:uuid(),
            username:"guest",
            password:"guest123",
            emailID:"ankit@gmail.com"
        }
    ]
}

module.exports = userdata;
