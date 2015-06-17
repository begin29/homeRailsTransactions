class MoneyTransactionSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :is_income
  embed :ids, include: true
  has_many :tags

end