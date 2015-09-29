'use strict';

var wordClouds = require('../lib');
var expect = require('chai').expect;

describe('it counts', function () {
  it('single word', function () {
    var sentence = 'Sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([{ word: 'SENTENCE', size: 1 }]);
  });

  it('multiple words', function () {
    var sentence = 'This is a sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'THIS', size: 1 }, 
    	{ word: 'IS', size: 1 }, 
    	{ word: 'A', size: 1 }, 
    	{ word: 'SENTENCE', size: 1 }
    ]);
  });

  it('words with marks', function () {
    var sentence = 'This! is, a? sentence...';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'THIS', size: 1 }, 
    	{ word: 'IS', size: 1 }, 
    	{ word: 'A', size: 1 }, 
    	{ word: 'SENTENCE', size: 1 }
    ]);
  });

  it('capitlized words', function () {
    var sentence = 'This Is A Sentence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'THIS', size: 1 }, 
    	{ word: 'IS', size: 1 }, 
    	{ word: 'A', size: 1 }, 
    	{ word: 'SENTENCE', size: 1 }
    ]);
  });

  it('words with partional upper case', function () {
    var sentence = 'This Is A SENtence';
    var temp = wordClouds(sentence);
    expect(temp).to.deep.include.members([
    	{ word: 'THIS', size: 1 }, 
    	{ word: 'IS', size: 1 }, 
    	{ word: 'A', size: 1 }, 
    	{ word: 'SENTENCE', size: 1 }
    ]);
  });

});
