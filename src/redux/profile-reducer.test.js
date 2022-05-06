import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'Bla bla', likesCount: 24},
    ]
};

test('length of post should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe('it-kamasutra.com')
});


test('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(2)
});


test(`after deleting length of message shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(3)
});
