const deepmerge = require("deepmerge");

function isMergeableObject(o) {
  const p = Object.getPrototypeOf(o);
  return p === Array.prototype || p === Object.prototype;
}

function merge(a, b) {
  return deepmerge(a, b, { isMergeableObject });
}

module.exports = merge;
