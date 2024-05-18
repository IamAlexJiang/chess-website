import OpeningElements from "../openingElements/openingElements";
import "./openingList.css";

const OpeningList = ({ mainlines }) => (
  <div className='Openings'>
    {mainlines.map((mainline) => {
      return <OpeningElements mainline ={mainline}/>;
    })}
  </div>
);

export default OpeningList;