import { TeamCard } from './TeamCard';
export const Team = ({ team }) => {
  return (
    <section className="grow p-2 bg-orange-300">
      <ul>
        {team.map((person) => (
          <li key={person.name} className="mb-4 drop-shadow-lg p-1">
            <TeamCard person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
};
