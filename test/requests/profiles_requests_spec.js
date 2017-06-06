// var supertest = require('supertest-as-promised');
// var request = supertest('https://blooming-escarpment-36300.herokuapp.com/api/v1');
// var assert = require('chai').assert;
// var response_headers;

// describe('Sklep API', function() {

//     it ('should return all profiles', function() {
//         return request.get('/profiles')
//             .send(response_headers)
//             .expect(200)
//             .expect(function(response) {
//                 response_headers = response.headers
//             });
//     });

//     it ('should update profile', function() {
//         return request.put('/profiles/2')
//             .send(response_headers)
//             .send({ name: 'Oleg', age: '32', phone: 4 })
//             .expect(201)
//             .expect(function(response) {
//                 response_headers = response.headers
//             });
//     });

//     it ('should return profile', function() {
//         return request.get('/profiles/2')
//             .send(response_headers)
//             .expect(200)
//             .expect(function(response) {
//                 response_headers = response.headers
//             });
//     });

//     it ('should delete profile', function() {
//         return request.delete('/profiles/1')
//             .send(response_headers)
//             .expect(404)
//     });

// });
