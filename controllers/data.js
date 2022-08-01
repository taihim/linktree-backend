
const data = {"userData": []}

function updateData(req, res, next) {
    console.log(req.body)
    data["userData"] = req.body.userData
    return res.json({message: "Updated data.", data: data})
}

function getData(req, res, next) {
    return res.json(data)
}


module.exports = {getData, updateData} 