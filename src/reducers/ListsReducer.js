const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "we created a static list and a static card"
            },
            {
                id: 1,
                text: "we used a mix between material UI"
            }
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "we created a static list and a static card 201"
            },
            {
                id: 1,
                text: "we used a mix between material UI 202"
            },
            {
                id: 2,
                text: "we used a mix between material UI 203"
            }
        ]
    }
]
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listsReducer;