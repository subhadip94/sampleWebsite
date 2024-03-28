const connection = require('../db/index.js')

const getRoute = (req, res) => {
    console.log("get");
    var sql = `SELECT * FROM city LIMIT 5`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
        // console.log("Table created", typeof (result), JSON.stringify(result));
    });
}
const postRoute = async (req, res) => {
    console.log("req", req.body);
    const result= await dbRslt();
    // var sql = `SELECT * FROM city LIMIT 5`;
    function dbRslt() {
        var sql = `SELECT * FROM city LIMIT 5`;

        return new Promise((resolve, reject) => {
            connection.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    // const result = await connection.query(sql, function (err, result) {
    //     if (err) {
    //         console.log("err is",err);;
    //     }
    //     return result[0];
    // })
    // function setValue(value) {
    //     result = value;
    //     console.log('value=', value);
    //     return JSON.stringify(value);
    // }
    console.log(result, 'yt');
}

module.exports = { getRoute, postRoute };