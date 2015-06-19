import AutoCompleteComponent from "ember-cli-auto-complete/components/auto-complete";

export default AutoCompleteComponent.extend({
  valueProperty: "name",
  suggestions: function() {
    var inputVal = this.get("inputVal") || "";
    return this.get("options").filter(function(item) {
      if(item.get("name") != undefined){
        return item.get("name").toLowerCase().indexOf(inputVal.toLowerCase()) > -1;
      }
    });
  }.property("inputVal", "options.@each"),
  optionsToMatch: function() {
    return this.get("options");
  }.property("options.@each")
});