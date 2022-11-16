import React, { useEffect, useReducer } from "react";
import axios from "axios";

export default function useAxiosFetchSpotify(url, token) {
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
        if (!url) {
            return;
        }

        dispatch({ type: "INIT" });

        axios(`url`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            method: "GET",
        })
            .then((response) => {
                dispatch({ type: "SUCCESS", payload: response.data });
            })
            .catch(() => {
                dispatch({ type: "ERROR" });
            });
    }, [url]);

    return state;
}
