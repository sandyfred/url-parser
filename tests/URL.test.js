const URL = require("../src/index");

const expectedURL = {
  protocol: "https",
  username: "username",
  password: "password",
  host: "example.com",
  port: "8001",
  path: "path",
  query: "query=value",
};

const testCases = [
  {
    url: "https://username:password@example.com:8001/path?query=value",
    expected: expectedURL,
  },
  {
    url: "https://example.com:8001/path?query=value",
    expected: {
      ...expectedURL,
      username: "",
      password: "",
      host: "example.com",
    },
  },
  {
    url: "https://username:password@example.com/path?query=value",
    expected: {
      ...expectedURL,
      port: "",
    },
  },
  {
    url: "https://username:password@example.com:8001/path",
    expected: {
      ...expectedURL,
      query: "",
    },
  },
  {
    url: "https://example.com",
    expected: {
      ...expectedURL,
      username: "",
      password: "",
      port: "",
      path: "",
      query: "",
    },
  },
  {
    url: "http://username:password@example.com:8001/path?query=value",
    expected: {
      ...expectedURL,
      protocol: "http",
    },
  },
  {
    url: "ftp://username:password@example.com:21/path?query=value",
    expected: {
      ...expectedURL,
      protocol: "ftp",
      port: "21",
    },
  },
  {
    url: "https://username:password@192.168.0.1:8001/path?query=value",
    expected: {
      ...expectedURL,
      host: "192.168.0.1",
    },
  },
  {
    url: "https://username:password@localhost:8001/path?query=value",
    expected: {
      ...expectedURL,
      host: "localhost",
    },
  },
  {
    url: "file:///",
    expected: {
      protocol: "file",
      username: "",
      password: "",
      port: "",
      path: "",
      query: "",
    },
  },
];

describe("URL Parser", () => {
  testCases.forEach(({ url, expected }) => {
    test(`parsing ${url}`, () => {
      expect(new URL(url)).toMatchObject(expected);
    });
  });
});
