import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('vXLKFXZJjPzY381xbusX').collection('cartItems').doc('9Zy3TGtA59FGPYwQZVsP');

firestore.doc('/users/vXLKFXZJjPzY381xbusX/cartItems/9Zy3TGtA59FGPYwQZVsP');
firestore.collection('/users/vXLKFXZJjPzY381xbusX/cartItems');