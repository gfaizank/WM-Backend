const Services = require("../database/service_model")



async function services_api(req,res){
   
    //const {product_class,rating,name,mrp,sort,select,page,limit} = req.query   
    //const query_object = {}    // Initialized a object with empty properties currently

    
    // if(product_class){
    //     query_object.product_class = product_class    
    // }
    // if(rating) query_object.rating = rating

    // if(name){
    //     query_object.name = { $regex : name, $options : "i"}   
    // }

    // if(mrp) query_object.mrp = mrp
    
    // let api_data = Product.find(query_object)

    
    // if(sort){
    //     let sortfix = sort.replace(","," ")       
    //     api_data = api_data.sort(sortfix)
    // }

    // // Selecting the desired field
    // if(select){
    //     let selectfix = select.split(',').join(' ')     
    //     api_data = api_data.select(selectfix)
    // }
    
    // // Adding Pagination
    // const page_no = Number(page) || 1        
    // const limit_per_page = Number(limit) || 5

    // let skip_logic = (page_no - 1) * limit_per_page

    // api_data = api_data.skip(skip_logic).limit(limit_per_page)

    // const filtered_data = await api_data
    
    try{
        let api_data = await Services.find({})
        res.status(200).json({api_data})
    }
    catch(err){
        res.status(404).send(`API data can not be fetched due to ${err}`)
    }
    
}



module.exports = services_api