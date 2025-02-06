import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('RegisterController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /register - deve criar um novo cliente', async () => {
    const newClient = {
      name: 'João Silva',
      cpf: '123.456.789-00',
      phone: '(11) 91234-5678',
      email: 'joao@email.com',
      address: 'Rua das Flores, 123, São Paulo - SP',
    };

    return request(app.getHttpServer())
      .post('/register')
      .send(newClient)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject(newClient);
        expect(response.body).toHaveProperty('_id');
      });
  });

  it('GET /register - deve retornar a lista de clientes', async () => {
    return request(app.getHttpServer())
      .get('/register')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
});
