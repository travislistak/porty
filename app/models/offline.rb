class Offline < ApplicationRecord
  has_rich_text :content
  has_one_attached :header_image do |attachable|
    attachable.variant :thumbnail, resize: "100x100"
    attachable.variant :medium, resize: ""
  end

  default_scope { where(published: true).order(created_at: :desc) }
end