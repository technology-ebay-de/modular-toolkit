import { Header, Footer, Button, List, ListItem, Box } from '@modular-toolkit/demo-ui';
import PropTypes from 'prop-types';
import React from 'react';

function Gists({ topStories, handleLoadingGists }) {
    return (
        <Box>
            <Header title="The Latest Gists" />
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
                <Button handleClick={handleLoadingGists} label="Update" />
            </Footer>
        </Box>
    );
}

Gists.propTypes = {
    topStories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.url
        })
    ),
    handleLoadingGists: PropTypes.func
};

export default Gists;
