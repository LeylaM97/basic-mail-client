export const initialState = {
    mails: []
};

export function mailReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_MAIL_SUCCESS':
            return{
                ...state, mails: action.payload
            };
        case 'FETCH_SENT_SUCCESS':
            return{
                ...state, mails: action.payload
            };
        case 'FETCH_DRAFT_SUCCESS':
            return{
                ...state, mails: action.payload
            };
        default:
            return state
    }

}