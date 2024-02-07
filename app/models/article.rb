class Article < ApplicationRecord
  has_rich_text :content
  belongs_to :article_type

  default_scope{ where(published: true) }
end
