const Services = require("../database/service_model")

async function services_api(req, res) {

  try {
    const { category } = req.query
    const query_object = {}
    if (category) {
      query_object.category = { $regex: new RegExp(`^${category}`, "i") };
    }

    let api_data = await Services.find(query_object)
    res.status(200).json({ api_data })
  }
  catch (err) {
    res.status(404).send(`API data can not be fetched due to ${err}`)
  }

}



module.exports = services_api