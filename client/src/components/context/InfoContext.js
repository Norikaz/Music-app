import { createContext, useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const InfoContext = createContext();
const { Provider } = InfoContext;

export const InfoContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [songInfo, setSongInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const songInfoProvider = useMemo(
    () => ({ songInfo, setSongInfo }),
    [songInfo, setSongInfo]
  );
  const searchResultsProvider = useMemo(
    () => ({ searchResults, setSearchResults }),
    [searchResults, setSearchResults]
  );

  const searchTermProvider = useMemo(
    () => ({ searchTerm, setSearchTerm }),
    [searchTerm, setSearchTerm]
  );

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((response) => {
      setToken(response.data.access_token);
    });
  }, []);

  return (
    <Provider
      value={{
        token,
        setToken,
        songInfoProvider,
        searchResultsProvider,
        searchTermProvider,
      }}
    >
      {children}
    </Provider>
  );
};
export function useInfoContext() {
  return useContext(InfoContext);
}
