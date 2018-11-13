import * as contributorAPI from '../api/contributor';
export const FETCH_FAV_REPOSITORIES = 'FETCH_FAV_REPOSITORIES';
export const RECEIVE_FAV_REPOSITORIES = 'RECEIVE_FAV_REPOSITORIES';
export const RECEIVE_FAV_REPOSITORIES_ERROR = 'RECEIVE_FAV_REPOSITORIES_ERROR';

export const fetchFavRepositories = () => ({
    type: FETCH_FAV_REPOSITORIES
});

export const receiveFavRepositories = (payload) => ({
    type: RECEIVE_FAV_REPOSITORIES,
    payload
});

export const receiveFavRepositoriesError = (error) => ({
    type: RECEIVE_FAV_REPOSITORIES_ERROR,
    error
});

export const handleLoadFavRepositories = () => (dispatch) => {
    dispatch(fetchFavRepositories());
    return contributorAPI.getFavouriteRepositories().then((response) => {
        dispatch(receiveFavRepositories(response.data));
    }).catch(error => {
        console.log(
            'Error querying GitHub',
            error
        );
        dispatch(receiveFavRepositoriesError(error.response ? error.response.data : error.message))
    });
};