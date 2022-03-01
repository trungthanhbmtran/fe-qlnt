// import {useState,useEffect} from 'react';
// import {useSelector } from "react-redux";
// import ToastNotication from '../lib/GetToast';
// import {GetLogin} from '../service/Query';
// import Router from 'next/router'

function useCreateUrl(search = {}) {
    return Object.entries(search).reduce(
        (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
        Object.keys(search).length ? "?" : ""
    ).replace(/&$/, "");
}

export default useCreateUrl;