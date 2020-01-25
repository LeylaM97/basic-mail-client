import React from 'react';
import './index.css';
import MailTitles from "../MailTitles";
import Title from "../Title";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {setDraftAction, setMailsAction, setSentAction} from "../../actions/mailActions";

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isLoaded: false,
            inbox: [],
            id:''
        }
    }

    componentDidMount() {
        this.props.setMails();
    }

    render() {

        const titles=[
            {
                title:'Subject'
            },
            {
                title:'From'
            },
            {
                title:'To'
            }
        ];

        return <div className={'main'}>
            <div className={'main-titles'}>
                {
                    titles.map((title, key)=>{
                        return(
                            <Title
                                key={key}
                                title={title.title}
                            />
                        )
                    })}
            </div>

                {
                    this.props.mails.mails.map((message)=>{
                    return(
                       <Link to={'mail/' + `${message.id}`} key={message.id}>
                           <MailTitles
                            subject={message.subject}
                            from={message.from}
                            to={message.to}
                            />
                       </Link>
                    )
                })}

        </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);