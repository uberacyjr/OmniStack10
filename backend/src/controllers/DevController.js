const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');
//index, show, store, update, destoy

module.exports = {


    async index(request, response)  {
        const devs =  await Dev.find();
        return response.json(devs);
    },

    async store(request, response)  {
        const { github_username, techs, latitude, longitude } =  request.body;

        let dev = await Dev.findOne({github_username});
        console.log(dev);
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const { name = login, avatar_url, bio } = apiResponse.data;
            const techsArray = parseStringToArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev =  await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs:techsArray,
                    location
                });
            // console.log(name,avatar_url, bio);
            //Aguardar o await para continuar
        }
        return response.json(dev);
    }
};