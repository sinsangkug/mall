import { Suspense, lazy } from "react"; // 'react' 라이브러리에서 Suspense와 lazy를 불러옵니다. Suspense는 컴포넌트 로딩을 지연시키는 데 사용되며, lazy는 동적으로 컴포넌트를 불러올 때 사용됩니다.

const { createBrowserRouter } = require("react-router-dom"); // 'react-router-dom' 라이브러리에서 createBrowserRouter 함수를 불러옵니다. 이 함수는 브라우저 환경에서 사용할 라우터를 생성합니다.

const Loading = <div>Loading....</div> // 로딩 컴포넌트를 정의합니다. 이 컴포넌트는 다른 컴포넌트가 로드되는 동안 사용자에게 보여집니다.

const Main = lazy(() => import("../pages/MainPage")) // MainPage 컴포넌트를 동적으로 불러오기 위해 lazy 함수를 사용합니다. 이 방식은 컴포넌트가 실제로 필요할 때까지 로드를 지연시켜 초기 로딩 시간을 단축시킵니다.
const About = lazy(() => import("../pages/AboutPage")) // AboutPage 컴포넌트를 동적으로 불러오기 위해 lazy 함수를 사용합니다. 이 방식은 컴포넌트가 실제로 필요할 때까지 로드를 지연시켜 초기 로딩 시간을 단축시킵니다.


const root = createBrowserRouter([
    {
        path: "", // 이 경로는 브라우저의 주소창에 아무것도 입력되지 않았을 때와 일치합니다.
        element: <Suspense fallback={Loading}><Main/></Suspense> // Suspense 컴포넌트를 사용하여 Main 컴포넌트를 비동기적으로 로드합니다. Main 컴포넌트가 로드되는 동안 Loading 컴포넌트가 대신 보여집니다.
    },
    {
        path: "/about", // 이 경로는 브라우저의 주소창에 "/about"을 입력했을 때와 일치합니다.
        element: <Suspense fallback={Loading}><About/></Suspense> // Suspense 컴포넌트를 사용하여 About 컴포넌트를 비동기적으로 로드합니다. About 컴포넌트가 로드되는 동안 Loading 컴포넌트가 대신 보여집니다.
    }
]) // createBrowserRouter 함수를 사용하여 브라우저 라우터를 생성합니다. 이 라우터는 URL 경로에 따라 적절한 컴포넌트를 렌더링하는 역할을 합니다.

export default root; // 생성된 라우터 객체인 root를 다른 파일에서 사용할 수 있도록 export 합니다.
