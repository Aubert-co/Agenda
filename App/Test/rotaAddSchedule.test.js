const {expect} = require('chai')
const request = require('supertest')
const server = require('../server')
const ScheduleDB = require('../model/schedule')
var app
describe("POST addschedule ",()=>{
    beforeAll(async()=>{
        app =  server.listen(8081)  
    })
    describe("addschedule should return sucess",()=>{
        test("send correct values should return a status 200 and msg with sucess",async()=>{

            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2025/09/21',content:'test1'})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.equal('sucess')
            expect(response.body.data).to.be.a('array')
        })

        test("should return sucess when send correct date",async()=>{
          
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2020/12/31',content:'test2'})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.equal('sucess')
            
        })
        afterAll(async()=>{
            const dropValues =await ScheduleDB.destroy({
                where:{date:'2025-09-21',content:'test2'}
            })
            
        })
    })

    describe("addschedule should return a error",()=>{
        test("should return a invalid  msg and status 400 when send wrong date",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'',content:'values'})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
     
        })
        test("should return a error when send invalid day",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/09/5',content:'values'})
        
            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a error when send invalid month",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/9/02',content:'values'})
        
            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a error when send invalid year",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'202/09/2',content:'values'})
        
            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a error when send a string",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'date',content:'values'})
        
            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a invalid  msg and status 400 when send wrong content",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/09/21',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid content')
     
        })
        test("should return a error msg when send day > 31",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/09/32',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })

        test("should return a error msg when send day === 00",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/09/00',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a error msg when send month > 12",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/13/24',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a error msg when send month === 00",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/00/32',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
        test("should return a error msg when send month > 12",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/13/32',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })

        test("should return a error msg when send year > 2025",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2026/09/32',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })

        test("should return a error msg when send year < 2020",async()=>{
            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2019/09/32',content:''})

            expect(response.status).to.equal(400)
            expect(response.body.msg).to.equal('invalid date')
        })
    })
   
})