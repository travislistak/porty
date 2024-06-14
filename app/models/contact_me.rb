class ContactMe < ApplicationRecord
  has_rich_text :content

  validates :email, presence: true
  validates :company, presence: true
  validates :content, length: { maximum: 2000 }
  validates :content, attachment_size: true
end