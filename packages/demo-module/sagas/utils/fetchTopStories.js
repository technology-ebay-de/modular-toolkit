/* global fetch */
require('isomorphic-fetch');

import { endpointUrl } from '../../constants';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
};

function getStoryIds(path) {
    return fetch(`${endpointUrl}/${path}.json`, options);
}

function itemRef(id) {
    return fetch(`${endpointUrl}/item/${id}.json`, options);
}

function getItemJson(id) {
    return itemRef(id).then(response => response.json());
}

function getTopStoryIds() {
    return getStoryIds('topstories');
}

export default async () => {
    const ids = await getTopStoryIds();
    return await Promise.all(ids.map(id => getItemJson(id)));
};
