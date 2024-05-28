class DropArticles < ActiveRecord::Migration[7.1]
  def change
    drop_table :articles
    drop_table :offlines
    drop_table :article_types
  end
end
