module.exports = function ApiAddSchedule(req,res){
    try{
        const {date,content} = req.body
        console.log(date)
        if(date === '' )return res.status(400).send({msg:'invalid date'})
        
        if(content === '')return res.status(400).send({msg:'invalid content'})

        res.status(200).send({msg:'sucess'})
    }catch(err){
        res.status(500).send({msg:'something went wrong'})
    }


}