const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    )
  }
}
showContacts(myContacts)

// -----------------------------------------------------------------------------

const filterContacts = (contacts, ) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]

    if (contact.present == true) {
      newContacts.push(contact)
    }
  }

  return newContacts
}

const filteredContacts = filterContacts(myContacts)

showContacts(filteredContacts)
