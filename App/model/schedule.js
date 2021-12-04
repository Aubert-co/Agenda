const {Sequelize,DataTypes,Op} = require('sequelize')

const sequelize = new Sequelize('users','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
    
})

const Schedule = sequelize.define('schedule',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    content:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.DATEONLY,
        allowNull:false
    },
  
})


/*const v = async()=>{
   const t =  await Schedule.create({
       date:'2021-12-03',
       content:'string'
   })
console.log(t)
const m = await Schedule.findOne({where:{id:200}})
console.log(m === null)
}

v()*/

module.exports = Schedule