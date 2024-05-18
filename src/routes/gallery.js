import OpeningList from '../components/openingList/openingList'

const Gallery = ({ openings }) => {
  return (
    <div className = 'Gallery'>
      <h1>Gallery</h1>
      <OpeningList openings={openings} />
    </div>
  );
}


export default Gallery;