import { useEffect, useState } from "react";

export default function useTeam() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/teamData.json")
      .then((result) => result.json())
      .then((data) => setTeams(data));
  }, []);
  // console.log(teams);

  return [teams];
}
