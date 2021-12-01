const { fromJS } = require('immutable');

const getImmutableObject = (object) => {
  return fromJS(object);
}

module.exports = getImmutableObject;