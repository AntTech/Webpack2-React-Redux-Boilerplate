import {connect} from 'react-redux';
import App from '../../components/App';
import { siderCollapsed } from '../../actions/uiAction';

export default connect(
    state => ({collapsed: state.ui.collapsed}),
    dispatch => ({
        onCollapse: collapsed => (dispatch(siderCollapsed(collapsed)))
    })
)(App);
