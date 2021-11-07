'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const upload = multer({dest: './uploads/'});
const { cat_list_get, cat_get, cat_post, cat_update_put, cat_delete} = require('../controllers/catController');
const router = express.Router();

// router.route('/')
//   .get(catController.cat_list_get)
//   .post(catController.cat_post)
//   .put(catController.cat_update_put);

// router.route('/:id')
//  .get(catController.cat_get)
//  .delete(catController.cat_delete);

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'), cat_post);

router.put('/',  cat_update_put);

router.delete('/:id', cat_delete);

module.exports = router;

