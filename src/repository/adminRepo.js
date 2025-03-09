import Admin from "../models/admin.js";

export const getAdminByUserName = async (username) =>
  Admin.findOne({ username });

export const createAdmin = async (userData) => {
  const newAdmin = new Admin(userData);
  return await newAdmin.save();
};

export const updateAdminRefreshToken = async (username, token) => {
  return await Admin.findOneAndUpdate(
    { username },
    { refreshToken: token },
    { new: true }
  );
};
