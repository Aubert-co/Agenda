module.exports = async function ApiAddSchedule(req,res){
    try{
        const {date,content} = req.body
        const [year,month,day] = date.split('/')
        const VerifyDate = (value,length)=>{
            if(Number(value) && value.length === length )return true

            return false
        }
        if(date === '' || !VerifyDate(day,2) || !VerifyDate(year,4) || !VerifyDate(month,2)  )return res.status(400).send({msg:'invalid date'})
       
    
        if(content === '')return res.status(400).send({msg:'invalid content'})

        res.status(200).send({msg:'sucess',data:[]})
    }catch(err){
        res.status(500).send({msg:'something went wrong'})
    }
}

