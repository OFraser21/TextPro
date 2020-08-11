class TwilioTextMessenger
    attr_reader :message, :to
    def initialize(message, to)
      @message = message
      @to = to
    end
  
    def call
      account_sid = 'ACbfb5f5fb2fb61644c1543ae023d981ac'
      auth_token = '53bc8069981d397c9fa2c0ca628d06d0'
      phone = "+19802555710"
      @client = Twilio::REST::Client.new account_sid, auth_token
      @client.messages.create({
        from: phone,
        to: to,
        body: message
      })

    end
  end