class AddColumnsToArticles < ActiveRecord::Migration[7.1]
  def change
    add_column :articles, :published, :boolean, null: false

    create_table :article_types do |t|
      t.string :category

      t.timestamps
    end

    add_reference(:articles, :article_type, index: true, null: false)
  end
end
