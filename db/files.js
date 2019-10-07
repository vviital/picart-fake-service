const _ = require('lodash');

const createPoints = (times = 2000) => {
  const array = _.times(times).map(x => ({
    waveLength: Math.random() * 1000,
    intensity: Math.random() * 1000,
  }));

  return _.sortBy(array, x => x.waveLength);
};

const createFile = (id = 0, owner = 0) => ({
  id: id,
  name: 'Culpa elit mollit enim pariatur adipisicing laboris et incididunt deserunt exercitation est id.',
  description: 'Dolor aute velit est excepteur. Dolore Lorem nisi in exercitation minim anim Lorem. Est excepteur eiusmod exercitation eiusmod consequat in voluptate fugiat reprehenderit est ullamco magna consectetur. Proident ipsum aliquip aliqua sunt. Minim magna laboris reprehenderit laborum ea quis veniam consequat occaecat. Occaecat ut ad quis esse aliqua quis quis deserunt nulla cupidatat aliqua non quis velit. Laborum nisi sint officia est sit irure consequat incididunt elit incididunt do consectetur.',
  points: createPoints(),
  ownerID: owner,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

module.exports = {
  createFile,
  files: [{
    id: 0,
    name: 'Culpa elit mollit enim pariatur adipisicing laboris et incididunt deserunt exercitation est id.',
    description: 'Dolor aute velit est excepteur. Dolore Lorem nisi in exercitation minim anim Lorem. Est excepteur eiusmod exercitation eiusmod consequat in voluptate fugiat reprehenderit est ullamco magna consectetur. Proident ipsum aliquip aliqua sunt. Minim magna laboris reprehenderit laborum ea quis veniam consequat occaecat. Occaecat ut ad quis esse aliqua quis quis deserunt nulla cupidatat aliqua non quis velit. Laborum nisi sint officia est sit irure consequat incididunt elit incididunt do consectetur.',
    points: createPoints(),
    ownerID: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }, {
    id: 1,
    name: 'Duis eu ex id esse.',
    description: 'Reprehenderit enim tempor dolore aliqua ea id mollit commodo sunt ex. Do cupidatat duis quis ex in consectetur voluptate tempor ut id consectetur aliqua eu sunt. Pariatur commodo ad ea dolore proident deserunt. Sint aliquip cupidatat ullamco eu ipsum non dolore labore quis occaecat ex tempor ex. Tempor cupidatat culpa quis ad fugiat qui tempor Lorem aliqua non et voluptate exercitation. Est do quis exercitation qui officia elit id sit anim fugiat. Nulla anim cillum quis est.',
    points: createPoints(),
    ownerID: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }]
};
