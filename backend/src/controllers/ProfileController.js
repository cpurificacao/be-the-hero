const conn = require('../database/connection');

module.exports = {
  async read(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await conn('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}