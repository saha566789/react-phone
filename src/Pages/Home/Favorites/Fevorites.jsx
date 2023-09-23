import { useEffect, useState } from "react";
import PhonesCard from "../../../Components/Phone/PhonesCard";


const Fevorites = () => {

    const [favorites,setFavorites] =useState([])
    const [nofound,setNoFound] = useState(false)
    const[isShow,setShow] = useState(false)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
        if(favoritesItems){
            
         setFavorites(favoritesItems)

         const total = favoritesItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

         console.log(total);
   
         setTotalPrice(total)
   
        }
        else{
            console.log('no data')
            setNoFound('no data found')
        }
       
    },[])

    const handleDelete = () =>{
        localStorage.clear()
        setFavorites([])
        setNoFound('no found data')
    }

    console.log(favorites)
    return (
        <div>
           {nofound? <p>{nofound}</p> : <div>

       {
        favorites.length > 0 && 
        (<div>
            <button onClick={handleDelete} className="btn bg-primary">delete all data</button>
            <h1>total:{totalPrice}</h1>
        </div>)
       }
            <div className="grid grid-cols-2 gap-5">

                {
                    isShow? favorites.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>) 
                    : favorites.slice(0,2).map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>

           {favorites.length > 2 &&  <button onClick={() =>setShow(!isShow)} className="px-5 block mx-auto bg-slate-500">{isShow ? 'see less' : 'see more'}</button>}
           </div>
            

            
           }
        </div>
    );
};

export default Fevorites;