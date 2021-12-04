const {expect} = require('chai')
const request = require('supertest')
const server = require('../server')
const ScheduleDB = require('../model/schedule')
var app

describe("route /updateschedule",()=>{
    beforeAll(async()=>{
        app =  server.listen(8084)  
    })
    
    beforeAll(async()=>{
        const create = await ScheduleDB.create({
            id:394,
            date:'2021-10-23',
            content:'tam tam'
        })
    })
    describe("should return sucessfull tests case",()=>{
        test("should return a error when send wrong values",async()=>{

            const response = await request(app)
            .post('/updateschedule')
            .set({'Content-Type':'application/json'})
            .send({id:25,content:'bla bla',date:'2021/09/21'})

            expect(response.status).to.equal(402)
            expect(response.body.msg).to.equal('not found')
        })

        test("should return a error when send wrong values",async()=>{

            const response = await request(app)
            .post('/updateschedule')
            .set({'Content-Type':'application/json'})
            .send({id:394,content:'bla bla',date:'2021/09/21'})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.equal('sucess')
        })
    })
    afterAll(async()=>{
        const destroy = await ScheduleDB.destroy({
            where:{id:200}
        })
    })
})