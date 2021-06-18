import {LIKE_TYPE, UN_LIKE_TYPE} from "../actionTypes/index";

const memos = [
    {
        title: 'Meme 1',
        id: 0,
        src: 'images0.jpg',
        likes: 6,
        un_likes: 4,
    },
    {
        title: 'Meme 2',
        id: 1,
        src: 'images1.jpg',
        likes: 3,
        un_likes: 4,
    },
    {   
        title: 'Meme 3',
        id: 2,
        src: 'images2.jpg',
        likes: 6,
        un_likes: 4,
    },
    {   
        title: 'Meme 4',
        id: 3,
        src: 'images3.jpg',
        likes: 6,
        un_likes: 4,
    },
    {   
        title: 'Meme 5',
        id: 4,
        src: 'images4.jpg',
        likes: 6,
        un_likes: 4,
    },
    {   
        title: 'Meme 6',
        id: 5,
        src: 'images5.jpg',
        likes: 6,
        un_likes: 4,
    },
    {
        title: 'Meme 7',
        id: 6,
        src: 'images6.jpg',
        likes: 6,
        un_likes: 4,
    },
    {
        title: 'Meme 8',
        id: 7,
        src: 'images7.jpg',
        likes: 6,
        un_likes: 4,
    },
    {
        title: 'Meme 9',
        id: 8,
        src: 'images8.jpg',
        likes: 6,
        un_likes: 4,
    },
    {
        title: 'Meme 10',
        id: 9,
        src: 'images9.jpg',
        likes: 6,
        un_likes: 4,
    }
];

const initialState = {
    memos : memos,
    select : 'hot',
};

export default function indexReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case LIKE_TYPE:
            newState = {...state};
            newState.memos[action.id].likes = newState.memos[action.id].likes + 1;
            return JSON.parse(JSON.stringify(newState));
        case UN_LIKE_TYPE:
            newState = {...state};
            newState.memos[action.id].un_likes = newState.memos[action.id].un_likes + 1;
            return JSON.parse(JSON.stringify(newState));
        default: return state;
    }
}