class ArticleType < ApplicationRecord
  has_many :articles
  CATEGORIES = %w[offline best_practice code opinion]
end
