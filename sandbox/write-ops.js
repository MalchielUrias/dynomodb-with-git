const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'td_notes_sdk',
    Item: {
        user_id: "bb",
        timestamp: 1,
        title: 'my_title',
        content: "my_content" 
    }
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }   
});

// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: "bb",
//         timestamp: 1,
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }   
// });