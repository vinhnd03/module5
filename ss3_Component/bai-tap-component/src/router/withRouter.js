import { useNavigate } from "react-router-dom";

const withRouter = (Component) => {
  return function Wrapper(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

export default withRouter;