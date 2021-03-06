const axios = require('axios');

/**
 * @link https://documenter.getpostman.com/view/1559645/RW1gEcCH#edd41442-c94f-49dc-977b-8180be92e018
 */
module.exports = class Nanoleaf {
  constructor({ ipAddress, authToken }) {
    this.axios = axios.create({
      baseURL: `http://${ipAddress}/api/v1/${authToken}`,
    })
  }

  getScenes() {
    return this.axios.get('/effects/effectsList').then(({ data }) => data);
  }

  setScene(scene) {
    if (this.scene !== scene) {
      this.scene = scene;
      return this.axios.put('/effects', { select: scene })
        .then(({ data }) => data);
    }
    return Promise.resolve();
  }
}
