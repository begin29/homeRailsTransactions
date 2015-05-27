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

  private

  def money_transaction_params
    params.require(:money_transaction).permit(:is_income, :price, :description)
  end
end