import User from './models/User';
import encryption from './encryption';

const resolvers = {


    Query: {
        getUsers: async () => {
            const users = await User.find();
            return users;
        },
        getUserById: async (root, { _id }, ctx) => {
            const user = await User.findById({_id});
            return user
        }   
    },
    Mutation: {
        createUser: async (root, { user }, ctx) => {

            //ENCRIPTACION DE PASSWORD
            user.password = await encryption.password(user.password);
            //CREAMOS USUARIO
            const newUser = new User(user);
            //GUARDAMOS EN LA BASE DE DATOS
            await newUser.save();

            return newUser;
        },
        updateUser: async (root, { _id, user }) => {
            const updateUser = await User.findByIdAndUpdate(_id, user, {new: true});
            return updateUser;
        },
        deleteUser: async (root, { _id }) => {
            const deleteUser = await User.findByIdAndDelete(_id);
            return deleteUser;
        }
    }
}

export default resolvers;