const Schedule = require('../model/schedule')
module.exports = async function ApiAddSchedule(req,res){
    try{
        const {date,content} = req.body
        
        const VerifyDate = ()=>{
            const [year,month,day] = date.split('/')
            
            if(!Number(year) || year.length !== 4 || Number(year) >2025 || Number(year) <2020 )return false
            if(!Number(month) || month.length !== 2 || Number(month) > 12 || Number(month) <0)return false
            if(!Number(day) || day.length !== 2 || Number(day) > 31 || Number(day)<0)return false
            
            return true
        }
        if(date === '' || !VerifyDate() )return res.status(400).send({msg:'invalid date'})
       
        if(content === '')return res.status(400).send({msg:'invalid content'})
        const dateToDB = date.replace(/[/]/gi,'-')
        const saveCreate = await Schedule.create({
            date:dateToDB,
            content
        })
        res.status(200).send({msg:'sucess',data:[]})
    }catch(err){
        res.status(500).send({msg:'something went wrong'})
    }
}

