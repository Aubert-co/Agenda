const Schedule = require('../model/schedule')
module.exports =async function ApiSelectSchedule(req,res){
    try{
        const data  = await Schedule.findAll()
        res.status(200).send({msg:'sucess',data})
    }catch(err){
        res.status(401).send({msg:'something went wrong'})
    }
}