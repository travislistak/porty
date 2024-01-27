class Article < ApplicationRecord
  has_rich_text :content
  has_one_attached :photo
end
