import { Router, Request, Response } from 'express';
import {
    Feed,
    GetFeedsResponse,
    PostFeedResponse,
    GetFeedResponse,
    UpdateFeedResponse,
    DeleteFeedResponse,
    PostFeedRequestBody,
    UpdateFeedRequestBody
} from '../types/feedTypes';
import { getFeeds, createFeed, getFeedById } from '../services/feedServices';
import logger from '../logger/log';

const feedRouter = Router();

feedRouter.get('/feed', async (req: Request, res: Response<GetFeedsResponse>) => {
    logger.info(`HTTP GET ${req.path}`)
    const responseData: GetFeedsResponse = { data: await getFeeds() };
    res.send(responseData);
});

feedRouter.post('/feed', async (req: Request<{}, PostFeedResponse, PostFeedRequestBody>, res: Response<PostFeedResponse>) => {
    logger.info(`HTTP POST ${req.path}`)
    const responseData: PostFeedResponse = { data: await createFeed(req.body) };
    res.send(responseData);
});

feedRouter.get('/feed/:feedId', async (req: Request<{ feedId: Pick<Feed, 'id'> }>, res: Response<GetFeedResponse>) => {
    logger.info(`HTTP GET ${req.path}`)
    const responseData: GetFeedResponse = { data: await getFeedById(req.params.feedId) };
    res.send(responseData);
});

feedRouter.put('/feed/:feedId', async (req: Request<{ feedId: string }, UpdateFeedResponse, UpdateFeedRequestBody>, res: Response<UpdateFeedResponse>) => {
    logger.info(`HTTP PUT ${req.path}`)
    const responseData: UpdateFeedResponse = { data: req.body };
    res.send(responseData);
});

feedRouter.delete('/feed/:feedId', async (req: Request<{ feedId: string }>, res: Response<DeleteFeedResponse>) => {
    logger.info(`HTTP DELETE ${req.path}`)
    const responseData: DeleteFeedResponse = { message: "" };
    res.send(responseData);
});

export default feedRouter;
