import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../store/actions";
import Alert from "react-s-alert";

//Component Imports
import AdminNav from "./NavBar";
import HmcForm from "./Forms/HmcForm";
import CandidateForm from "./Forms/CandidateForm";
import CommitteeForm from "./Forms/CommitteForm";
import CandidateList from "./DataLists/CandidateList";
import CommitteeList from "./DataLists/CommitteeList";
import ResultsView from "./Results/";

//Alert CSS
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

const DefaultBlock = () => {
  return (
    <h1 style={{ paddingTop: 100 }}>
      Hey, click something on the left to get started.
    </h1>
  );
};

class AdminDashboard extends Component {
  logOut = () => {
    this.props.logOut();
  };

  render() {
    return (
      <div>
        <AdminNav logout={this.logOut} />
        <div className="col-md-6 offset-md-3">
          <Switch>
            <Route path="/admin/candidate_form" component={CandidateForm} />
            <Route path="/admin/committee_form" component={CommitteeForm} />
            <Route path="/admin/hmc_form" component={HmcForm} />
            <Route path="/admin/candidate_list" component={CandidateList} />
            <Route path="/admin/committee_list" component={CommitteeList} />
            <Route path="/admin/results" component={ResultsView} />
            <Route path="/admin" component={DefaultBlock} />
          </Switch>
        </div>
        <Alert stack={{ limit: 3 }} position="bottom-right" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { logOut }
)(AdminDashboard);
