EmberCLI.configure do |c|
  c.build_timeout = 10
  c.app :frontend, path: "../client"
end
