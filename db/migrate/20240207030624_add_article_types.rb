class AddArticleTypes < ActiveRecord::Migration[7.1]
  def up
    ArticleType.create(category: "offline")
    ArticleType.create(category: "best_practice")
    ArticleType.create(category: "code")
    ArticleType.create(category: "opinion")
  end

  def down
    raise ::ActiveRecord::IrreversibleMigration
  end
end
