const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {
    
    async list(request, response){
        const ngos = await connection('ngos').select('*');
    
        return response.json(ngos);
    },

    async create(request, response){
    
        const { name, email, city, province } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ngos').insert({
            id,
            name,
            email,
            city,
            province,
        })

        return response.json({ id });
    },

}