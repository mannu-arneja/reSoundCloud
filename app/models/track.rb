# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  desc       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord


    validates :title, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
    
end
