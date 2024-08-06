/** @jsxImportSource @emotion/react */
import { Children } from "react";
import * as s from "./style";

// 컴포넌트는 무조건 props 만을 매개변수로 받아올 수 있다. props는
{/* <MainLayout props={props} /> */}
// props를 비구조 할당으로 children이란 키 값을 가져옴 => 
function MainLayout({children}) {
    return (
        <div css={s.layout}>
            <div css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.topBarCenter}></div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;