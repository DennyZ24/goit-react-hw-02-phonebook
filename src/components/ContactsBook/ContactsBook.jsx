export default function ContactsBook({contacts}) {
  return (
    <ul>
      {contacts.map(contact => {
        const {name, number, id} = contact;

        return <li key={id}>{name}: {number}</li>
      })}
    </ul>
  )
}