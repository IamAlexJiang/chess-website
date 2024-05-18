import "./openingElements.css";
import { getMainlines } from "../../data/mainlines";
import { getImageURL } from "../../utils/image-util";

function OpeningElements() {
    const mainlines = getMainlines();
    
    return(
        <ul
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
            mainlines.map(mainline => (
                <li 
                    key={mainline.id}
                    className="flex flex-col mx-3 my-3 p-4 border border-black/10 shadow-sm rounded-xl">

                 <img 
                    src={getImageURL(mainline.cover)}
                    alt={mainline.name}
                    classname="w-full object-cover"/>
                 <h2 className="text-3xl my-3">{mainline.title}</h2>
                 <p>{mainline.description}</p>
                </li>

            ))

        }
        
        </ul>

    )}
// const OpeningElements = ({ mainline }) => {
//     const {id, name} = mainline;
//     const imageName = name.toLowerCase().replace(/\s/g, '');
      
//     return (
//       <div className='opening-container' key={id}>
//       <img src={`/images/Openings/${imageName}.jpg`} alt={`Opening ${name}`} />
//         <p>{name}</p>
//       </div>
//     );
// };

export default OpeningElements;