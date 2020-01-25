import React from 'react';

class MailTitles extends React.Component {
    render() {
        const {subject,from,to,handler} = this.props;
        return <div className={'mail-subtitles'} onClick={handler}>
            <p> {subject}</p>
            <p> {from}</p>
            <p> {to}</p>
        </div>;
    }
}

export default MailTitles;