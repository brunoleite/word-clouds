import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class Welcome {

  static inject = [HttpClient]

  heading = 'word clouds';
  englishText = '';
  portugueseText = '';

  constructor(http) {
    this.http = http;
  }

  submit(){
    this.http
      .post('/word-clouds', {englishText: this.englishText, portugueseText: this.portugueseText})
      .send()
      .then(function() {
        alert('haha');
      });
  }

}