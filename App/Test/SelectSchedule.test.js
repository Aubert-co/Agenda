const {expect} = require('chai')
const request = require('supertest')
const server = require('../server')
var app 


describe("route /selectschedule",()=>{
    beforeAll(async()=>{
        app =  server.listen(8085)  
    })
    
    test("should return a array",async()=>{
        const response = await request(app)
        .get('/selectschedule')

        expect(response.body.msg).to.equal('sucess')

        expect(response.status).to.equal(200)
    })

    
})