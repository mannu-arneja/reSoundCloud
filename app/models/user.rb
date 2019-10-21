# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  gender          :string
#  age             :integer
#  password_digest :string           not null
#  session_token   :string           not null
#  location        :string
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'bcrypt'

class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: {minimum: 6}, allow_nil: true
    ## custom validate age

    has_many :tracks,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Track'

    has_one_attached :photo

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return (user && user.is_password?(password)) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        save!
        self.session_token
    end

end
