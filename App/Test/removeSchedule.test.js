const {expect} = require('chai')
const request = require('supertest')
const server = require('../server')
var app
describe("route delete schedule",()=>{
    beforeAll(async()=>{
        app =  server.listen(8080)  
    })
    describe("should return errors tests cases",()=>{
        test("should return a error when send a id undefined",async()=>{
                const response  =  await request(app)
                .post('/removeschedule')
                .set({'Content-Type':'application/json'})
                .send({id:undefined})

                expect(response.status).to.equal(401)
                expect(response.body.msg).to.be.equal('wrong id')
        })

        test("should return a error when send a id string",async()=>{
            const response  =  await request(app)
            .post('/removeschedule')
            .set({'Content-Type':'application/json'})
            .send({id:'string'})

            expect(response.status).to.equal(401)
            expect(response.body.msg).to.be.equal('wrong id')
        })
    })

    describe("should return sucess tests cases",()=>{
        test("should return a sucessfull msg when send correct values",async()=>{
            const response = await request(app)
            .post('/removeschedule')
            .set({'Content-Type':'application/json'})
            .send({id:32})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.be.equal('sucess')
        })
        
    })
})