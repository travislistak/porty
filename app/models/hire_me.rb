class HireMe < ApplicationRecord
  has_rich_text :content

  validates :content, length: { maximum: 2000 }
end