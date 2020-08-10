class Api::V1::TextMessagesController < ApplicationController
  def index
    textmessage = TextMessage.all.order(created_at: :asc)
    render json: textmessage
  end

  def create
    textmessage = TextMessage.create!(textmessage_params)
    TwilioTextMessenger.new(textmessage.message,textmessage.phoneNumber).call
    if textmessage
      render json: textmessage
    else
      render json: textmessage.errors
    end
  end

  def show
    if textmessage
      render json: textmessage
    else
      render json: textmessage.errors
    end
  end

  def destroy
    textmessage&.destroy
    render json: {message: 'Text Deleted'}
  end

  private

  def textmessage_params
    params.permit(:name, :phoneNumber, :message)
  end

  def textmessage
    @textmessage ||= TextMessage.find(params[:id])
  end
end
