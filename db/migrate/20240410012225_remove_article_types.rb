class RemoveArticleTypes < ActiveRecord::Migration[7.1]
  def change
    drop_table :article_types
    remove_column :articles, :article_type_id, :integer
  end
end
