'use strict';

var errorTransform = require('./error.transform').transform;
var isBoolean = require('../../util/boolean').isBoolean;
var argsToArray = require('../../util/array').argsToArray;

/**
 * Attach a transform function to math.subset
 * Adds a property __transform__ containing the transform function.
 *
 * This transform creates a range which includes the end value
 * @param {Object} math
 */
module.exports = function (math) {
  math.subset.__transform__ = function () {
    try {
      return math.subset.apply(math, argsToArray(arguments));
    }
    catch (err) {
      throw errorTransform(err);
    }
  };
};