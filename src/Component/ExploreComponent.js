import { width } from "dom-helpers";
import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export const ExploreComponent = () => {
  return (
    <div class="row">
      <div class="column">
        <img src="assets/images/front.jpg" alt="Snow" style={{marginLeft:20,marginTop: 20,marginRight: 5, height: "200%"}} />
        <img src="assets/images/first.jpg" alt="Forest" style={{marginLeft:20,marginRight: 5, marginBottom: 150 }} />
        <img src="assets/images/front.jpg" alt="Mountains" style={{marginLeft:20,marginTop: 20,marginRight: 5}} />
      </div>
    </div>
  );
};
