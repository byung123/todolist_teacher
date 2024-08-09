import MainContainer from "../../components/MainContainer/MainContainer";
import PageAnimationLayout from "../../components/PageAnimationLayout/PageAnimationLayout";
import { useEffect, useState } from "react";
import BackButtonTop from "../../components/BackButtonTop/BackButtonTop";
import PageTitle from "../../components/PageTitle/PageTitle";
import { MENUS } from "../../constants/menus";
import { useRecoilState } from "recoil";
import { todolistAtom } from "../../atoms/todolistAtom";

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true); // true를 줘서 처음 랜더링을 없앰 (깜빡거리는 현상)
    const [ yearList, setYearList ] = useState([]);
    const [ monthList, setMonthList ] = useState([]);
    const [ todolistAll ] = useRecoilState(todolistAtom);
    
    useEffect(() => {
         // DashBoard.jsx에서 데이터 받아온걸 map
        const preYears = todolistAll.todolist.map(todo => todo.todoDateTime.slice(0, 4));
    }, [todolistAll]);

    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <BackButtonTop setShow={setShow}/>
                <PageTitle title={MENUS.all.title} color={MENUS.all.color}/>

            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;