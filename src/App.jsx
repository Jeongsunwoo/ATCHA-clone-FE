import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./pages/MainPage";
import Header from "./components/Layout/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import DetailMoviePage from "./pages/DetailMoviePage";
import DetailTvPage from "./pages/DetailTvPage";
import FindPassWordPage from "./pages/FindPassWordPage";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profileeditpage" element={<ProfileEditPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="/detailPage" element={<DetailPage />}>
            <Route path="/detailPage/movie" element={<DetailMoviePage />}/>
            <Route path="/detailPage/tv" element={<DetailTvPage />} />
          </Route>
          <Route path="/FindPassWord" element={<FindPassWordPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;



