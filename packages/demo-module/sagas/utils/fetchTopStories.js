/* global fetch */
require('isomorphic-fetch');

import { endpointUrl, defaultMaxNumberOfItems } from '../../constants';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
};

/**
 * Gets a stories response from Hacker News.
 *
 * @type The type of story; valid arguments: 'topstories', 'newstories', 'beststories'
 * @return A promise that resolves to a fetch response object with story items
 */
function getStoriesRes(type) {
    return fetch(`${endpointUrl}/${type}.json`, options);
}

/**
 * Gets an item response from Hacker News.
 *
 * @id The ID; number
 * @return A promise that resolves to a fetch response object with the item
 */
function getItemRes(id) {
    return fetch(`${endpointUrl}/item/${id}.json`, options);
}

/**
 * Gets an item object from Hacker News.
 *
 * @id The ID; number
 * @return A promise that resolves to an item object
 */
function getItem(id) {
    return getItemRes(id).then(response => response.json());
}

/**
 * Gets IDs of the top stories on Hacker News.
 *
 * @maxNumberOfIds The maximum number of IDs to fetch; defaults to maximum number of items defined in constants
 * @return A promise that resolves to an array of IDs (numbers)
 */
async function getTopStoryIds(maxNumberOfIds = defaultMaxNumberOfItems) {
    const response = await getStoriesRes('topstories');
    const ids = await response.json();
    return ids.slice(0, maxNumberOfIds);
}

/**
 * Gets the top stories on Hacker News.
 *
 * @maxNumberOfItems The maximum number of top stories to fetch;
 *                   defaults to maximum number of items defined in constants
 * @return A promise that resolves to an array of IDs (numbers)
 */
export default async (maxNumberOfItems = defaultMaxNumberOfItems) => {
    const ids = await getTopStoryIds(maxNumberOfItems);
    return Promise.all(ids.map(id => getItem(id)));
};
