import "./widget2.css";
import { Visibility } from "@material-ui/icons";
export default function Widget2() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widget2">
      <h3 className="widgetLgTitle">Subscribed Domains</h3>
      <table className="widgetLgTable">
        
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Health Care Economics</span>
          </td>
          <td className="widgetLgAmount">1</td>
          <td className="widgetLgStatus">
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">ICDO</span>
          </td>
          <td className="widgetLgAmount">3</td>
          <td className="widgetLgStatus">
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">OGA Building</span>
          </td>
          <td className="widgetLgAmount">2</td>
          <td className="widgetLgStatus">
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Shared Services</span>
          </td>
          <td className="widgetLgAmount">4</td>
          <td className="widgetLgStatus">
          <button className="widget3Button">
            <Visibility className="widget3Icon" />
            Display
          </button>
          </td>
        </tr>
      </table>
    </div>
  );
}