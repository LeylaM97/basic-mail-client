export function setMails(mails) {
    return {
        type: 'SET_MAILS',
        payload: mails
    }
}

export const setMailsAction=()=>{
    return async dispatch=>{
        await fetch('https://my-json-server.typicode.com/LeylaM97/json_mails/inbox')
            .then(response => response.json())
            .then(result => {
                dispatch({type: 'FETCH_MAIL_SUCCESS', payload: result});
            })
    }
};

export const setSentAction=()=>{
    return async dispatch=>{
        await fetch('https://my-json-server.typicode.com/LeylaM97/json_mails/sent')
            .then(response => response.json())
            .then(result => {
                dispatch({type: 'FETCH_SENT_SUCCESS', payload: result});
            })
    }
};

export const setDraftAction=()=>{
    return async dispatch=>{
        await fetch('https://my-json-server.typicode.com/LeylaM97/json_mails/drafts')
            .then(response => response.json())
            .then(result => {
                dispatch({type: 'FETCH_DRAFT_SUCCESS', payload: result});
            })
    }
};