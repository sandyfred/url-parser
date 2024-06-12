# URL Resolver

## Requirements

1. **URL Format**

The URL to be resolved will typically follow this format:

```
<protocol>://<username>:<password>@<host>:<port>/<path>?<query>
```

2. **Components to Resolve**

The URL should be resolved into the following components:

- **Protocol**
- **Username** (optional)
- **Password** (optional)
- **Host**
- **Port** (optional)
- **Path**
- **Query** (optional)

3. **Special Schemes**

Handle special schemes like `http`, `https`, `ftp` as per the [WHATWG URL Standard](https://url.spec.whatwg.org/).

4. **Extensibility**

The code should be designed to be extensible. It should be easy to change the logic and add more features in the future.

## Example Usage

Here is an example of how the URL Resolver can be used:

```javascript
const url = new URL(
  "https://username:password@example.com:8001/path?query=value"
);

console.log(url);
// Output should be an object like:
// {
//   protocol: "https",
//   username: "username",
//   password: "password",
//   host: "example.com",
//   port: "8001",
//   path: "/path",
//   query: "query=value"
// }
```
