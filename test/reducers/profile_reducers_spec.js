// import {expect} from 'chai';
// import {GET_ALL_PROFILES} from '../../src/actions/types';
// import reducer, {INITIAL_STATE} from '../../src/reducers/profile_reducers';

// describe('reducer profile', () => {

//     it('handles GET_PROFILE', () => {
//         const action = {
//             type: GET_ALL_PROFILES,
//             payload: {
//                 data: [
//                     {
//                         id: 1,
//                         name: 'Lala'
//                     },
//                     {
//                         id: 1,
//                         name: 'Lalasa'
//                     }
//                 ]
//             }
//         };
//         const nextState = reducer(INITIAL_STATE, action);
//         expect(nextState).to.exist;
//         expect(nextState.allProfiles).to.deep.equal(
//             [
//                 {
//                     id: 1,
//                     name: 'Lala'
//                 },
//                 {
//                     id: 1,
//                     name: 'Lalasa'
//                 }
//             ]);
//     });
// });
