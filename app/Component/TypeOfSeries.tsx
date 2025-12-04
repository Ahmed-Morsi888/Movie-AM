"use client"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function TypeOfSeries({classname}:{classname?:string}) {
  let menu=[
    {value:"discover", label:"All Series"},
    {value:"popular", label:"popular"},
    {value:"top_rated", label:"Top rated"},
    {value:"airing_today", label:"Airing Today"},
    {value:"trending", label:"Trending"},
  ]
    let router = useRouter();

    let params=useSearchParams();
    let type=params.get('type')||"discover";
    const handelChangeType=(e:React.ChangeEvent<HTMLSelectElement> )=>{
        router.push(`/series?type=${e.target.value}`);
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


export default TypeOfSeries;