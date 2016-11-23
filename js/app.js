//Firebase
(function() {

  // Count 
    var c= 0;
   // Initialize Firebase
      const config = {
        apiKey: "AIzaSyCwcpQu7O7PemOA0sVAMtTygTmXrZEUj0Y",
        authDomain: "no-more-hunger.firebaseapp.com",
        databaseURL: "https://no-more-hunger.firebaseio.com",
        storageBucket: "no-more-hunger.appspot.com",
        messagingSenderId: "344231774066"
      };
      firebase.initializeApp(config);

      // Get elements
      const txtEmail = document.getElementById('email');
      const btnSend = document.getElementById('btnSend');
      const pass = "000000";

      // Check Sign
      btnSend.addEventListener('click', e =>{
        // Get Email
        const email = txtEmail.value;
        const pass = '000000';
        const auth = firebase.auth();
        // Check Email
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
      });

      // Add Sign
      btnSend.addEventListener('click', e => {
        // Get Email
        const email = txtEmail.value;
        const pass = '000000';
        const auth = firebase.auth();
        // Check Email
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise
        .catch(e => console.log(e.message));

      });

      // Realtime Listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
          console.log(firebaseUser);
          c= c+1;
          console.log(c);
        }else {
          console.log('Email Already in DB')
        }

      });


      // create REF
      const dbRefObject =firebase.database().ref().child('object');

      // Sync
      dbRefObject.on('value',snap => console.log(snap.val()));

      //create user
      const auth = firebase.auth();

}());
    
    