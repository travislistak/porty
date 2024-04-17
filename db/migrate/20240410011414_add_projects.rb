class AddProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title

      t.timestamps
    end
  end
end