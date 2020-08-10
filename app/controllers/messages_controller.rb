class MessagesController < ApplicationController 
    skip_before_action :verify_authenticity_token
    #skip_before_filter :authenticate_user!, :only => "reply"   
     
     def reply
       message_body = params["Body"]
       from_number = params["From"]

       #save textmessage in db
       textmessage = TextMessage.create!(textmessage_params)
       phone = "+19802555710"
=begin Automatic Replying
       boot_twilio
       sms = @client.messages.create(
         from: phone,
         to: from_number,
         body: "We did it, I received your text!."
       )/*
=end
     end
   
     private

     def textmessage_params
        params.permit("Example", :From, :Body)
      end
   
     def boot_twilio
        account_sid = 'ACbfb5f5fb2fb61644c1543ae023d981ac'
        auth_token = '53bc8069981d397c9fa2c0ca628d06d0'
       @client = Twilio::REST::Client.new account_sid, auth_token
     end

   end