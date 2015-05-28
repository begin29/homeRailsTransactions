class Api::V1::MoneyTransactionsController < ApplicationController
  respond_to :json

  def index
    respond_with MoneyTransaction.all
  end

  def show
    respond_with MoneyTransaction.find(params[:id])
  end

  def edit
    respond_with MoneyTransaction.find(params[:id])
  end

  def create
    binding.pry
    @money_transaction = MoneyTransaction.new(money_transaction_params)
    if @money_transaction.save
      # respond_with { success: true }
    else
      # respond_with { error: true }
    end
  end

  private

  def money_transaction_params
    params.require(:money_transaction).permit(:is_income, :price, :description)
  end
end