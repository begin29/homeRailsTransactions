App.Transaction = DS.Model.extend({
  description: DS.attr('string')
  price: DS.attr('number')
  is_income: DS.attr('boolean')
});