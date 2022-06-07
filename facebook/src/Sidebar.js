import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import { useStateValue } from "./StateProvider";


function Sidebar() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="sidebar">
      {/* <div className="header__info">
          <Avatar />
          <h4>Daniel</h4>
        </div> */}
        <SidebarRow
        src={user.photoURL}
        title={user.displayName}/>
      {/* <SidebarRow
        src="https://scontent.fvtz3-1.fna.fbcdn.net/v/t1.0-1/cp0/p80x80/75412306_799535637165178_3901831574844342272_n.jpg?_nc_cat=103&amp;_nc_sid=7206a8&amp;_nc_ohc=D6nnndDv3TsAX86rYed&amp;_nc_ht=scontent.fvtz3-1.fna&amp;oh=db116667f8a6fa557bb302749beccf8d&amp;oe=5F6FF7EE"
        style="height:36px;width:35px"
        x="0"
        y="0"
        height="100%"
        preserveAspectRatio="xMidyMid slice"
        width="100%"
        title="Danny"
      /> */}
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" style="height:36px;width:36px" alt="" title="COVID-19 information centre" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" style="height:36px;width:36px" alt="" title="Friends" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" style="height:36px;width:36px" alt="" title="Groups" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" style="height:36px;width:36px" alt="" title="Videos" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png" style="height:36px;width:36px" alt="" title="Events" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" style="height:36px;width:36px" alt="" title="Memories" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" style="height:36px;width:36px" alt="" title="Saved" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" style="height:36px;width:36px" alt="" title="pages" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png" alt="" title="Crisis Response" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/RQja_5-eQY2.png" alt="" title="Films" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/WAO9fJenkhr.png" alt="" title="Friend lists" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png" alt="" title="Fundraisers" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png" alt="" title="Games" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7_M5n6hwiZ3.png" alt="" title="Gaming" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7_M5n6hwiZ3.png" alt="" title="Jobs" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/dghnujhRAoU.png" alt="" title="Live Videos" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/kQ3g3UYcS_k.png" alt="" title="Messenger" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png" alt="" title="Messenger Kids" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png" alt="" title="Most recent" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/aD733-bMVVs.png" alt=""  title="Offers" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png" alt=""  title="Recent ad activity" />
      <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png" alt="" title="Weather" />
      {/* <IconButton>
        <ExpandMoreIcon />
        <h6 className="title">See more</h6>
      </IconButton> */}
    </div>
  );
}

export default Sidebar;
