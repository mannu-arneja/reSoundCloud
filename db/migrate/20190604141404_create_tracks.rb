class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :desc
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :tracks, :author_id
    add_index :tracks, :title
  end
end
