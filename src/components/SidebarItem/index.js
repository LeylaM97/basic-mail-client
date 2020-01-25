import React from 'react';

class SidebarItem extends React.Component {
    render() {
        const {folder_name,handler} = this.props;
        return <li className={'sidebar-item'} onClick={handler}>{folder_name}</li>;
    }
}

export default SidebarItem;