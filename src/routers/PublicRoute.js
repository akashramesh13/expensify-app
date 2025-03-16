import { connect } from "react-redux";
export const PublicRoute = (props) => {
  if (!props.isAuthenticated) return props.children;
};
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
