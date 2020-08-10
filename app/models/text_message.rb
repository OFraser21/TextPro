class TextMessage < ApplicationRecord
  validates :name, presence: true
  validates :phoneNumber, presence: true
  validates :message, presence: true
end
