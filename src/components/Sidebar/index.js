import React from 'react';
import {connect} from 'react-redux';
import {setMailsAction} from '../../actions/mailActions';
import SidebarItem from "../SidebarItem";
import './index.css';

class Sidebar extends React.Component{
    render() {
        const folderNames=[
            {
                folder_name:'Inbox'
            },
            {
                folder_name:'Sent',
                handler:()=>{this.props.setMails()}
            },
            {
                folder_name:'Drafts'
            }
        ];
       return <ul className={'sidebar'}>
            {folderNames.map((name, key)=>{
                return(
                    <SidebarItem
                        key={key}
                        folder_name={name.folder_name}
                        handler={name.handler}
                    />
                )
            })}
        </ul>

    }
}

const mapStateToProps=(store)=>{
    return  {
        mails:store.mails
    }
};

const mapDispatchToProps = dispatch=>{
    return{
        setMails: () => dispatch(setMailsAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);