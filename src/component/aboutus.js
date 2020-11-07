import React, { Component } from "react";
import { connect } from "react-redux";
import { getabout } from "../store/actions/aboutusActions";

class about extends Component {
  componentDidMount() {
    this.props.getabout();
  }
  render() {
    const { about } = this.props.about;
    console.log(about);

    return (
      <React.Fragment>
        <div
          class="aboutus"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" +
              ")",
          }}
        >
          <div class="aboutus-heading">
            <h1 class="about-title">About</h1>
            <h1 class="abouttitle"> us</h1>
          </div>
        </div>
        {about.map((u) => (
          <React.Fragment key={u.id}>
            <div class="row row-class">
              <div class="col-md-4">
                <h2 class="heading">{u.heading}</h2>
                <p class="text-data">{u.textdata}</p>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-4">
                  <img src="https://ravi-portfolio.s3.us-east-2.amazonaws.com/PIC+6.jpeg" alt="coffer image" class="img"/>
              </div>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ about: state.about });

export default connect(mapStateToProps, { getabout })(about);
