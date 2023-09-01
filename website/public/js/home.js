const signInWithGoogleButton = document.getElementById('signInWithGoogle');

//Necessary part for the firebase built in functions
//It's easier and cleaner to type auth.signInWithEmailAndPassword
//than firebase.auth().signInWithEmailAndPassword
//also it's less repetitive since we are using it more than once
const auth = firebase.auth();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = googleProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = googleProvider.credentialFromError(error);
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
  });
}

signInWithGoogleButton.addEventListener('click', signInWithGoogle);
