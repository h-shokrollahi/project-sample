export default {
  // The private keys which are only available within server-side
  apiSecret: "123",
  // Keys within public, will be also exposed to the client-side

  public: {
    BASE_URL: "https://localhost:3000",
    API_URL: "https://localhost:3000/api",
    DOMAIN: "https://localhost:3000",
    HOST: "localhost:3000",
    MODE: "dev",
  },
};
