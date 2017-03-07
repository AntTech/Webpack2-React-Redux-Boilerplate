import React, { Component, PropTypes } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.any
};

export default Header;
