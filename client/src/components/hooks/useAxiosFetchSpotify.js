import { useEffect, useReducer } from "react";
import axios from "axios";

/**
 * Fetches data from Spotify using the provided API link
 * @param {function or string} urlCallback A url or a function that returns a url that is used for the fetch request
 * @param {string} token The token used to authenticate the request for the Spotify API
 * @param {array} dep array of dependencies that will trigger the fetch request
 * @return {object} An object containing the data, isLoading, and isError values
 */

export default function useAxiosFetchSpotify(urlCallback, token, dep) {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "INIT":
                    return { ...state, isLoading: true, isError: false };
                case "SUCCESS":
                    return {
                        ...state,
                        isLoading: true,
                        isError: false,
                        data: action.payload,
                    };
                case "ERROR":
                    return { ...state, isLoading: false, isError: true };
            }
        },
        {
            isLoading: false,
            isError: false,
            data: null,
        }
    );

    useEffect(() => {
        let url = urlCallback instanceof Function ? urlCallback() : urlCallback;

        if (!url) {
            console.log("Empty URL");
            return;
        }

        dispatch({ type: "INIT" });

        axios(url, {
            headers: {
                Authorization: "Bearer " + token,
            },
            method: "GET",
        })
            .then((response) => {
                dispatch({ type: "SUCCESS", payload: response.data });
            })
            .catch((e) => {
                console.log("Error: " + e.message);
                dispatch({ type: "ERROR" });
            });
    }, [...dep]);

    return state;
}
