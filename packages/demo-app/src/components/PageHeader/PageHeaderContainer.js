import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import PageHeader from './PageHeader';
import handleUpdatingNews from './handleUpdatingNews';

const enhance = compose(connect(({ page: { title } }) => ({ title })), withHandlers({ handleUpdatingNews }));

export default enhance(PageHeader);
