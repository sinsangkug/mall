import { RouterProvider } from "react-router-dom";
import root from "./router/root";

// App 컴포넌트를 함수형 컴포넌트로 정의합니다.
function App() {
  // 컴포넌트는 UI에 렌더링할 JSX(JavaScript XML)를 반환합니다.
  return (
    <RouterProvider router={root} />
  );
}
export default App;

