App.Router.map(function() {
  this.resource('transactions', function(){
    this.resource('transactions', { path:'/:transaction_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});