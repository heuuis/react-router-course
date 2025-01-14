import { useLocation, useSearchParams } from "react-router-dom";

export const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const team = searchParams.get("teamId");

  return <div className="container">Players for team {team}</div>;
};
