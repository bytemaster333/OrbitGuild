import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  return params;
}
