const {expect} = require('chai')
const request = require('supertest')
const app = require('../server')


describe("route /updateschedule",()=>{
    describe("should return errors tests case",()=>{

    })

    describe("should return sucessfull tests case",()=>{
        test("",async()=>{

            const response = await request(app)
            .post('/updateschedule')
            .set({'Content-Type':'application-json'})
            .send({id:32,content:'bla bla',date:'2021/09/21'})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.equal('sucess')
        })
    })
})