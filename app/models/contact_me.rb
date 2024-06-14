class ContactMe < ApplicationRecord
  # Need to stort out the storage attachment issues and them not being deleted from digital ocean
  # s3 when model validation fails.
  # has_rich_text :content

  validates :email, presence: true
  validates :company, presence: true
  validates :message, presence: true
  # validates :content, length: { maximum: 2000 }
  # validates :content, attachment_size_and_type: true
end