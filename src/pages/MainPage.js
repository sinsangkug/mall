import { Link } from "react-router-dom";

// MainPage 컴포넌트를 정의합니다. 이 컴포넌트는 "Main Page"라는 텍스트를 큰 글씨 크기(3xl)로 화면에 표시합니다.
const MainPage = () => {
    return (
        <div>
            <div className="flex">
                <Link to="/about">About</Link>
            </div>
            <div className="text-3xl">Main Page</div>
        </div>
    );
}
// MainPage 컴포넌트를 다른 파일에서 사용할 수 있도록 export 
export default MainPage;
