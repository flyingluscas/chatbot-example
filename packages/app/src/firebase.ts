import { initializeApp } from 'firebase/app';
import { getDatabase, connectDatabaseEmulator, ref, push, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC1IdTLKQoYlWrsS8Zq_fkVjqfUTAf-jgA",
  authDomain: "fly-ai-chatbot-example.firebaseapp.com",
  databaseURL: "https://fly-ai-chatbot-example-default-rtdb.firebaseio.com",
  projectId: "fly-ai-chatbot-example",
  storageBucket: "fly-ai-chatbot-example.firebasestorage.app",
  messagingSenderId: "235361377469",
  appId: "1:235361377469:web:ab9e584fafa874075a2bd4"
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

connectDatabaseEmulator(database, 'localhost', 9000);

const pushToRealTimeDatabase = (path, payload) => push(ref(database, path), payload)

const watchRealTimeDatabase = (path, callback) => onValue(ref(database, path), (snapshot) => callback(snapshot.val()))

export { database, pushToRealTimeDatabase, watchRealTimeDatabase };
