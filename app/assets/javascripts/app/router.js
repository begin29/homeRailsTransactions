App.Router.map(function() {
  this.resource('transactions', function(){
    this.resource('transaction', { path:'/:transaction_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});