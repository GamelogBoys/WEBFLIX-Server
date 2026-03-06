const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))



const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:"wflix2026@gmail.com",
pass:"zkgbhunpzqkwbxku"
}

})



app.post("/login",(req,res)=>{

let email = req.body.email
let password = req.body.password

let users = JSON.parse(fs.readFileSync("users.json"))

let user = users.find(u => u.email === email && u.password === password)

if(user){

transporter.sendMail({

from:"WEBFLIX <wflix2026@gmail.com>",
to:email,
subject:"WEBFLIX Login Verification",

html:`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#000;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#000;padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#000;text-align:center;border-collapse:collapse;">

<tr>
<td style="padding:20px 0;">
<h1 style="
color:#e50914;
font-size:60px;
margin:0;
letter-spacing:6px;
font-weight:bold;
">
WEBFLIX
</h1>
</td>
</tr>

<tr>
<td style="padding:20px 40px;">
<h2 style="
color:white;
font-size:28px;
margin:0;
line-height:1.4;
font-weight:bold;
">
Hey, your account has been verified.<br>
Now you can login without any issue.
</h2>
</td>
</tr>

<tr>
<td style="padding:20px 40px;">
<p style="
color:#b3b3b3;
font-size:14px;
margin:0;
">
If this wasn't you, please secure your account immediately.
</p>
</td>
</tr>

<tr>
<td style="padding:40px 40px;">
<div style="
background:#111;
border-radius:8px;
padding:20px;
color:#aaa;
font-size:13px;
">
This message was sent by &copy;<b>WEBFLIX</b>. All Rights Claimed by Swapnil Saha. 
Please do not reply to this email.
</div>
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`

})

res.json({
message:"Login Successful"
})

}

else{

res.json({
message:"Invalid Email or Password"
})

}

})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("WEBFLIX server running on port " + PORT);
});