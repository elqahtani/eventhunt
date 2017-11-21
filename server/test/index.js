process.env.NODE_ENV = 'development';

const mongoose = require("mongoose");
const User = require('../routes/users/model.js');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../index.js');
// const should = chai.should();
// const should = chai.should;
const should = require('should');


chai.use(chaiHttp);

describe('/GET All Events', () => {
    it('it should GET all the Events', (done) => {
        chai.request('http://localhost:8080')
            .get('/api/events')
            .end((err, res) => {
                should(res).have.property('status', 200);
                // res.body.should.be.a('object');
                // res.should.have.status(200);
                // should(res).have.property('title');
                // should(res.body).be.a('object');
                // res.body[0].should.have.property('_id');
                // res.body[0].should.have.property('title');
                // res.body[0].should.have.property('description');
                done();
            });
    });
});

describe('/GET All Users', () => {
    it('it should GET all the Users', (done) => {
        chai.request('http://localhost:8080')
            .get('/api/users')
            .end((err, res) => {
                should(res).have.property('status', 200);
                // res.body.should.be.a('object');
                // res.should.have.status(200);
                // should(res).have.property('title');
                // should(res.body).be.a('object');
                // res.body[0].should.have.property('_id');
                // res.body[0].should.have.property('title');
                // res.body[0].should.have.property('description');
                done();
            });
    });
});

