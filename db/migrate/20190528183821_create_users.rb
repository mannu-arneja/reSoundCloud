class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null:false
      t.string :gender
      t.integer :age
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :location
      t.text :bio
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end

end
