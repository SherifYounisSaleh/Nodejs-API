const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: "users_email_key"
    },
    first_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    
  }
  // , create_At: {
  //   type: 'TIMESTAMP',
    
  // },updateAt: {
  //   type: 'TIMESTAMP',
    
  // }
},
  
  {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
