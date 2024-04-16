class AddOffline < ActiveRecord::Migration[7.1]
  def change
    create_table :offlines do |t|
      t.string :title
      t.boolean :published

      t.timestamps
    end
  end
end
