var user = require('../user.js');
var skillz = require('../skillz.js');
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
        } else if (req.query.order === 'asc') {
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
        user.name = req.body.name
        res.json(user.name)
        //to test in postman: {"name": "putname"}
    },
    putLocation(req, res) {
        user.location = req.body.location;
        return res.status(200).json(user.location)
    },
    postHobbies(req, res) {
        user.hobbies.push(req.body)
        return res.json(user.hobbies)
    },
    putHobbies(req, res) {
        var type = req.params.type
        modifyObj = user.hobbies.find(type)
        Object.assign(modifyObj, req.body)
        return res.status(200).json(user.hobbies)
        // var type = req.params.type
        // modifyObj = user.hobbies.find(req.params.id);
        // Object.assign(modifyObj, req.body)  
        // return res.status(200).json(user.hobbies)
    },
    postOccupations(req, res) {
        user.occupations.push(req.body.occupations)
        return res.status(200).json(user.occupations)
    },  // to test in postman: {"occupations": "coder"}
    postFamily(req, res) {
        user.family.push(req.body)
        return res.status(200).json(user.family)
    },
    postRestaurants(req, res) {
        user.restaurants.push(req.body)
        return res.status(200).json(user.restaurants)
    },
    getSkillz(req, res) {
        if (req.query.experience) {
            var filtered = skillz.skillz.filter(skill => skill.experience.toLowerCase() === req.query.experience.toLowerCase())
            return res.status(200).json({
                skillz: filtered
            })
        }
        return res.status(200).json(skillz)
    },
    postSkillz(req, res) {
        skillz.skillz.push(req.body)
        return res.status(200).json(skillz.skillz)
    }
}