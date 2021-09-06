//import Chart from "../../components/chart/Chart";
//import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Widget2 from "../../components/widget2/Widget2";
import Widget1 from "../../components/widget1/Widget1";
import "./Home.css";
import Widget3 from "../../components/widget3/Widget3";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
//import { userData } from "../../dummyData";
//import WidgetSm from "../../components/widgetSm/WidgetSm";
//import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <div className="feature">
        <h1 className="two" >Intelligence Xchange 1.0 </h1>
        <hr className="style-one"/>
        <FeaturedInfo/>
      </div>
      
      <div className="homeWidgets">
        <Widget1/>
        <Widget2/>
        <Widget3/>
      </div>
    </div>
  );
}