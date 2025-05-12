const PROTO_PATH = "./customers.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
const customers = [
  {
    id: "1",
    name: "anjali",
    age: 21,
    address: "delhi",
  },
  {
    id: "2",
    name: "nidhi",
    age: 25,
    address: "banglore",
  },
];
server.addService(customersProto.CustomerService.service, {
  getAll: (call, callback) => {
    //call the DB
    callback(null, { customers });
  },
  Get: (call, callback) => {
    let customer = customers.find(
      (customer) => customer.id === call.request.id
    );
    if (customer) {
      callback(null, { customer });
    } else {
      callback({ code: grpc.status.NOT_FOUND, details: "Customer not found" });
    }
  },
  Insert: (call, callback) => {
    let customer = call.request;
    customer.id = Math.floor(Math.random() * 100);
    customers.push(customer);
    callback(null, { customer });
  },
  Update: (call, callback) => {
    let existingCustomer = customers.find((n) => n.id === call.request.id);
    if (existingCustomer) {
      existingCustomer.name = call.request.name;
      existingCustomer.age = call.request.age;
      existingCustomer.address = call.request.address;
      callback(null, { customer: existingCustomer });
    } else {
      callback({ code: grpc.status.NOT_FOUND, details: "Customer not found" });
    }
  },
  Remove: (call, callback) => {
    let existingCustomerIndex = customers.findIndex(
      (n) => n.id === call.request.id
    );
    if (existingCustomer) {
      customers.splice(existingCustomerIndex, 1);
      callback(null, { customer: existingCustomer });
    } else {
      callback({ code: grpc.status.NOT_FOUND, details: "Customer not found" });
    }
  },
});

server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
server.start();
