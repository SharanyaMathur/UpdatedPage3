import "./widget1.css";
import { Visibility } from "@material-ui/icons";

export default function Widget1() {
  return (
    <div className="widget1">
      <span className="widgetSmTitle">Favorites</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">HIB ACO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Quarterly Report</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Report Demo</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Weekly Report</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">HIS Report</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}