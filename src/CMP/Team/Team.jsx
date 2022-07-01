import React from "react";
import useTeam from "../../useHooks/useTeam";
import TeamCrads from "./TeamCrads";

export default function Team() {
  const [teams] = useTeam();
  console.log(teams);
  return (
    <>
      <div className="py-8">
        <h3 className="text-center text-4xl font-bold">All Teams</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 container mx-auto gap-4 gap-y-4 mt-4  ">
          {teams.map((team) => (
            <TeamCrads team={team} />
          ))}
        </div>
      </div>
    </>
  );
}
