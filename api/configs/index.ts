const config = require("./ganeralConfig.json");



export class Config {
  constructor() {
  }

  // get database connection
  static getDBStr = `mongodb://${config.mongoAccount.username}:${config.mongoAccount.password}@ds016298.mlab.com:16298/bonmuagio`;

  static getSecretKey() {
    return config.JWT.SECRET_KEY;
  }

  static getCookieSerret() {
    return config.cookieSecret;
  }


}




