const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');
const blogDetailsController = require('../controllers/blogDetailsController');
const messageController = require('../controllers/messageController');
const commentController = require('../controllers/commentController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');
const profitController = require('../controllers/profitController');
const projectController = require('../controllers/projectController');
const serviceController = require('../controllers/serviceController');
const titleController = require('../controllers/titleController');

// 1: Blog Controller
router.get('/blog-create', blogController.create);
router.get('/blog-update', blogController.update);
router.get('/blog-deleted', blogController.deleted);
router.get('/blog-read', blogController.read);

// 2: Blog Details Controller
router.get('/blogdetails-create', blogDetailsController.create);
router.get('/blogdetails-update', blogDetailsController.update);
router.get('/blogdetails-deleted', blogDetailsController.deleted);
router.get('/blogdetails-read', blogDetailsController.read);

// 3: Comments Controller
router.get('/comment-create', commentController.create);
router.get('/comment-update', commentController.update);
router.get('/comment-deleted', commentController.deleted);
router.get('/comment-read', commentController.read);

// 4: Meessage Controller
router.get('/message-create', messageController.create);
router.get('/message-update', messageController.update);
router.get('/message-deleted', messageController.deleted);
router.get('/message-read', messageController.read);

// 5: Portfolio Controller
router.get('/portfolio-create', portfolioController.create);
router.get('/portfolio-update', portfolioController.update);
router.get('/portfolio-deleted', portfolioController.deleted);
router.get('/portfolio-read', portfolioController.read);

// 6: Product Controller
router.get('/product-create', productController.create);
router.get('/product-update', productController.update);
router.get('/product-deleted', productController.deleted);
router.get('/product-read', productController.read);

// 7: Profit Controller
router.get('/profit-create', profitController.create);
router.get('/profit-update', profitController.update);
router.get('/profit-deleted', profitController.deleted);
router.get('/profit-read', profitController.read);

// 8: Project Controller
router.get('/project-create', projectController.create);
router.get('/project-update', projectController.update);
router.get('/project-deleted', projectController.deleted);
router.get('/project-read', projectController.read);

// 9: Service Controller
router.get('/service-create', serviceController.create);
router.get('/service-update', serviceController.update);
router.get('/service-deleted', serviceController.deleted);
router.get('/service-read', serviceController.read);

// 10: Title Controller
router.get('/title-create', titleController.create);
router.get('/title-update', titleController.update);
router.get('/title-deleted', titleController.deleted);
router.get('/title-read', titleController.read);

module.exports = router;
