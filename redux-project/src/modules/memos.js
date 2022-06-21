/* 액션 타입 선언 */
const ADD_MEMO = 'memos/ADD_MEMO';
const DELETE_MEMO = 'memos/DELETE_MEMO';

let id = 3; // memo 데이터에서 사용할 고유 id

export const addMemo = (title, content) => ({
    type: ADD_MEMO,
    memo: {
        id: id++, // 새 항목을 추가하고 nextId 값에 1을 더한다
        title,
        content
    }
});

export const deleteMemo = (id) => ({
    type: DELETE_MEMO,
    id
});

/* 초기 상태 선언 */
const initialState = {
    memos: [
        {
            id: 1,
            title: '첫 번째',
            content: '첫 번째 메모',
        },
        {
            id: 2,
            title: '두 번째',
            content: '두 번째 메모',
        }
    ]
}

function memos(state = initialState, action) {
    switch (action.type) {
        case ADD_MEMO:
            return {
                ...state,
                memos: state.memos.concat(action.memo)
            };
        case DELETE_MEMO:
            return {
                ...state,
                memos: state.memos.filter((memo) => memo.id !== action.id)
            };
        default: 
            return state;
    }
};

export default memos;