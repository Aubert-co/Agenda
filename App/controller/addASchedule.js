module.exports = async function ApiAddSchedule(req,res){
    try{
        const {date,content} = req.body
      
        const VerifyDate = ()=>{
            const [year,month,day] = date.split('/')

            if(!Number(year) && year.length !== 4 )return false
            if(!Number(month) && month.length !== 2)return false
            if(!Number(day) && day.length !== 2)return false
            
            return true
        }
        if(date === '' && !VerifyDate() )return res.status(400).send({msg:'invalid date'})
       
    
        if(content === '')return res.status(400).send({msg:'invalid content'})

        res.status(200).send({msg:'sucess',data:[]})
    }catch(err){
        res.status(500).send({msg:'something went wrong'})
    }
}

