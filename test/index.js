'use strict';

var wordClouds = require('../lib');
var expect = require('chai').expect;

describe('it counts', function () {
  it('single word', function () {
    var sentence = 'Sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([{ word: 'Sentence', size: 1 }]);
  });

  it('multiple words', function () {
    var sentence = 'This is a sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'This', size: 1 }, 
    	{ word: 'is', size: 1 }, 
    	{ word: 'a', size: 1 }, 
    	{ word: 'sentence', size: 1 }
    ]);
  });

  it('words with marks', function () {
    var sentence = 'This! is, a? sentence...';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'This', size: 1 }, 
    	{ word: 'is', size: 1 }, 
    	{ word: 'a', size: 1 }, 
    	{ word: 'sentence', size: 1 }
    ]);
  });

  it('capitlized words', function () {
    var sentence = 'This Is A Sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'This', size: 1 }, 
    	{ word: 'Is', size: 1 }, 
    	{ word: 'A', size: 1 }, 
    	{ word: 'Sentence', size: 1 }
    ]);
  });

});
