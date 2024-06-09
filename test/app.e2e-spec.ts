import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
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

  // Replace with your updated API endpoints and request bodies
  it('/auth/register (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'testuser2',
        name: 'Test User',
        status: true,
        password: 'password',
        email: 'test@example.com',
      });
    expect(response.status).toBe(201);
  });

  it('/auth/login (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'testuser',
        password: 'password',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('access_token');
  });

  it('/profile/createProfile (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/profile/create')
      .send({
        username: 'testuser',
        interests: ['test1', 'test2'],
        profilePicture: 'test.jpg',
      });
    expect(response.status).toBe(201);
  });

  it('/profile/getProfile (GET)', async () => {
    const userName = 'testuser'; // use a valid userId from your database
    const response = await request(app.getHttpServer()).get(
      `/profile/${userName}`,
    );
    expect(response.status).toBe(200);
  });

  it('/profile/updateProfile (PUT)', async () => {
    const userName = 'testuser'; // use a valid userId from your database
    const response = await request(app.getHttpServer())
      .put(`/profile/update/${userName}`)
      .send({
        username: 'updateduser',
        interests: ['updated1', 'updated2'],
        profilePicture: 'updated.jpg',
      });
    expect(response.status).toBe(200);
  });

  it('/chat/sendMessage (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/chat/send')
      .send({
        fromUserId: 'testuser', // use valid user IDs from your database
        toUserId: 'testuser2',
        content: 'Hello',
      });
    expect(response.status).toBe(201);
  });
  it('/chat/view (GET)', async () => {
    const userName = 'testuser2'; // use a valid userId from your database
    const response = await request(app.getHttpServer()).get(
      `/chat/view/${userName}`,
    );
    console.log(response.body);
    expect(response.status).toBe(200);
  });
});
