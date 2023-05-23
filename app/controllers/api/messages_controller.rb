class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: { greeting: @messages.sample.greeting }
  end
end
