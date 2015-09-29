'use strict';

var wordClouds = require('../lib');
var expect = require('chai').expect;

describe('word-clouds', function () {
  it('counts word', function () {
    var sentence = 'Sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([{ word: 'Sentence', size: 1 }]);
  });

  it('counts words', function () {
    var sentence = 'This is a sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([{ word: 'This', size: 1 }, { word: 'is', size: 1 }, { word: 'a', size: 1 }, { word: 'sentence', size: 1 }]);
  });
});
