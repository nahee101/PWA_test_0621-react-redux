import React, { useState } from "react";

const MemoItem = React.memo(function MemoItem({ memo, onDelete }) {
    return (
        <li>
            <div>
                <span><strong>제목: {memo.title} </strong></span>
                <button
                onClick={() => {
                    onDelete(memo.id)
                }}>
                    X
                </button>
                <p>{memo.content}</p>
            </div>
        </li>
    );
});

const MemoList = React.memo(function MemoList({ memos, onDelete }) {
    return (
        <ul>
            {memos.map(memo => (
                <MemoItem key={memo.id} memo={memo} onDelete={onDelete}/>
            ))}
        </ul>
    );
});

function Memos({ memos, onCreateTitle, onCreateContent, onDelete }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    /* 사용 함수 */
    const onChange = (e) => {
        const {target: {name, value} } = e;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'content') {
            setContent(value);
        };
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onCreateTitle(title);
        onCreateContent(content);
        
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h1>메모를 작성하는 공간입니다</h1>
            <form onSubmit={onSubmit}>
                <input 
                type="text"
                name="title"
                value={title}
                placeholder='제목을 작성하세요'
                onChange={onChange} /> <br />
                <textarea 
                name="content"
                value={content}
                cols="30" rows="10"
                placeholder='내용을 작성하세요'
                onChange={onChange} /> <br />
                <input type="submit" value='입력' />
            </form>
            <hr />
            <MemoList memos={memos} onDelete={onDelete} />
        </div>
    );
};

export default Memos;