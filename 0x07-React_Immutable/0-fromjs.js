import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
  return fromJS(object);
}

module.exports = getImmutableObject;
