import React from 'react';
import './index.css';
import MailTitles from "../MailTitles";
import Title from "../Title";

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isLoaded: false,
            inbox: []
        }
    }

    componentDidMount() {
        const  getData = async (options) =>{
            const url = options.url;
            const method = options.method;
            await fetch(url)
                .then(result => result.json())
                .then(data => {
                    const obj = {};
                    obj[method] = data;
                    this.setState(Object.assign(
                        {},
                        {
                            ...this.state,
                            isLoaded: true,
                        },
                        obj
                    ))
                })
        };

        getData({url: "https://my-json-server.typicode.com/LeylaM97/json_mails/inbox", method: 'inbox'});
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
                    this.state.inbox.map((message, key)=>{
                    return(
                        <MailTitles
                            key={key}
                            subject={message.subject}
                            from={message.from}
                            to={message.to}
                        />
                    )
                })}

        </div>;
    }
}

export default Main;