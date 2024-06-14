class CreateContactMes < ActiveRecord::Migration[7.1]
  def change
    create_table :contact_mes do |t|
      t.string :email
      t.string :company

      t.timestamps
    end
  end
end
