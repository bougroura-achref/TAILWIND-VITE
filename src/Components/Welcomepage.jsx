import div from '../assets/div.png';
const Welcomepage = () => {
  return (
    <div className="bg-black text-white w-[100%] h-[100%]" >

<ul className="flex justify-center gap-40 relative">
<li > <a href="#">category</a></li>
<li > <a href="#">projects</a></li>
<li><a href="#">profile</a></li>
<li className=" absolute right-10 font-bold text-[#0F545B] "><a href="#">Login</a></li>
</ul>
<div className='flex relative justify-center '>
<h1 className="text-5xl font-bold  mt-20 absolute left-10">Welcome to our platform</h1>
<img src={div} className='w-220'/>
</div>
<div className='flex justify-center '>
<button className='bg-[#0F545B] text-white border-[0.1] rounded-2xl w-50 h-9  '> want to learn </button>
</div>
<h1 className="text-5xl font-bold  mt-10 ml-40 mb-20">Category</h1>


<div className='flex justify-center grid grid-cols-2 gap-x-0 gap-y-20 '>


<div className=' colorr h-[180px] w-[400px]  ml-[150px] rounded-4xl flex justify-center items-center relative hover:scale-120 duration-300 transition'>
    <h1 className="text-2xl  font-bold  text-white">Design and creative</h1>
    <p className=' absolute right-4 bottom-3'><span className='text-[#8B8C62]'>4</span> projects</p>
</div>




<div className=' colorr h-[180px] w-[400px]  mr-[110px] rounded-4xl flex justify-center items-center relative hover:scale-120 duration-300 transition'>
    <h1 className="text-2xl  font-bold  text-white">AI  Services</h1>
    <p className=' absolute right-4 bottom-3'><span className='text-[#8B8C62]'>5</span> projects</p>
</div>



<div className=' colorr h-[180px] w-[400px]  ml-[150px] rounded-4xl flex justify-center items-center relative hover:scale-110 duration-300 transition '>
    <h1 className="text-2xl  font-bold  text-white">Sales and Marketing</h1>
    <p className=' absolute right-4 bottom-3'><span className='text-[#8B8C62]'>6</span> projects</p>
</div>


<div className=' colorr h-[180px] w-[400px]  mr-[110px] rounded-4xl flex justify-center items-center relative hover:scale-110 duration-300 transition'>
    <h1 className="text-2xl  font-bold  text-white">Developement and IT</h1>
    <p className=' absolute right-4 bottom-3'><span className='text-[#8B8C62]'>9</span> projects</p>
</div>

</div>


    </div>
  )
}

export default Welcomepage