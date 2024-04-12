class AddPythonArticleType < ActiveRecord::Migration[7.1]
  def up
    ArticleType.create(category: "python")
  end

  def down
    raise ::ActiveRecord::IrreversibleMigration
  end
end
