const PROTO_PATH = "./customers.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const CustomerService = grpc.loadPackageDefinition(packageDefinition);

const client = new CustomerService(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

module.exports = client;
