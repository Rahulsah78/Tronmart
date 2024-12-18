import React from 'react';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import ProductsDetails from './Pages/DetailsProducts/ProductsDetails';
import AudioDetails from './Pages/AudioDetails/AudioDetails';
import HomeAppliances from './Pages/HomeAppliancesDetails/HomeAppliancesDetails';
import AirConditioner from './Pages/AirConditionerDetails/AirConditioner';
import Kitchenappliances from './Pages/KitchenAppliancesDetails/Kitchenappliancesdetails';
import Refrigeratordetails from './Pages/RefrigeratorDetails/Refrigeratordetails';
import PCsLaptop from './Pages/PCs&LaptopDetails/PCsLaptopdetails';
import Gadgetdetails from './Pages/GadgetDetails/Gadgetdetails';
import Relatedproductsdetails from './Pages/RelatedProductsDetails/Relatedproductsdetails';
import Gadgets from './CategoriesPages/Gadgets/Gadgets';
import VideoAndAudio from './CategoriesPages/VideoAndAudio/VideoAndAudio';
import Home from './CategoriesPages/AppliancesHome/Home'
import Kitchen from './CategoriesPages/AppliancesKitchen/Kitchen';
import Laptop from './CategoriesPages/PcLaptop/Laptop';
import Refrigerators from './CategoriesPages/Refrigerator/Refrigerators';
import HomeSmart from './CategoriesPages/SmartHome/HomeSmart';
import Conditioner from './CategoriesPages/ConditionerAir/Conditioner';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import NewArrivalsDetails from './Pages/NewArrivalsDetails/NewArrivalsDetails';
import TodaysDeal from './Components/TodaysDeal/TodaysDeal';
import TodayDealsDetails from './Pages/TodayDealsDetails/TodayDealsDetails';
import GiftCards from './Components/GiftCards/GiftCards';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart/Cart';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';





// AdminDasboard Route here 
// import Landing from './AdminDashBoard/Landing/Landing';
import Products from './AdminDashBoard/Products/Products';
import Dashboard from './AdminDashBoard/Dashboard/Dashboard';
import Category from './AdminDashBoard/Category/Category';
import Inventory from './AdminDashBoard/Inventory/Inventory';
import Orders from './AdminDashBoard/Orders/Orders';
// import Purchase from './AdminDashBoard/Purchases/Purchases';
// import Attributes from './AdminDashBoard/Attributes/Attributes';
// import Invoices from './AdminDashBoard/Invoices/Invoices';
// import Settings from './AdminDashBoard/Settings/Settings';
// import Profile from './AdminDashBoard/Profile/Profile';
import Customers from './AdminDashBoard/Customers/Customers';
import Sellers from './AdminDashBoard/Sellers/Sellers';
// import Coupons from './AdminDashBoard/Coupons/Coupons';
// import Reviews from './AdminDashBoard/Reviews/Reviews';
import Chats from './AdminDashBoard/Chat/Chat';
// import Email from './AdminDashBoard/Email/Email';
// import Todo from './AdminDashBoard/Todo/Todo';
import Authentication from './AdminDashBoard/Authentication/Authentication';
import Widgets from './AdminDashBoard/Widgets/Widgets';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/productsdetails/:detailsId' element={<ProductsDetails />} />
        <Route path='/audioDetails/:audioId' element={<AudioDetails />} />
        <Route path='/homeappliancesdetails/:homeId' element={<HomeAppliances />} />
        <Route path='/airconditionerdetails/:airId' element={<AirConditioner />} />
        <Route path='/kitchenappliancesdetails/:kitchenId' element={<Kitchenappliances />} />
        <Route path='/refrigeratordetails/:refrigeratorId' element={<Refrigeratordetails />} />
        <Route path='/pc_laptopdetails/:pcId' element={<PCsLaptop />} />
        <Route path='/gadgetdetails/:gadgetId' element={<Gadgetdetails />} />
        <Route path='/relatedproductsdetails/:relatedtId' element={<Relatedproductsdetails />} />
        <Route path='/newarrivalsdetails/:newarrivalsId' element={<NewArrivalsDetails />} />
        <Route path='/todaydealsdetails/:todaydealId' element={<TodayDealsDetails />} />

        {/* Category routes */}
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/conditioner_air' element={<Conditioner />} />
        <Route path='/gadgets' element={<Gadgets />} />
        <Route path='/video_and_audio' element={<VideoAndAudio />} />
        <Route path='/appliancess_home' element={<Home />} />
        <Route path='/appliances_kitchen' element={<Kitchen />} />
        <Route path='/laptop_and_pc' element={<Laptop />} />
        <Route path='/refrigerator' element={<Refrigerators />} />
        <Route path='/home_smart' element={<HomeSmart />} />
        <Route path='/todays-deal' element={<TodaysDeal />} />
        <Route path='/gift-cards' element={<GiftCards />} />
        <Route path='/view-carts' element={<Cart />} />
        <Route path='/check-out-page' element={<CheckoutPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account/create' element={<Register />} />


        {/* Admin Dashboard Route are here  */}
        <Route path='/admin'>
          {/* <Route path='landing' element={<Landing />} /> */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/inventory' element={<Inventory />} />
          <Route path='/admin/orders' element={<Orders />} />
          {/* <Route path='/admin/purchases' element={<Purchase />} /> */}
          {/* <Route path='/admin/attributes' element={<Attributes />} /> */}
          {/* <Route path='/admin/invoices' element={<Invoices />} /> */}
          {/* <Route path='/admin/settings' element={<Settings />} /> */}
          {/* <Route path='/admin/profiles' element={<Profile />} /> */}
          <Route path='/admin/customers' element={<Customers />} />
          <Route path='/admin/sellers' element={<Sellers />} />
          {/* <Route path='/admin/coupons' element={<Coupons />} /> */}
          {/* <Route path='/admin/reviews' element={<Reviews />} /> */}
          <Route path='/admin/chats' element={<Chats />} />
          {/* <Route path='/admin/emails' element={<Email />} /> */}
          {/* <Route path='/admin/todos' element={<Todo />} /> */}
          <Route path='/admin/authentication' element={<Authentication />} />
          <Route path='/admin/widgets' element={<Widgets />} />
        </Route>


      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;