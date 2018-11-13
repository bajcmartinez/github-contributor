import axios from 'axios';

const endpoints = {
    favouriteRepositories: () =>
        `${process.env.REACT_APP_API}/api/repos/fav`,
};

export const getFavouriteRepositories = () => {
    return axios.get(
        endpoints.favouriteRepositories()
    );
};