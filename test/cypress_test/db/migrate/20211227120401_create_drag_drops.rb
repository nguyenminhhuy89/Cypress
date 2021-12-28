class CreateDragDrops < ActiveRecord::Migration
  def change
    create_table :drag_drops do |t|

      t.timestamps
    end
  end
end
