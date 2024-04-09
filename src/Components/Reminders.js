import { useEffect, useState } from "react";

export default function Reminders() {
  const [reminders, setReminders] = useState([
    "theres something in the garden",
  ]);

  useEffect(() => {}, []);
  return (
    <main>
      <section>
        <ul>
          {reminders.map((r) => (
            <li>{r}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
