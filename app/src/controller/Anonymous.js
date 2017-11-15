import firebase  from './Firebase';

export function loginAnonymous(type, objData, callback) {
    objData.email = 'gislainycrisostomo@gmail.com';
    objData.password = '123456';
    if (type == 'google') {

    } else if (type == 'facebook') {

    } else if (type == 'anonymous') {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log(firebase.auth().currentUser.uid)
                callback()
            })    
            .catch(error => {
                callback(error);
            });
    } else if (type == 'password') {
    }
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