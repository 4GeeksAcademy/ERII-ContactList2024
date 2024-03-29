const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			contact: {},
			contactToDelete: {},

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/eurorincon")
					.then((response) => response.json())
					.then((response) => {
						console.log(response);
						setStore({
							contacts: response
						})
					})
					.catch(error => (console.log(error)))
			},
			seeContact: (contact) => {
				console.log(contact);
				setStore({ contact: contact })

			},
			contactToDelete: (contact) => {
				setStore({ contactToDelete: contact });

			},
			deleteContact: (contactId) => {
				console.log(contactId);
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, { method: 'DELETE' })
					.then((response) => response.text())
					.then((response) => {
						console.log(response);
						return fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/eurorincon`);
					})
					.then((response) => response.json())
					.then((response) => {
						console.log(response);
						setStore({ contacts: response })

					})
					.catch(error => {
						console.log("error", error)
					})

			}



		}
	};
};

export default getState;
