const {expect} = require('chai')
const request = require('supertest')
const app = require('../server')

describe("POST addschedule ",()=>{
    describe("addschedule should return sucess",()=>{
        test("send correct values should return a status 200 and msg with sucess",async()=>{

            const response = await request(app)
            .post('/addschedule')
            .set({'Content-Type':'application/json'})
            .send({date:'21/09/2021',content:'values'})

            expect(response.status).to.equal(200)
        })
    })
})