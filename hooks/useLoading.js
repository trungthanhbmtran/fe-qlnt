import {useState,useEffect} from 'react';
import Router from "next/router";

function useLoading(props) {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
        //style
    
        const start = () => {
          setLoading(true);
        };
        const end = () => {
          setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
          Router.events.off("routeChangeStart", start);
          Router.events.off("routeChangeComplete", end);
          Router.events.off("routeChangeError", end);
        };
    }, [])
    return loading
  }
  
  export {useLoading};