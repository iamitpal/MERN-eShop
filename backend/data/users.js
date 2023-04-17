import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
  },
  {
    name: "Amit Pal",
    email: "amit@example.com",
    password: bcrypt.hashSync("123456", 8),
  },
  {
    name: "Shivam",
    email: "shivam@example.com",
    password: bcrypt.hashSync("123456", 8),
  },
];

export default users;
