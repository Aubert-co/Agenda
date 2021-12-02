modu.exports =async function  ApiUpdateSchedule (req,res){
    try{
        const {id,content,date} = req.body

        if(!id || !content || !date) return res.status(401).send({msg:'wrong values'})

        res.status(200).send({msg:'sucess'})
    }catch(err){
        res.status(401).send({msg:'something went wrong'})
    }
}