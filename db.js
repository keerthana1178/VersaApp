import { Alert } from "react-native";
import SQLite from "react-native-sqlite-storage"
//SQLite.enablePromise(true);

/*global.db = SQLite.openDatabase(
    {
        name:'versauser',
        location:'default',
    },
    () => {},
    error => { console.log(error) }
);*/

export function dbInit() {
    db.transaction((tx)=>{
        tx.executeSql(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            passwordHash TEXT NOT NULL,
            apiKey TEXT NOT NULL UNIQUE,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL
            )`,
            [],
            () => {},
            error => {console.log(error)}
        )
    });
};

/*export function getUserDetails(userName, Password){

    var usertable = [];
    db.transaction((tx) => {
        tx.executeSql(
            `SELECT username, passwordHash FROM Users WHERE username=? AND passwordHash=?`,
            [userName, Password],
            (tx,results) => {
                //console.log("Query comp");
                var len=results.rows.length;
                for (let i=0; i<len; i++) {
                    let row= results.rows.item(i);
                    usertable.push(row);
                    //console.log(row);
                }
                //console.log(usertable);
                return usertable;
            });
    });
}*/

export function checkUser(username, password) {
    let user = getUser(username);
    if (!user) return false;

    let passwordHash = hash(password);
    return user.passwordHash === passwordHash
};

function getUser(username) {
    // fetch record from sqlite
    let user = db.executeSql(`SELECT * FROM Users WHERE username=?`, [username])
    return user;
}

export async function addUser(username, passwordHash, apiKey, firstName, lastName) {
    // check if user already exists
    let user = getUser(username)
    if (user) return false
    
    //let passwordHash = hash(password)
    await db.transaction(async (tx) => {
        tx.executeSql("INSERT INTO Users (username, passwordHash, apiKey, firstName, lastName) VALUES (?, ?, ?, ?, ?)", 
        [username, passwordHash, apiKey, firstName, lastName],
        () => {
            Alert.alert('User sucessfully registered',[{text: 'Okay'}]);
            //return true;
        }, 
        error => {
            Alert.alert('Registration Failed!','username and ApiKey must be unique.', [{text: 'Okay'}]);
            console.log(error);
        }
        )
    });
    //return true
};

async function hash(str) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(str);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};