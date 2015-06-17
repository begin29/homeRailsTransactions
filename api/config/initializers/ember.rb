EmberCLI.configure do |c|
  c.build_timeout = 10
  c.app :frontend, path: "../client", exclude_ember_deps: ["jquery", "handlebars"], build_timeout: 10
end
