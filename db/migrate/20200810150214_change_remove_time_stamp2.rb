class ChangeRemoveTimeStamp2 < ActiveRecord::Migration[6.0]
  def change
        remove_column :text_messages, :timeStamp
  end
end
