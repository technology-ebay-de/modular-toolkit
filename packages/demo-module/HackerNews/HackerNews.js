/*
    Story format example:
    {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
    }
*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './hacker-news.css';

function HackerNews({ isLoading, hasFailed, topStories }) {
    if (isLoading) {
        return <div className={styles.loading}>Loading…</div>;
    }
    if (hasFailed) {
        return <div className={styles.error}>Oops – failed to load top stories from Hacker News</div>;
    }
    return (
        <article className={styles.hackerNews}>
            <header>
                <h1>What's new?</h1>
            </header>
            <ul className={styles.topStories}>
                {topStories.map(({ title, url }, index) => (
                    <li key={`topStory${index}`}>
                        <a href={url}>{title}</a>
                    </li>
                ))}
            </ul>
        </article>
    );
}

HackerNews.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    topStories: PropTypes.array.isRequired,
    hasFailed: PropTypes.bool.isRequired
};

export default HackerNews;
