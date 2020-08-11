class Contact < ApplicationRecord
  validates: name, presence: true
  validates: phoneNumber, presence: true
end
