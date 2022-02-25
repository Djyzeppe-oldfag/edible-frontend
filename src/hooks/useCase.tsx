import {get as getAction, openCase as openCaseAction} from '../actions/boxes';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";
import {useEffect, useState} from "react";
import {WObject} from "../types/store";

const useCase = () => {
    const dispatch = useDispatch();
    const box = useSelector((state: AppState) => state.box);
    const boxes = useSelector((state: AppState) => state.boxes);
    const [content, setContent] = useState<WObject[]>([]);
    const [target, setTarget] = useState<number | undefined>();
    const [ratio, setRatio] = useState<number>();

    useEffect(() => {
        setTarget(boxes.opened_id)
        box.data.map((item, index) => {
           if (item.bit_id == boxes.opened_id)
               setRatio(index  / box.data.length)
        });
    }, [boxes]);

    useEffect(() => {
        setContent(box.data);
    }, [box]);

    const getCases = (id: number) => {
        dispatch(getAction(id));
    }

    const openCase = (id: number) => {
        dispatch(openCaseAction(id));
    }

    return {
        getCases,
        openCase,
        target,
        content,
        ratio
    };
}

export default useCase;