export default () => ({
    page: { title: 'Modular Toolkit Demo' },
    fasel: {
        basel: {
            hackerNews: {
                topStories: [
                    {
                        title: 'We are all gonna die!',
                        url: 'https://www.motor-talk.de/'
                    }
                ]
            }
        }
    }
});

// Note: you can also use this module to hydrate from an existing state (e.g. from server side rendering) like this:
// export default () => JSON.parse(document.getElementById('root').getAttribute('data-initialState'));
