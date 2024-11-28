require("dotenv").config();
const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: process.env.USERNAME_CHANDAN,
            password: process.env.PASSWORD_CHANDAN,
            emailID: process.env.EMAIL_CHANDAN,
        },
        {
            id: uuid(),
            username: process.env.USERNAME_GUEST,
            password: process.env.PASSWORD_GUEST,
            emailID: process.env.EMAIL_GUEST,
        }
    ]
};

module.exports = userdata;
