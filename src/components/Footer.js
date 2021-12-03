import React from "react";


/* export default function */
const Footer = (props) => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright © {props.fecha} <a href="https://adminlte.io">AdminLTE.io</a>.
      </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0
      </div>
    </footer>
  );
}

export default Footer;