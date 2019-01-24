/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineNestedReducers, createFakeActionAndReducer } from './utils';
import BrickProvider from './BrickProvider';
import withBrick from './withBrick';
import createSagaMiddleware from 'redux-saga';
import { mount } from 'enzyme';

const [refreshableReducer, refreshableAction, refreshableSpy] = createFakeActionAndReducer('REFRESHABLE');
const [boardInfoReducer, boardInfoAction, boardInfoSpy] = createFakeActionAndReducer('BOARD_INFO');

function App({ children }) {
    return <div id="app">{children}</div>;
}

class Refreshable extends Component {
    componentDidMount() {
        this.props.dispatch(refreshableAction);
    }
    render() {
        return <div id="refreshable" />;
    }
}

const RefreshableContainer = connect()(Refreshable);

const boardInfoBrick = {
    reducer: boardInfoReducer,
    selectors: {},
    *saga() {}
};

function BoardInfo() {
    return <div id="board-info" />;
}

function Sidebar({ children }) {
    return <div id="sidebar">{children}</div>;
}

const SidebarContainer = withBrick('bricks.sidebar.boardInfo', boardInfoBrick)(Sidebar);

test('actions dispatched to original and brick reducer are processed correctly', () => {
    const originalReducer = combineNestedReducers({
        modules: {
            refreshable: refreshableReducer
        }
    });
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(originalReducer, applyMiddleware(sagaMiddleware));
    const wrapper = mount(
        <Provider store={store}>
            <BrickProvider store={store} sagaMiddleware={sagaMiddleware} reducer={originalReducer}>
                <App>
                    <RefreshableContainer />
                    <SidebarContainer>
                        <BoardInfo />
                    </SidebarContainer>
                </App>
            </BrickProvider>
        </Provider>
    );
    expect(store.getState()).toEqual({
        modules: {
            refreshable: { value: 'refreshable' }
        },
        bricks: {
            sidebar: {
                boardInfo: {}
            }
        }
    });
    store.dispatch(boardInfoAction);
    store.dispatch(refreshableAction);
    expect(boardInfoSpy).toHaveBeenCalledTimes(1);
    expect(refreshableSpy).toHaveBeenCalledTimes(2);
    expect(store.getState()).toEqual({
        modules: {
            refreshable: {
                value: 'refreshable'
            }
        },
        bricks: {
            sidebar: {
                boardInfo: {
                    value: 'board_info'
                }
            }
        }
    });
});
