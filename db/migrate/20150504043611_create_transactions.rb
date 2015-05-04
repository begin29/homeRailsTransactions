class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.string :description
      t.integer :price
      t.boolean :is_income

      t.timestamps
    end
  end
end
