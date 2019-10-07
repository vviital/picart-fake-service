const toCollection = array => {
  return ({
    items: array,
    limit: 100,
    offset: 0,
    totalCount: array.length,
    type: 'collection',
  });
};

module.exports = {
  toCollection,
};
