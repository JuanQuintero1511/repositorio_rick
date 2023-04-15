import Card from './Card';

export default function Cards({ characters, onClose}) {
   return ( <div>
      {
         characters.map (({id, name, status, species, gender, origin, image}) => {
            return (<Card
               key = {characters.id}
               id = {id}
               name = {name}
               species = {species}
               status = {status}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               onClose={onClose}
            />
            );
         })
      }
   </div> );
   
}


