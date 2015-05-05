App.Transaction = DS.Model.extend
  description: DS.attr('string')
  price: DS.attr('integer')
  is_income: DS.attr('boolean')