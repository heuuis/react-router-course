import { useParams } from "react-router-dom";

export const TeamPage = () => {
  const { teamId } = useParams();
  return <div>Team Page for {teamId}</div>;
};
