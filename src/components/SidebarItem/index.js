import React from 'react';

class SidebarItem extends React.Component {
    render() {
        const {folder_name,handler,classname} = this.props;
        return <li className={classname} onClick={handler}>{folder_name}</li>;
    }
}

export default SidebarItem;