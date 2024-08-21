import { Router } from 'express';
import { getFilters, getFilterById, createFilter, updateFilter, deleteFilter } from './';

const filterRouter = Router();

filterRouter.route('/filter')
    .get(getFilters)
    .post(createFilter);

filterRouter.route('/filter/:filterId')
    .get(getFilterById)
    .put(updateFilter)
    .delete(deleteFilter);

export default filterRouter;