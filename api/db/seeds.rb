# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# outcome
{food: 50, drink:20, phone: 300}.each do |k,v|
  MoneyTransaction.create(description: k, price: v)
end

# income
{salary: 1000, lotery:25, found: 10}.each do |k,v|
  MoneyTransaction.create(description: k, price: v, is_income: true)
end

# tags
%w{education home girls}.each do |category|
  Tag.create(name: category)
end