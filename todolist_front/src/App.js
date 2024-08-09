import { Route, Routes } from "react-router-dom";
import Dashborad from "./pages/Dashboard/Dashborad";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import NotFound from "./pages/NotFound/NotFound";
import { Global } from "@emotion/react";
import { reset } from "./styles/common";
import DandP from "./pages/DandP/DandP";
import MainLayout from "./components/MainLayout/MainLayout";
import TodoAll from "./pages/TodoAll/TodoAll";

function App() {
    return (
        <>
            <Global styles={reset}/> {/* index.js에다가 해줘도 된다*/}
            <MainLayout>
                <Routes>
                    <Route path="/todo/*" element={<Dashborad />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/dp" element={<DandP />} />
                    {/* 다른 모든 경로를 제외한 모든 곳에서 이 페이지(NotFound)로 이동( * 우선순위가 제일 낮음)*/}
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;
