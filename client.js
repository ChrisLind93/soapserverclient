var soap = require('soap');
var url = 'http://localhost/ws/soap.php?wsdl';
var args = { a: '8887', b: '7' };

soap.createClient(url, function (err, client) {
    client.add(args, function (err, result) {
        console.log(result);
    });

    client.div(args, function (err, result) {
        console.log(result);
    });
});