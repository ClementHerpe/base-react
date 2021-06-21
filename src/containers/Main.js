import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import { fetchGeneralInfos } from '../actions/infos';
import Main from '../components/Main';

const mapStateToProps = (state) => ({
    infos: state.infos.infos,
});

const mapDispatchToProps = (dispatch) => ({
    fetchgeneralinfos: () => {
    dispatch(fetchGeneralInfos());
  },
});

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
