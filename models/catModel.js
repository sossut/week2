'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat');
    
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

// TODO tee funktio, joka tekee yhden kissan id:n perusteella
const getCat = async (id) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat WHERE cat_id = ?', [id]
    );
    
    return rows.pop();
  } catch (e) {
    console.error('error', e.message);
  }
 
};

module.exports = {
  getAllCats,
  getCat,
};
