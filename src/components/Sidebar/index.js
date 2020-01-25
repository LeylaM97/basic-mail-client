import React from 'react';
import {connect} from 'react-redux';
import {setDraftAction, setMailsAction, setSentAction} from '../../actions/mailActions';
import SidebarItem from "../SidebarItem";
import './index.css';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.addClass1= this.addClass1.bind(this);
        this.addClass2= this.addClass2.bind(this);
        this.addClass3= this.addClass3.bind(this);
        this.state = {
            active1: true,
            active2:false,
            active3:false
        };
    }
    addClass1() {
        this.setState({ active1: true,active2: false,active3: false});
    };
    addClass2() {
        this.setState({ active1: false,active2: true,active3: false});
    };
    addClass3() {
        this.setState({ active1: false,active2: false,active3: true});
    };
    render() {
        const folderNames=[
            {
                folder_name:'Inbox',
                handler:()=>{
                    this.props.setMails();
                    this.addClass1();
                },
                classname: this.state.active1 ? 'sidebar-item active': 'sidebar-item'
            },
            {
                folder_name:'Sent',
                handler:()=>{
                    this.props.setSent();
                    this.addClass2();
                },
                classname: this.state.active2 ? 'sidebar-item active': 'sidebar-item'
            },
            {
                folder_name:'Drafts',
                handler:()=>{
                    this.props.setDraft();
                    this.addClass3();
                },
                classname: this.state.active3 ? 'sidebar-item active': 'sidebar-item'
            }
        ];


       return <ul className={'sidebar'}>
            {folderNames.map((folder, key)=>{
                return(
                    <SidebarItem
                        key={key}
                        folder_name={folder.folder_name}
                        handler={folder.handler}
                        classname={folder.classname}
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
        setMails: () => dispatch(setMailsAction()),
        setSent: () => dispatch(setSentAction()),
        setDraft: () => dispatch(setDraftAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);