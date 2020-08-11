class CreateTextMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :text_messages do |t|
      t.string :name, null: false
      t.integer :phoneNumber, null: false
      t.string :message, null: false
      t.datetime :timeStamp, null:false
      t.timestamps
    end
  end
end
