class ChangePhoneNumberToBigInt < ActiveRecord::Migration[6.0]
  def change
    def up 
      change_column :text_messages, :phoneNumber, :bigint
    end
  end
end
