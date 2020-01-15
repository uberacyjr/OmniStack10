const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports ={
    async index(request, response){
        const { latitude, longitude, techs} = request.query;
        const techsArray =  parseStringToArray(techs);
        //$in operator do mongodb
        try{
            const devs =  await Dev.find({
                techs: {
                    $in: techsArray,
                },
                location : {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: 100,
                    },
                },
            });
            return response.json({devs});
        }catch(error){
            console.log(error);
        }
        return response.json({devs: []});
    }
}