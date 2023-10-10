require("../database/connection")

const Review = require("../database/review_model")

const review_api = require("./review_api.json")  // No need to write export in json file, we can directly require

async function start(){
    try{
        await Review.deleteMany() 

        await Review.create(review_api)  
    }
    catch(err){
        console.log('Cannot create store data of API due to'+err);
    }
}

start()