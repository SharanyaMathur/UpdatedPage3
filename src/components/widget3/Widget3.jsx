import "./widget3.css";
import { Visibility } from "@material-ui/icons";

export default function widget3() {
  return (
    <div className="widget3">
      <span className="widget3Title">Recently Viewed</span>
      <ul className="widget3List">
        <li className="widget3ListItem">
          
          <div className="widget3User">
            <span className="widget3Username">AIC Report</span>
          </div>
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
        </li>
        <li className="widget3ListItem">
          
          <div className="widget3User">
            <span className="widget3Username">Report Demo</span>
          </div>
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
        </li>
        <li className="widget3ListItem">
          
          <div className="widget3User">
            <span className="widget3Username">Quarterly Report</span>
          </div>
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
        </li>
        <li className="widget3ListItem">
          
          <div className="widget3User">
            <span className="widget3Username">Shared Services</span>
          </div>
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
        </li>
        <li className="widget3ListItem">
          
          <div className="widget3User">
            <span className="widget3Username">HIS Report</span>
          </div>
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}