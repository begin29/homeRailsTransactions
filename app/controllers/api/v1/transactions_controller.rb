class Api::V1::TransactionsController < ApplicationController
  respond_to :json

  def index
    respond_with Transaction.all
  end

  def show
    respond_with Transaction.find(params[:id])
  end

  private

  def transaction_params
    params.require(:transaction).permit(:is_income, :price, :description)
  end
end