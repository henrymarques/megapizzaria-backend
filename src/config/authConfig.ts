export default {
  jwtSecret: process.env.SECRET ?? "",
  jwtExpirationTime: "10m",
};
