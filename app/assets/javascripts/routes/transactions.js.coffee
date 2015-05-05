App.TransactionsRoute = Ember.Route.extend
  model: ->
    @get('store').findAll 'transaction'