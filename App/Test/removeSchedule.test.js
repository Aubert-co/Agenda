const {expect} = require('chai')
const request = require('supertest')
const app = require('../server')

describe("route delete schedule",()=>{
    describe("should return errors tests cases",()=>{
        test("should return a error when send a id undefined",()=>{
                const response  =  await request(app)
                .post('/removeschedule')
                .set({'Content-Type':'application/json'})
                .send({id:undefined})

                expect(response.status).to.equal(401)
                expect(response.body.msg).to.be.equal('something went wrong')
        })

        test("should return a error when send a id string",()=>{
            const response  =  await request(app)
            .post('/removeschedule')
            .set({'Content-Type':'application/json'})
            .send({id:'string'})

            expect(response.status).to.equal(401)
            expect(response.body.msg).to.be.equal('something went wrong')
        })
    })

    describe("should return sucess tests cases",()=>{
        test("should return a sucessfull msg when send correct values",()=>{
            const response = await request(app)
            .post('/removeschedule')
            .set({'Content-Type':'application/json'})
            .send({id:32})

            expect(response.status).to.equal(200)
            expect(response.body.msg).to.be.equal('sucess')
        })
        
    })
})