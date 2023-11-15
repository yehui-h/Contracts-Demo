import React, {useEffect, useState} from "react";
import Navbar from './components/Navbar';

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setContacts(data));
    }, []);

    return (
        <div className="App">
            <Navbar/>
            <div
                className='max-w-[800px] mt-[-0px] w-full mx-auto text-center flex flex-col justify-center items-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ContactCard({contact}) {
    const formatAddress = (address) => {
        return `${address.city}`;
    };
    const formatCompany = (company) => {
        return `${company.name}`;
    };
    return (
        <div className="p-4 border rounded shadow bg-gray-50">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{contact.name}</h5>
            <h6
                className='mb-0 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50'>{formatCompany(contact.company)}</h6>
            <h6
                className='mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50'>{formatAddress(contact.address)}</h6>

            <h6 className='mb-1 text-base  leading-normal text-neutral-600 dark:text-neutral-200'>{contact.phone}</h6>
            <h6 className='mb-1 text-base  leading-normal text-neutral-600 dark:text-neutral-200'>{contact.email}</h6>

            <a href={'https://' + contact.website}
               className='mb-1 text-base  leading-normal text-neutral-600 dark:text-neutral-200'>{contact.website}</a>
        </div>
    );
}

export default App;
