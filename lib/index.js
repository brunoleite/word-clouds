'use strict';

var _ = require('lodash');

function countWords(sentence) {
	return _.chain(sentence.toUpperCase())
			.words()
			.countBy(_.identity)
			.map(function(size, word) {
				return { text: word, size: size};
			})
			.value();
}

module.exports = countWords;
