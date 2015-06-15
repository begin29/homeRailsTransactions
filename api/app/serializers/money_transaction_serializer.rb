class MoneyTransactionSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :is_income
  has_many :tags

  embed :ids, include: false
end