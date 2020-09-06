import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCo163fUEdHNc-Gr3nEiMq_oHk14T18piI',
  authDomain: 'expensify-6bfa4.firebaseapp.com',
  databaseURL: 'https://expensify-6bfa4.firebaseio.com',
  projectId: 'expensify-6bfa4',
  storageBucket: 'expensify-6bfa4.appspot.com',
  messagingSenderId: '906734520460',
  appId: '1:906734520460:web:fba94a80f2b7f0792dd3a9',
  measurementId: 'G-H2WRVM4X23',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Writing to database ****

/*database.ref().set({
name: 'sourabh',
age:22,
location: {
  city:'Philadelphia',
  country: 'United States'
}
}).then(()=>{
console.log('Data is saved!')
}).catch((e)=>{
console.log('This failed',e);
});*/

//database.ref().set('This is my data');

/*database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref('attributes').set({
  height:74,
  weight:150
})*/

// Removing from database

database.ref('age')
.remove()
.then(()=>{
console.log('Data was removed');
}).catch((e)=>{
console.log('Did not remove data',e);
});

//or by using set

//database.ref('age').set(null);