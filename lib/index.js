'use strict';

var _ = require('lodash');

function countWords(sentence) {
	return _.chain(sentence.toUpperCase())
			.words()
			.countBy(_.identity)
			.map(function(size, word) {
				return { word: word, size: size };
			})
			.value();
}

module.exports = countWords;
