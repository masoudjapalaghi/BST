import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const useRouteChanged = () => {
  const { pathname, events } = useRouter();

  const handleStart = (url) => {
     localStorage.removeItem("activePageIndex");
  };
  const handleComplete = (url) =>localStorage.removeItem("activePageIndex");
  ;

  useEffect(() => {
    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleComplete);
    events.on("routeChangeError", handleComplete);
    return () => {
      events.off("routeChangeStart", handleStart);
      events.off("routeChangeComplete", handleComplete);
      events.off("routeChangeError", handleComplete);
    };
  }, [[events]]);
  // return [toggleprogress];
};
export default useRouteChanged;
