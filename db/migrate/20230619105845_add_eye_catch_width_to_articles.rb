class AddEyeCatchWidthToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :eye_catch_width, :integer
  end
end
