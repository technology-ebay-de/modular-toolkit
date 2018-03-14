import { Header, Footer, Button, List, ListItem, Box } from '@modular-toolkit/demo-ui';
import PropTypes from 'prop-types';
import React from 'react';

function HackerNews({ topStories, handleLoadingTopStories }) {
    return (
        <Box>
            <Header title="What's new?" />
            <List>
                {topStories &&
                    topStories.map(({ title, url }, index) => (
                        <ListItem key={`topStory${index}`}>
                            <a target="blank" href={url}>
                                {title}
                            </a>
                        </ListItem>
                    ))}
            </List>
            <Footer>
                <Button handleClick={handleLoadingTopStories} label="Update" />
            </Footer>
        </Box>
    );
}

HackerNews.propTypes = {
    topStories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.url
        })
    ),
    handleLoadingTopStories: PropTypes.func
};

export default HackerNews;
