define([ "use!backbone", "use!handlebars", "text!corpus/corpus.handlebars",
    "corpus/Corpus" ], function(Backbone, Handlebars, corpusTemplate, Corpus) {
  var CorpusView = Backbone.View.extend(
  /** @lends CorpusView.prototype */
  {
    /**
     * @class This is the corpus view. TBA 
     * 
     * @extends Backbone.View
     * @constructs
     */

    initialize : function() {
      this.on('all', function(e) {
        this.render();
      });
      this.model.bind('change', this.render);
      this.render();
    },
    events : {
      "click" : "render",
      "change" : "render"
    },
    model : Corpus,
    template : Handlebars.compile(corpusTemplate),
    el : '#corpus',

    render : function() {
      if(this.model != undefined){
        $(this.el).html(this.template(this.model.toJSON()));
        console.log("\trendering corpus: " + this.model.get("name"));
      }else{
        console.log("\tCorpus model was undefined.");
      }
      return this; 
    },
    loadSample : function() {
      this.model.set("name","Sample Quechua Corpus");
      this.model.set("description","This is a corpus which will let you explore the app and see how it works. \nIt contains some data from one of our trips to Cusco, Peru.");
      this.render();
    }

  });

  return CorpusView;
});