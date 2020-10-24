const bodyparse = require('body-parser')
const cors = require('cors')
module.exports = app =>{
    app.use(bodyparse.json())
    app.use(cors({
        origin: '*'
    }))
}