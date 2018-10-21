const endpointUrl = 'https://api.github.com/gists';
const delay = 700;

export default async () => {
    /* we're adding a delay here so you can see the spinner */
    await new Promise(resolve => setTimeout(resolve, delay));
    let result = {};
    try {
        result = await fetch(endpointUrl).then(r => r.json());
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
    }
    return result.map(({ description, url }) => ({
        title: description || url,
        url
    }));
};
