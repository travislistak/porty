class CreateHireMe < ActiveRecord::Migration[7.1]
  def change
    create_table :hire_mes do |t|
      t.string :email
      t.string :company

      t.timestamps
    end
  end
end
