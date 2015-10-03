import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import d3 from 'd3';
import cloud from 'd3-cloud';

export class Welcome {

  static inject = [HttpClient]

  heading = 'word clouds';
  englishText = '';
  portugueseText = '';
  words = [];

  constructor(http) {
    this.http = http;
  }

  submit(){
    this.http
      .post('/word-clouds', {englishText: this.englishText, portugueseText: this.portugueseText})
      .then(httpResponse => {
        this.words = JSON.parse(httpResponse.response);
        
        var fill = d3.scale.category20();

        var maxSize = d3.max(this.words, function(d) { return d.size; });
        var minSize = d3.min(this.words, function(d) { return d.size; });

        var fontScale = d3.scale.linear().domain([minSize, maxSize]).range([20,150]);

        var draw = function (words) {
          d3.select("#cloud > svg").remove();
          d3.select("#cloud").append("svg")
              .attr("width", layout.size()[0])
              .attr("height", layout.size()[1])
            .append("g")
              .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
              .data(words)
            .enter().append("text")
              .style("font-size", function(d) { return d.size + "px"; })
              .style("font-family", "Impact")
              .style("fill", function(d, i) { return fill(i); })
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .text(function(d) { return d.text; });
        } 
        
        var layout = cloud()
            .size([500, 500])
            .words(this.words)
            .padding(5)
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .fontSize(function(d) { return fontScale(d.size); })
            .on("end", draw)

        layout.start();    

      });
  }

}