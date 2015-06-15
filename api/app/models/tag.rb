class Tag < ActiveRecord::Base
  has_and_belongs_to_many :money_transactions
end
