class AddMoneyTransactionsTags < ActiveRecord::Migration
  def change
    create_table :money_transactions_tags do |t|
      t.integer :money_transaction_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
