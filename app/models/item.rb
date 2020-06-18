class Item < ApplicationRecord
  belongs_to :user
  validates :name, length: { minimum: 3 }
  validates :location, length: { minimum: 3 }
end
