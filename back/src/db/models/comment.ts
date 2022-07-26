import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

class Comment extends Model {
    static associate(models) {}
}
  
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: DataTypes.STRING,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER,
    tags: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'comments',
    timestamps: false,
  }
)

export { Comment }