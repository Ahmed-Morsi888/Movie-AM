"use client"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function typeOfFilm({classname}:{classname?:string}) {
  const menu=[
    {value:"discover", label:"All movies"},
    {value:"popular", label:"popular"},
    {value:"top_rated", label:"Top rated"},
    {value:"upcoming", label:"Upcoming"},
    {value:"trending", label:"Trending"},
  ]
    const router = useRouter();

    const params=useSearchParams();
    const type=params.get('type')||"discover";
    const handelChangeType=(e:React.ChangeEvent<HTMLSelectElement> )=>{
        router.push(`/movies?type=${e.target.value}`);
    }

  return (
    <div className={`p-4  ${classname || ""}`}>
  <select className='text-black p-2 rounded-md bg-gray-300 font-bold text-md outline-none border-0 '
  onChange={handelChangeType}
  value={type}
  >
    {menu.map((item)=>(
    
      <option className='bg-gray-800 text-white ' key={item.value} value={item.value}>{item.label}</option>
    ))}



  </select>

    </div>
  )
}


export default typeOfFilm;