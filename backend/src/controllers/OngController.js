const connection = require('../database/connection')
const crypto = require('crypto')
module.exports = {
    async index(req, res) {
         const ongs = await connection('ongs').select('*')
      
          return res.json(ongs)
    },

    async store(req, res) {
        const {name, email, whatsapp, city, uf} = req.body


    /**criar o id da ong */
    const id = crypto.randomBytes(4).toString('HEX')//4 bytes de caracteres aleatorios

    /**cadastrar a ong */
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    
    return res.json({id})
    }
}