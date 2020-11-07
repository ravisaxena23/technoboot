import "../App.css";

function Navbar() {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://ravi-portfolio.s3.us-east-2.amazonaws.com/PIC+8.jpeg" +
          ")",
      }}
    >
      <nav class="navbar navbar-expand-lg">
        <div class="row first">
          <a class="navbar-brand" href="#">
            <img
              src="https://ravi-portfolio.s3.us-east-2.amazonaws.com/LOGO3.png"
              width="100"
              height="80"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{marginLeft:"auto"}}
          >
            <span
              class="navbar-toggler-icon"
              style={{
                backgroundImage:
                  "url(" +
                  "https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png" +
                  ")",
              }}
            ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" style={{ marginLeft: "auto" }}>
              <li class="nav-item active">
                <a class="nav-link white" href="#">
                  <h2>HOME</h2>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white" href="#">
                  <h2> ABOUT US </h2>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white" href="#">
                  <h2>PRODUCTS </h2>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white" href="#">
                  <h2>GET A QUBI</h2>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white" href="#">
                  <h2>CONTACT US</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
