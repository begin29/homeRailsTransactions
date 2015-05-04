json.array!(@transactions) do |transaction|
  json.extract! transaction, :id, :description, :price, :is_income
  json.url transaction_url(transaction, format: :json)
end
