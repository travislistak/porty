class Project < ApplicationRecord
  has_rich_text :content

  default_scope{ where(published: true) }
end