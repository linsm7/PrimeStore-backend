import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { ListUserAdminController } from './controllers/user/ListUserAdminController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { RenameCategoryController } from './controllers/category/RenameCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from './controllers/product/ListProductController';
import { ActiveteOrDisableProductController } from './controllers/product/ActivateOrDisableProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/user', new CreateUserController().handle) 
router.post('/admin', new CreateUserController().handleAdmin)
router.get('/admin', new ListUserAdminController().handle)

router.post('/category', new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)
router.put('/category', new RenameCategoryController().handle)
router.delete('/category', new DeleteCategoryController().handle)

router.post('/product', upload.single('file'), new CreateProductController().handle)
router.get('/products', new ListProductController().handle)
router.put('/disable-product', new ActiveteOrDisableProductController().disable)
router.put('/activate-product', new ActiveteOrDisableProductController().activate)
router.delete('/product', new DeleteProductController().handle)

export { router }