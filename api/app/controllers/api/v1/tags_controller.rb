class Api::V1::TagsController < ApplicationController
  respond_to :json

  def index
    respond_with Tag.all
  end

  def edit
    respond_with Tag.find(params[:id])
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render json: @tag
    else
      render json: {errors: @tag.errors}, status: 422
    end
  end

  def update
    @tag = Tag.find(params[:id])
    if @tag.update_attributes(money_transaction_params)
      render json: @tag
    else
      render json: {errors: @tag.errors}, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])

    if @tag.destroy
      render json: {success: true}
    else
      render json: {errors: @tag.errors}, status: 422
    end
  end

  private

    def tag_params
      params.require(:tag).permit(:name)
    end
end