import {PUBLIC_URL} from "../../utils/constants";

export const GET_ARTICLES_REQUEST = "ARTICLES::GET_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_FAILURE";

const gerArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

const gerArticlesSuccess = (articles) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: articles
});

const gerArticlesFailure = (error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: error
});
export const getArticles = () => async (dispatch) => {
    dispatch(gerArticlesRequest());
    try {
        const response = await fetch(PUBLIC_URL);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();
        dispatch(gerArticlesSuccess(result));
    } catch (e) {
        console.log(e);
        dispatch(gerArticlesFailure(e.message));
    }
};
// export const getArticles = () => (dispatch) => {
//     dispatch(gerArticlesRequest());
//     fetch(PUBLIC_URL)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Request failed with status ${response.status}`);
//             }
//
//             return response.json();
//         })
//         .then((result) => {
//             dispatch(gerArticlesSuccess(result));
//         })
//         .catch((e) => {
//             console.log(e);
//             dispatch(gerArticlesFailure(e.message));
//         });
