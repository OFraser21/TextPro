class ChangePhonenumberbigint2 < ActiveRecord::Migration[6.0]
  def change
    change_column :text_messages, :phoneNumber, :bigint
  end
end
