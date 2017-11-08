import firebase  from './Firebase';

export function loginVonlutary(email, password, callback) {
    email = 'gislainycrisostomo@gmail.com';
    password = '123456';
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log(firebase.auth().currentUser)
        callback()
    })    
    .catch(error => {
        callback(error);
    });
}
export function reportAvailability(chat, voice, video) {
    const obj = {
        voluntaryId: firebase.auth().currentUser,
        chat,
        voice,
        video
    };
}
// export default { 
//     loginVonlutary,
//     reportAvailability
// };