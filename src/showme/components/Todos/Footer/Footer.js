import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../../../constants/actionTypes';

/**
 * 过滤条件与显示标题
 */
const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {
    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter];
        const { selectedFilter, filterTodo } = this.props;

        return (
            <a
                className={classnames({ selected: filter === selectedFilter })}
                style={{ cursor: 'pointer' }}
                onClick={() => filterTodo(filter)}
            >
                {title}
            </a>
        );
    }

    render() {
        return (
            <footer className="footer">
                <ul className="filters">
                {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
                    <li key={filter}>
                        {this.renderFilterLink(filter)}
                    </li>
                )}
                </ul>
            </footer>
        );
    }
}

Footer.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  filterTodo: PropTypes.func.isRequired
};

export default Footer;

