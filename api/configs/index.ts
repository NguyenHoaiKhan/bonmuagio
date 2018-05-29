const config = require("./config.json");

const JWTconf = require("./JWTConfig.json");


export class Config {
  constructor() {
  }

  // get database connection
  static getDBStr = `mongodb://${config.username}:${config.password}@ds016298.mlab.com:16298/bonmuagio`;

  getSecretKey() {
    return JWTconf.SECRET_KEY;
  }


}




