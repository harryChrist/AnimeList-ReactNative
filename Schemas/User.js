export default class User {
    static schema = {
        name: "User",
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            user: String,
            email: String,
            password: String,
            library: Array,
        }
    }
}