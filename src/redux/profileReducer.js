const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

// объявляем стейт по умолчанию --- передаем его в profileReducer

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: "it's all good", likeCount: 12 },
        { id: 3, message: "bla-bla", likeCount: 5 },
        { id: 4, message: "da-da", likeCount: 7 }
    ],
    newPostText: '',
    profile: null
};

// при помощи функции reducer мы получили state и action произвели преобразования, описанные в action над stat-ом и вернули преобразованный state

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            // создаем копию state, чтобы изменить state через его копию (правило мьютабельности - нельзя менять оригинал state)
            // делаем свою копию массива posts для stateCopy (т.к. по умолчанию поверхностное копирование оставляет ссылки на оригинальные вложенные объекты)
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: newPost, likeCount: 0 }],    // пушим в копию новый пост
                newPostText: ''
            }; // возвращаем также копию
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state ,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostText = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default profileReducer;