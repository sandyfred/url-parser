const { splitStringAtFirstDelimiter } = require("./utils");

class URL {
  constructor(url) {
    const { protocol, username, password, host, port, path, query } =
      this.parse(url);
    this.protocol = protocol;
    this.username = username;
    this.password = password;
    this.host = host;
    this.port = port;
    this.path = path;
    this.query = query;
  }

  parse(url) {
    const [protocol, schemeSpecificPart] = splitStringAtFirstDelimiter(
      url,
      "://"
    );

    if (!protocol || !schemeSpecificPart) {
      throw new Error("Invalid URL");
    }

    const [hostString, pathString] = splitStringAtFirstDelimiter(
      schemeSpecificPart,
      "/"
    );

    return {
      protocol,
      ...this.#parseHost(hostString),
      ...this.#parsePath(pathString),
    };
  }

  #parseHost(hostString) {
    let auth, hostPort;
    if (hostString.includes("@")) {
      [auth, hostPort] = hostString.split("@");
    } else {
      hostPort = hostString;
    }

    return {
      ...this.#parseAuth(auth),
      ...this.#parseHostPort(hostPort),
    };
  }

  #parsePath(pathString) {
    let path, query;
    if (pathString) {
      [path, query] = splitStringAtFirstDelimiter(pathString, "?");
    }

    return { path: path || "", query: query || "" };
  }

  #parseAuth(auth) {
    let username, password;
    if (auth) {
      [username, password] = splitStringAtFirstDelimiter(auth, ":");
    }

    return { username: username || "", password: password || "" };
  }

  #parseHostPort(hostPort) {
    const [host, port = ""] = splitStringAtFirstDelimiter(hostPort, ":");
    return { host, port };
  }
}

module.exports = URL;
