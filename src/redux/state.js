let renderEntireTree = () => {
    console.log('State changed')
}

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 23},
        ],
        newPostText: 'it-kamasutra.com',
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Darya'},
            {id: 3, name: 'Yuliya'},
            {id: 4, name: 'Marina'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'What do you think about this course?'}
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 3
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;