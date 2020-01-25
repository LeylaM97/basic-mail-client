import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function MailBody(props){
            return <div>
                {props.mails.mails.map((message,key)=>{
                        if(`${message.id}`===props.match.params.id){
                            return(
                                <div className={'mail-body'} key={message.id}>
                                    <div className={'mail-body-info'}>
                                        <p className={'mail-body__titles'}>Subject:</p><span> {message.subject}</span>
                                        <p className={'mail-body__titles'}>From:</p><span> {message.from}</span>
                                        <p className={'mail-body__titles'}>To:</p><span> {message.to}</span>
                                    </div>
                                    <h3 className={'mail-body-header'}>Body</h3>
                                    <p className={'mail-body-content'}> {message.body} </p>
                                </div>
                            )
                        } else return <div key={key}/>
                    })}
            </div>;
}

const mapStateToProps=(store)=>{
    return  {
        mails:store.mails
    }
};

withRouter(MailBody);
export default connect(mapStateToProps)(MailBody);