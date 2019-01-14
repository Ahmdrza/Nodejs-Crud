const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:admin@127.0.0.1:5432/node'

const pool = new Pool({
  connectionString: connectionString,
})

exports.count = function(req, res) {
    
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE user_id = $1', [1], (err, res) => {
            if (err) {
            throw err
            }
            resolve(res.rows[0]);
        });
      });
}