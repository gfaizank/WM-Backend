require("../database/connection")

const Services = require("../database/service_model")

const service_api = require("./service_api.json")  // No need to write export in json file, we can directly require

async function start(){
    try{
        await Services.deleteMany() 
        await Services.create(service_api)  
        console.log('Database updated');
    }
    catch(err){
        console.log('Cannot create store data of API due to'+err);
    }
}

start()