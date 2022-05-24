const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgres://kenmtjxa:fl0xGGIDB89ti1Wqp7GBYBEY5mzSPMft@arjuna.db.elephantsql.com/kenmtjxa'
})

const fetch = async(SQL, ...params) => {
    const client = await pool.connect()
    try{
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally {
        client.release()
    }
}

module.exports = {
    fetch
}