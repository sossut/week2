'use strict';
const catModel = require('../models/catModel');

// const cats = catModel.cats;
const {getAllCats, getCat} = catModel;

const cat_list_get = async (req, res) => {
  try {
    res.json(await getAllCats());
  } catch (e) {
    console.log('cat_list_get error', e.message);
  }
  
};

const cat_get = async (req, res) =>  {
    //TODO lähetä yksi kissa
    const vastaus = await getCat(req.params.id);
    res.json(vastaus);
}

const cat_post = (req, res) => {
  console.log(req.body, req.file);
  res.send('From this endpoint you can add cats');
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
};