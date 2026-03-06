const fs = require("fs")

module.exports = (req, res) => {

if (req.method !== "POST") {
return res.status(405).json({message:"Method not allowed"})
}

let body = ""

req.on("data", chunk => {
body += chunk
})

req.on("end", () => {

let {email, password} = JSON.parse(body)

let users = JSON.parse(fs.readFileSync("./users.json"))

let user = users.find(u => u.email === email && u.password === password)

if(user){

res.status(200).json({
message:"Login Successful"
})

}
else{

res.status(200).json({
message:"Invalid Email or Password"
})

}

})

}