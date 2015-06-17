class Api::V1::MoneyTransactionsController < ApplicationController
  respond_to :json

  def index
    respond_with MoneyTransaction.includes(:tags).all
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
      render json: {errors: @money_transaction.errors}, status: 422
    end
  end

  def update
    @money_transaction = MoneyTransaction.find(params[:id])
    if @money_transaction.update_attributes(money_transaction_params)
      render json: @money_transaction
    else
      render json: {errors: @money_transaction.errors}, status: 422
    end
  end

  def destroy
    @money_transaction = MoneyTransaction.find(params[:id])

    if @money_transaction.destroy
      render json: {success: true}
    else
      render json: {errors: @money_transaction.errors}, status: 422
    end
  end

  private

    def money_transaction_params
      params.require(:money_transaction).permit(:is_income, :price, :description)
    end
end