'use strict'

const request = require('supertest')
const app = require('./app')

describe('Test the things service', () => {
  test('GET /Abilities succeeds', async () => {
    return request(app)
      .get('/Abilities')
      .expect(200)
  })

  test('GET /Abilities returns JSON', async () => {
    return request(app)
      .get('/Abilities')
      .expect('Content-type', /json/)
  })

  test('GET /Abilities includes Dash', () => {
    return request(app)
      .get('/Abilities?Name=Jett')
      .expect(/Dash/)
  })

  test('GET /Abilities includes Dash', () => {
    return request(app)
      .get('/Abilities?Name=Fade')
      .expect(/Eye/)
  })

  test('GET /Abilities includes Turret', () => {
    return request(app)
      .get('/Abilities?Name=Killjoy')
      .expect(/Turret/)
  })

  test('GET /Abilities includes DarkCover', () => {
    return request(app)
      .get('/Abilities?Name=Omen')
      .expect(/DarkCover/)
  })

  test('GET /load succeeds', () => {
    return request(app)
      .get('/load')
      .expect(200)
  })

  test('GET /load returns JSON', () => {
    return request(app)
      .get('/load?clickedID=Duelist')
      .expect('Content-type', /json/)
  })

  test('GET /load returns JSON', () => {
    return request(app)
      .get('/load?clickedID=Initiator')
      .expect('Content-type', /json/)
  })

  test('GET /load returns JSON', () => {
    return request(app)
      .get('/load?clickedID=Controller')
      .expect('Content-type', /json/)
  })

  test('GET /load returns JSON', () => {
    return request(app)
      .get('/load?clickedID=Sentinel')
      .expect('Content-type', /json/)
  })

  test('GET /load includes Cypher', () => {
    return request(app)
      .get('/load?clickedID=Sentinel')
      .expect(/Cypher/)
  })

  test('GET /load includes Phoenix', () => {
    return request(app)
      .get('/load?clickedID=Duelist')
      .expect(/Phoenix/)
  })

  test('GET /load includes Astra', () => {
    return request(app)
      .get('/load?clickedID=Controller')
      .expect(/Astra/)
  })

  test('GET /load includes Sova', () => {
    return request(app)
      .get('/load?clickedID=Initiator')
      .expect(/Sova/)
  })

  test('POST /newdata adds new data for Deadlock', () => {
    const params = {
      'sub-name': 'Deadlock',
      'sub-ability': 'Barrier',
      'sub-class': 'Sentinel'
    }
    return request(app)
      .post('/newdata')
      .send(params)
      .expect(200)
  })
})
