class AddEyeCatchAlignmentToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :eye_catch_alignment, :integer, default: 0, null: false
  end
end
