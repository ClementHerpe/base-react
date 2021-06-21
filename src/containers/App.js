import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import { fetchGeneralInfos } from '../actions/infos';
import App from '../components/App';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
