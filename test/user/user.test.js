const app = require('../../server/server');
const request = require('supertest');
const expect = require('chai').expect;

describe('[STUDENTS] /api/students Testing', () => {

  it('should be able to sign up a new student', (done) => {
    request(app)
      .post('/api/students')
      .send({
        email: 'student@ss.ss',
        teacher:'teacher@tt.tt'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        // console.log('====res.body========\n', res.body)
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.deep.property('user.email', 'student@ss.ss');
        done();
      })
  });
})