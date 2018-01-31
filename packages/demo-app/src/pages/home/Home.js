import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/Header';
import { HackerNews } from '@react-modular-toolkit/demo-module';
import styles from './home.css';

function Home({ appTitle, pageTitle }) {
    return (
        <div>
            <Header appTitle={appTitle} pageTitle={pageTitle} />
            <section className={styles.mainContent}>
                <article className={styles.mainArticle}>
                    <header className={styles.header}>
                        <h1>Welcome to the demo app!</h1>
                    </header>
                    <p>
                        Just let this happen. We just let this flow right out of our minds. I get carried away with this
                        brush cleaning. There's nothing wrong with having a tree as a friend. You have to allow the
                        paint to break to make it beautiful.
                    </p>
                    <p>
                        From all of us here, I want to wish you happy painting and God bless, my friends. There is no
                        right or wrong - as long as it makes you happy and doesn't hurt anyone. I spend a lot of time
                        walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.
                        And just raise cain. Don't hurry. Take your time and enjoy.
                    </p>
                    <p>
                        And I will hypnotize that just a little bit. Don't forget to tell these special people in your
                        life just how special they are to you. I want everbody to be happy. That's what it's all about.
                    </p>
                    <p>In your world you have total and absolute power. You can do it. Happy painting, God bless.</p>
                </article>
                <HackerNews />
            </section>
        </div>
    );
}

Home.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

function mapStateToProps({ page: { appTitle, pageTitle } }) {
    return {
        appTitle,
        pageTitle
    };
}

export default connect(mapStateToProps)(Home);
