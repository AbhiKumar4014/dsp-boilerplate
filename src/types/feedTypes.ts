export type Feed = {
    id: number;
    name: string;
    description?: string;
    path: string;
    config: object;
};

export type GetFeedsResponse = {
    // data: Feed[];
    data: Omit<Feed, 'config'>[];
};

export type PostFeedResponse = {
    data: Feed;
};

export type GetFeedResponse = {
    data: Feed;
};

export type UpdateFeedResponse = {
    data: Feed;
};

export type DeleteFeedResponse = {
    message: string;
};

export type PostFeedRequestBody = Feed;
export type UpdateFeedRequestBody = Feed;
