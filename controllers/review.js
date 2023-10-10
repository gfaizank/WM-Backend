const Review = require("../database/review_model")

async function review_api(req,res){
   
    
    try{
        let reviews = await Review.find({})
        res.status(200).json({reviews})
    }
    catch(err){
        res.status(404).send(`API data can not be fetched due to ${err}`)
    }
    
}



module.exports = review_api