import { Feed } from '../types/feedTypes';
async function getFeeds(): Promise<Omit<Feed, 'config'>[]> {
    return [
        {
            id: 78,
            name: "Dojo pbr",
            description: "feed",
            path: "tbn/dojo-pbr",
        },
    ];
}

async function getFeedById(): Promise<Feed> {
    return {
        id: 78,
            name: "Dojo pbr",
            description: "feed",
            path: "tbn/dojo-pbr",
            config: { assetFilter: [], playlistFilters: [] },
    }
}

function createFeed() {
    // To get feed by ID
}

function updateFeed() {
    // To get feed by ID
}

function deleteFeed() {
    // To get feed by ID
}

export { getFeeds, getFeedById, createFeed, updateFeed, deleteFeed };
