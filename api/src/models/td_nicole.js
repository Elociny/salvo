import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class td_nicole extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_nome: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_nome: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'td_nicole',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_nome" },
        ]
      },
    ]
  });
  }
}
