EmberCLI.configure do |c|
  c.build_timeout = 10
  c.app :frontend,
    path: "app/assets/javascripts/homeTransactions"
end
