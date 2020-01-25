import React from 'react';

class Title extends React.Component {
    render() {
        const {title} = this.props;
        return <h3 className={'titles'}>{title}</h3>;
    }
}

export default Title;