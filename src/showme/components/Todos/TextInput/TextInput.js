import React, { Component, PropTypes } from 'react';

class TextInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        const text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.isNew) {
                this.setState({ text: '' });
            }
        }
    }


  handleBlur(e) {
    if (!this.props.isNew) {
      this.props.onSave(e.target.value);
    }
  }

    render() {
        return (
            <input
                type="text"
                className="new-todo"
                value={this.state.text} // 预定义值
                onChange={e => this.handleChange(e)} // 受控组件，需要监听change事件同步value
                onBlur={e => this.handleBlur(e)}
                onKeyDown={e => this.handleSubmit(e)}
                placeholder={this.props.placeholder}
                autoFocus="true" // autofocus 属性规定当页面加载时 input 元素应该自动获得焦点。
            />
        );
    }
}

TextInput.propTypes = {
    isNew: PropTypes.bool,
    onSave: PropTypes.func,
    placeholder: PropTypes.string,
    text: PropTypes.string
};

export default TextInput;
