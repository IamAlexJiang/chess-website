import "./openingElements.css";

const OpeningElements = ({ mainline }) => {
    const {id, name} = mainline;
    const imageName = name.toLowerCase().replace(/\s/g, '');
      
    return (
      <div className='opening-container' key={id}>
        <img src={`/images/Openings/${imageName}.jpg`} alt={`Opening ${name}`} /> 
        <p>{name}</p>
      </div>
    );
};

export default OpeningElements;