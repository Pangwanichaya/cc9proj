import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Food from "../pages/Food";
import Drink from "../pages/Drink";
import Pancake from "../pages/Pancake";
import ToppingPancake from "../pages/ToppingPancake";
import Feedback from "../pages/Feedback";
import Promotion from "../pages/Promotion";
import Coupon from "../pages/Coupon";
import ThxFeedback from "../pagesthx/ThxFeedback";
import OrderSummary from "../pages/OrderSummary";
import Payment from "../pages/Payment";
import Admin1 from "../pagesadmin/Admin1";
import Admin2 from "../pagesadmin/Admin2";
import Admin3 from "../pagesadmin/Admin3";
import Admin4 from "../pagesadmin/Admin4";
import Admin5 from "../pagesadmin/Admin5";
import Profile from "../pagesprofile/Profile";
import ProfileAdress from "../pagesprofile/ProfileAdress";
import ProfileOrderStatus from "../pagesprofile/ProfileOrderStatus";
import AddFormProduct from "../component/form/admin/AddFormProduct";
import UpdateFormProduct from "../component/form/admin/UpdateFormProduct";
import AddProfileAddress from "../pagesprofile/AddProfileAddress";
import EditProfileAddress from "../pagesprofile/EditProfileAddress";
import UpdateSummary from "../component/form/admin/UpdateSummary";

const route = {
  ADMIN: {
    route: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/food",
        component: Food,
      },
      {
        path: "/pancake",
        component: Pancake,
      },
      {
        path: "/drink",
        component: Drink,
      },
      {
        path: "/admin1",
        component: Admin1,
      },
      {
        path: "/adminupdatesummary/:id",
        component: UpdateSummary,
      },

      {
        path: "/admin2",
        component: Admin2,
      },
      {
        path: "/admin3",
        component: Admin3,
      },
      {
        path: "/admin4",
        component: Admin4,
      },
      {
        path: "/admin5",
        component: Admin5,
      },
      {
        path: "/adminaddproduct",
        component: AddFormProduct,
      },
      {
        path: "/adminupdateproduct/:id",
        component: UpdateFormProduct,
      },
    ],
    redirect: "/",
  },
  USER: {
    route: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/food",
        component: Food,
      },
      {
        path: "/pancake",
        component: Pancake,
      },
      {
        path: "/drink",
        component: Drink,
      },

      {
        path: "/ordersummary",
        component: OrderSummary,
      },
      {
        path: "/payment",
        component: Payment,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/profile-address",
        component: ProfileAdress,
      },
      {
        path: "/editprofile/:id",
        component: EditProfileAddress,
      },
      {
        path: "/profile-orderstatus",
        component: ProfileOrderStatus,
      },

      {
        path: "/addprofileaddress",
        component: AddProfileAddress,
      },
    ],
    redirect: "/",
  },
  GUEST: {
    route: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/",
        component: Home,
      },
      {
        path: "/food",
        component: Food,
      },
      {
        path: "/pancake",
        component: Pancake,
      },
      {
        path: "/drink",
        component: Drink,
      },
      {
        path: "/promotion",
        component: Promotion,
      },
      {
        path: "/toppingpancake",
        component: ToppingPancake,
      },
      {
        path: "/feedback",
        component: Feedback,
      },
      {
        path: "/coupon",
        component: Coupon,
      },
      {
        path: "/thxfeedback",
        component: ThxFeedback,
      },
    ],
    redirect: "/",
  },
};

export default route;
