// import request from 'supertest';
// import app from '../src/index';

// describe('State API', () => {
//   let authToken: string;

//   beforeAll(async () => {
//     // Register and login to get the token
//     await request(app)
//       .post('/api/register')
//       .send({ username: 'testuser2', password: 'testpassword2' });

//     const loginResponse = await request(app)
//       .post('/api/login')
//       .send({ username: 'testuser2', password: 'testpassword2' });

//     authToken = loginResponse.body.token; // Adjust based on your token structure

//     expect(loginResponse.status).toBe(200); // Typically 200 for successful login
//     expect(authToken).toBeDefined();
//   });

//   it('should create a new state', async () => {
//     const response = await request(app)
//       .post('/api/states')
//       .set('Authorization', `Bearer ${authToken}`)
//       .send({ name: 'teststate1', description: 'This is a test state1' });

//     expect(response.status).toBe(201); // Ensure this matches your API's success status code
//     expect(response.body.name).toBe('teststate1'); // Ensure this matches the expected response
//   });

//   it('should get all states', async () => {
//     const response = await request(app)
//       .get('/api/states')
//       .set('Authorization', `Bearer ${authToken}`);

//     expect(response.status).toBe(200); // Ensure this matches your API's success status code
//     expect(response.body).toBeInstanceOf(Array);
//   });
// });
