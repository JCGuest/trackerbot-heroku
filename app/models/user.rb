class User < ApplicationRecord
    has_many :items
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }

end

