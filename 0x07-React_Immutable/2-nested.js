export default function accessImmutableObject(object, array) {
  return array.reduce((obj, key) => obj[key], object);
}
