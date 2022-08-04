const Users = {
  name: 'User',
  properties: {
    _id: 'int?',
    user: 'string',
    email: 'string',
    password: 'string',
    library: 'array',
    image: 'string',
    createdAt: 'string',
  },
  primaryKey: '_id',
};

export default Users;