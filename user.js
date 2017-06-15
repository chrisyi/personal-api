var user = {
  name: 'Chris',
  location: 'Dallas',
  occupations: ['pharmacy', 'mosquito'],
  hobbies: [
    {
      name: 'sleeping',
      type: 'physical'
    },
    {
      name: 'ffrk',
      type: 'game'
    },
    {
      name: 'eating',
      type: 'physical'
    }
  ],
  family: [
    {
      name: 'Dad',
      relation: 'father',
      gender: 'male'
    },
    {
      name: 'Mom',
      relation: 'mother',
      gender: 'female'
    },{
      name: 'Brother',
      relation: 'sibling',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'ChopHouse',
      type: 'fastFood',
      rating: 10
    },
    {
      name: 'Zenna',
      type: 'bar',
      rating: 1
    },
    {
      name: 'IrishPub',
      type: 'bar',
      rating: 8
    }
  ]
};
module.exports = user;