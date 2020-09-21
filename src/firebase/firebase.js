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

export { firebase, database as default };

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

/*database.ref('age')
.remove()
.then(()=>{
console.log('Data was removed');
}).catch((e)=>{
console.log('Did not remove data',e);
});
*/
//or by using set

//database.ref('age').set(null);


//TO Update
/*database.ref().update({
  name:'Mike',
  age:20,
})*/

//To Update and add new data
/*database.ref().update({
  name: 'Mike',
  age: 20,
  job: 'Software Developer',
})*/

//To Update // Add new //  As well as Delete
/*database.ref().update({
  name: 'Mike',
  age: 20,
  job: 'Software Developer',
  isSingle: null
});*/

/*database.ref().update({
  name: 'Mike',
  age: 20,
  job: 'Software Developer',
  'location/city':'Boston'
})


database.ref('location/city')
.once('value')
.then((snapshot)=>{
const val = snapshot.val();
console.log(val);
}).catch((e)=>{
  console.log('Error fetching data', e)
});

database.ref().on('value',(snapshot) => {
  console.log(snapshot.val());
});

database.ref().off();

const onValueChange = (snapshot)=>{
console.log(snapshot.val());
}

database.ref().on('value',onValueChange);
database.ref().off(onValueChange);

const onValueChangee = database.ref().on('value',(snapshot)=>{
  console.log(snapshot.val());
});


database.ref().off(onValueChangee)

database.ref('expenses')
.once
.then((snapshot)=>{
  const expenses = [];

  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses);
})


database.ref('expenses').on('value',(snapshot)=>{
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })

  console.log(expenses);
})


// Three main methods

database.ref('expenses').on('child_removed', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })

  console.log(expenses);
})

database.ref('expenses').on('child_changed', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })

  console.log(expenses);
})

database.ref('expenses').on('child_added', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })

  console.log(expenses);
})*/