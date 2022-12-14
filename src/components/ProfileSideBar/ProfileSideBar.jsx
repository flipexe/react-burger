import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { logout } from "../../services/actions/auth";
import { getCookie } from "../../utils/api";
import { _ORDERS_PATH, _PROFILE_PATH, _ROOT_PATH } from "../../utils/constants";
import classes from "./ProfileSideBar.module.css";

const ProfileSideBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const refToken = document.cookie ? getCookie("refreshToken") : "";

  const { isAuth } = useSelector((state) => state.userData);

  const handleLogout = () => {
    dispatch(logout(refToken, history));
  };

  if (isAuth) {
    return (
      <div className={classes.nav_container}>
        <Link to={_PROFILE_PATH} className={classes.nav_item}>
          <p
            className={`${
              location.pathname === _PROFILE_PATH ? "" : "text_color_inactive"
            } text text_type_main-medium pt-4 pr-4 pb-4`}
          >
            Profile
          </p>
        </Link>
        <Link to={_ORDERS_PATH} className={classes.nav_item}>
          <p
            className={`${
              location.pathname === _ORDERS_PATH ? "" : "text_color_inactive"
            } text text_type_main-medium pt-4 pr-4 pb-4`}
          >
            Order history
          </p>
        </Link>
        <button className={classes.logout_button} onClick={handleLogout}>
          <p className="text text_type_main-medium pt-4 pr-4 pb-4 text_color_inactive">
            Exit
          </p>
        </button>
        <p className={`${classes.nav_description} text text_type_main-small`}>
          In this section you can change your personal data
        </p>
      </div>
    );
  } else {
    return <Redirect to={location?.state?.from || _ROOT_PATH} />;
  }
};

export default ProfileSideBar;
