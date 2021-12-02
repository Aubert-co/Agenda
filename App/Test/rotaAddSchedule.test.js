const {expect} = require('chai')
const request = require('supertest')
const app = require('../server')

describe("POST addschedule ",()=>{
    describe("addschedule should return sucess",()=>{
        test("send correct values should return a status 200 and msg with sucess",async()=>{

            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'2021/09/21',content:'values'})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.equal('sucess')
            expect(response.body.data).to.be.a('array')
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
    })
})