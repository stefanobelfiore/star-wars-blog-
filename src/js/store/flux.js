import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: []
		},

		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load People!");
						}
						return response.json();
					})
					.then(jsonPeople => {
						setStore({ characters: jsonPeople.results });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			}
		}
	};
};

export default getState;
// // Use getActions to call a function within a fuction
// exampleFunction: () => {
//     getActions().changeColor(0, "green");
// },
// loadSomeData: () => {
// 	/**
// 		fetch().then().then(data => setStore({ "foo": data.bar }))
// 	*/
// },
// changeColor: (index, color) => {
//     //get the store
//     const store = getStore();

//     //we have to loop the entire demo array to look for the respective index
//     //and change its color
//     const demo = store.demo.map((elm, i) => {
//         if (i === index) elm.background = color;
//         return elm;
//     });

//     //reset the global store
//     setStore({ demo: demo });
// }
