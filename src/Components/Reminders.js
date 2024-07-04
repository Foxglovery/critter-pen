import { useEffect, useState } from "react";

export default function Reminders() {
  // this will take the solutions once they are solved
  // need to add parts of speech entry to solution db
  // this will display them according to parts of speech
  const [reminders, setReminders] = useState([
    "theres something in the garden",
  ]);

  useEffect(() => {}, []);
  return (
    <main>
      <section>
        <ul>
          {reminders.map((r, index) => (
            <li key={index}>{r}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
