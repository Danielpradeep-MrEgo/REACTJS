import React from "react";
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widget">

      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcartoon.onlinetoom%2Fvideos%2F304785810618921%2F&show_text=true&width=552&height=683&appId"
        width="340"
        height="100%"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
