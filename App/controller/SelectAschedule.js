module.exports = function ApiSelectSchedule(req,res){
    try{
    res.status(200).send({msg:'sucess',data:[]})
    }catch(err){
        res.status(401).send({msg:'something went wrong'})
    }
}