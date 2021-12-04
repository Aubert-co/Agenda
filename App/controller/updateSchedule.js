const Schedule =  require('../model/schedule')
module.exports =async function  ApiUpdateSchedule (req,res){
    try{
        const {id,content,date} = req.body

        if(!id || !content || !date) return res.status(401).send({msg:'wrong values'})

        const dateToDB = date.replace(/[/]/gi,'-')
        const values = await Schedule.findOne({where:{id}})

        if(values ===null)return res.status(402).send({msg:'not found'})

        const Update = await Schedule.update({
            dateToDB,
            content,
            where:{id}
        })

        res.status(200).send({msg:'sucess'})
    }catch(err){
        res.status(401).send({msg:'something went wrong'})
    }
}