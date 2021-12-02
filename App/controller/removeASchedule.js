module.exports = async function ApiRemoveSchedule(req,res){
    try{
        const {id} = req.body

        if(!id || typeof id !=='number')return res.status(401).send({msg:'wrong id'})

        res.status(200).send({msg:'sucess'})

    }catch(err){
        res.status(401).send({msg:'something went wrong'})
    }

}