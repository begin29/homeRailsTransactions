class MoneyTransactionSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :is_income
end