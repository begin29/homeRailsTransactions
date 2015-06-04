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
    @money_transaction = MoneyTransaction.new(money_transaction_params)
    if @money_transaction.save
      render json: @money_transaction
    else
      # TODO: need to handle this
      render nothing: true, status: :bad_request
    end
  end

  def update
    @money_transaction = MoneyTransaction.find(params[:id])
    if @money_transaction.update_attributes(money_transaction_params)
      render json: @money_transaction
    else
      # TODO: need to handle this
      render nothing: true, status: :bad_request
    end
  end

  private

  def money_transaction_params
    params.require(:money_transaction).permit(:is_income, :price, :description)
  end
end