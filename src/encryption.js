import bcrypt from 'bcryptjs';

const encryption = {};

encryption.password = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const newPassword = bcrypt.hash(password, salt);
    return newPassword;
}

encryption.verify = async (entryPassword, dbPassword) => {
    const band = await bcrypt.compare(entryPassword, dbPassword);
}

export default encryption;