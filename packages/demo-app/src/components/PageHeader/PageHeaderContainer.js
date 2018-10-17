import { connect } from 'react-redux';
import { compose, setDisplayName, withHandlers } from 'recompose';
import PageHeader from './PageHeader';
import handleUpdatingNews from './handleUpdatingNews';

const enhance = compose(
    setDisplayName('PageHeaderContainer'),
    connect(({ page: { title } }) => ({ title })),
    withHandlers({ handleUpdatingNews })
);

export default enhance(PageHeader);
