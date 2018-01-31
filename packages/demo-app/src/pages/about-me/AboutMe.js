import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/Header';
import { HackerNews } from '@react-modular-toolkit/demo-module';
import styles from './about-me.css';

function AboutMe({ appTitle, pageTitle }) {
    return (
        <div>
            <Header appTitle={appTitle} pageTitle={pageTitle} />
            <div className={styles.columnWrapper}>
                <section className={styles.mainContent}>
                    <img className={styles.portrait} src="./images/dummy-portrait.png" />
                    <p>
                        Just make little strokes like that. Van Dyke Brown is a very nice brown, it's almost like a
                        chocolate brown. This is probably the greatest thing that's ever happened in my life. Let's make
                        some happy little clouds in our world. Any little thing can be your friend if you let it be.
                    </p>
                    <p>
                        The secret to doing anything is believing that you can do it. Anything that you believe you can
                        do strong enough, you can do. Anything. As long as you believe. We don't have anything but happy
                        trees here. There's nothing wrong with having a tree as a friend. There are no limits in this
                        world. I thought today we would do a happy little picture. It's cold, but it's beautiful.
                    </p>
                    <p>
                        Pretend you're water. Just floating without any effort. Having a good day. It is a lot of fun.
                        Everything's not great in life, but we can still find beauty in it. It's a good way of getting
                        rid of all your anxieties and hostilities.
                    </p>
                </section>
                <aside>
                    <HackerNews />
                </aside>
            </div>
        </div>
    );
}

AboutMe.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

function mapStateToProps({ page: { appTitle, pageTitle } }) {
    return {
        appTitle,
        pageTitle
    };
}

export default connect(mapStateToProps)(AboutMe);
