import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import PreNav from "./pre_nav";
import { openModal } from "../../actions/modal_actions";

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    });
};

const mdp = (dispatch) => {
    return ({
        openModal: modal => dispatch(openModal(modal))
    });
};

export default connect(msp, mdp)(PreNav);