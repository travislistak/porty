class AddLinkToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :link, :string
  end
end
