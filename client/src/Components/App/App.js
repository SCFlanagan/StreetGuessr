import LandingPage from '../LandingPage/LandingPage';
import Game from '../Game/Game';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

const App = props => {
  return (
    <div className="App flex-center">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/famousplaces" element={props.mapType ? <Game /> : <Navigate to="/" />} />
        <Route exact path="/world" element={props.mapType ? <Game /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = state => ({
  mapType: state.mapType
});

export default connect(mapStateToProps, null)(App);
