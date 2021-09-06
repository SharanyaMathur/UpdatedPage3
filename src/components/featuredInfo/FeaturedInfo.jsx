import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
      <div>
          
          <br/>
    <div className="featured">
      <div className="featuredItem">
             <span className="featuredTitle">Reports Repository</span>
             <p>Ready to download reports with the lastest data across the domains</p>
      </div>
      <div className="featuredItem">
            <span className="featuredTitle">KPI Store</span>
            <p>Find the right KPI for your report for effective measurement and tracking</p>
      </div>
    </div>
    <div className="featured">
       <div className="featuredItem">
        <span className="featuredTitle">Discover Capabilities</span>
        <p>Deep dive into advanced analytics capabilites to uncover patterns and insights from unstructured complex data.</p>
        
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Augmented Analytics</span>
        <p>Explore AI capabilities to find structure , patterns and insights from your data</p>
        
      </div>
    </div>
    </div>
    
  );
} 