import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroComp from "./component/homeComponents/HeroComp";
import Home from "./component/homeComponents/Home";
import Register from "./Holder/Register/Register";
import SignIn from "./Holder/Register/SignIn";
import Category from "./component/categoryPage/Category";
import Detail from "./component/Detail/Detail";
import Header from "./component/headerComponents/Header";
import Footer from "./component/Footer/Footer";
import PrivateRoute from "./GlobalState/PrivateRoute";
import DetailsUser from "./component/Detail/DetailsUser";
import DetailDashBoard from "./component/Detail/Detail";
import NoUserDetail from "./component/Detail/NoUserDetail";
import PitchForm from "./Holder/OtherForms/PitchForm";
import BrandForm from "./Holder/OtherForms/BrandForm";
import JourneyForm from "./Holder/OtherForms/JourneyForm";
import ScrollToTop from "./ScrollToTop";
import VideoForm from "./Holder/OtherForms/VideoForm";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/:id/detail" element={<NoUserDetail />} />
					{/* <Route path="/detail" element={<NoUserDetail />} /> */}
					<Route path="/categories" element={<Category />} />
					<Route
						path="/dashboard/video_form"
						element={
							<PrivateRoute>
								<VideoForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/pitch_deck"
						element={
							<PrivateRoute>
								<PitchForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/journey_path"
						element={
							<PrivateRoute>
								<JourneyForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/dashboard/brand_form"
						element={
							<PrivateRoute>
								<BrandForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<DetailDashBoard />
							</PrivateRoute>
						}
					/>
				</Routes>
			</ScrollToTop>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
