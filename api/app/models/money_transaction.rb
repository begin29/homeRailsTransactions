class MoneyTransaction < ActiveRecord::Base
  validates :description, presence: true
  validates :price, presence: true
  has_and_belongs_to_many :tags
end
