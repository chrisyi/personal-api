var user = require('../user.js');
module.exports = {
    showuser(req, res) {
         res.status(200).json(user)
    },
    getName(req, res) {
         res.json(user.name)
    },
    getLocation(req, res) {
         res.json(user.location)
    },
    getOccupations(req, res) {
        if (req.query.order === 'desc') {
            const desc = user.occupations.sort()
            res.json(desc)
        } else if (req.query.order === 'asc'){
            const asc = user.occupations.reverse()
            res.json(asc)
        } else {
            res.json(user.occupations)
        }
    },
    getOccupationsByLatest(req, res) {
         res.json(user.occupations.slice(-1))
    },
    getHobbies(req, res) {
         res.json(user.hobbies)
    },
    getHobbiesByType(req, res) {
        const type = req.params.type
        const hobbytype = user.hobbies.filter(function (hobby) {
            return hobby.type === type
        })
         res.json(hobbytype)
    },
    getFamily(req, res) {
         res.json(user.family)
    },
    getFamilyByGender(req, res) {
        const gender = req.params.gender;
        const gendertype = user.family.filter(function (fam) {
            return fam.gender === gender;
        })
         res.json(gendertype)
    },
    getRestaurants(req, res) {
         res.json(user.restaurants)
    },
    getRestaurantsByName(req, res) {
        const name = req.params.name;
        const restaurantname = user.restaurants.filter(function (rest) {
            return rest.name === name
        })
         res.json(restaurantname)
    },
    putName(req, res) {
        user.name = req.query.name
        res.json(user.name)
    },
    putLocation(req, res) {
        user.location = req.query.location;
    },
    postHobbies(req, res) {
        user.hobbies.push()
    }
}