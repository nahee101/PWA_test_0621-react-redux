import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Memos from '../components/Memos';
import { addMemo, deleteMemo } from "../modules/memos";

const MemosContainer = () => {
    const { memos } = useSelector(state => state.memos);
    const dispatch = useDispatch();

    const onCreateTitle = useCallback((title) => dispatch(addMemo(title)), [dispatch]);
    const onCreateContent = useCallback((content) => dispatch(addMemo(content)), [dispatch]);
    const onDelete = useCallback(id => dispatch(deleteMemo(id)), [dispatch]);

    return <Memos memos={memos} onCreateTitle={onCreateTitle} onCreateContent={onCreateContent} onDelete={onDelete} />;
};

export default MemosContainer;