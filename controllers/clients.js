const Clients = require("../database/client_model")

async function register(req,res){    
    try{
        const {name,email,password,confirmpassword} = req.body

        if(password === confirmpassword){
            const user = new Clients({
                name :name, 
                email : email,                
                password : password,
                confirmpassword : confirmpassword
            })

            await user.save()
            res.status(201).json(user)
        }
        else res.status(404).json({"response":"Password does not matched"})
    }
    catch(err){
        res.status(404).json({"response":`Cannot Register due to ${err}`})
    }   
}

async function login(req,res){    
    try{
        const {email,password} = req.body

        const user = await Clients.findOne({email})

        if(user){
            if(user.password === password) res.status(200).json(user)

            else res.status(404).json({"response":"Invalid Password"})
        }

        else res.status(404).json({"response":"Invalid Email-ID"})
    }
    catch(err){
        res.status(404).json({"response":`Cannot Login due to ${err}`})
    }   
}



module.exports = {register, login}