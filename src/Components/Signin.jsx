import image from '../assets/image.svg';
function Signin() {
return (
    <div className='bg-black min-h-screen flex items-end justify-end relative'>
        <img src={image} alt="img" className='absolute top-10 left-0' />
        <div className='w-[379px] h-[397px] rounded-2xl login z-50 mt-65 mr-25  '>
            <h1 className='text-white text-2xl font-bold  mt-7 ml-10 '>Signin</h1>
            <p className=' ml-10 text-gray-300'>Welcome anboard with us!</p>
         
             <br />
             <label htmlFor="username" className=' text-white text-[12px] ml-10'>Username</label>
             <br />
             <input   className=' text-white text-[13px]  ml-10 border-[0.2px] border-zinc-500 Signin rounded-sm w-70 h-7 ' type="text" id='username ' placeholder='  Enter your username   ' />
     <br />     <br />
     <label htmlFor="Email" className=' text-white text-[12px] ml-10'>Email</label>
             <br />
             <input   className=' text-white text-[13px]  ml-10 border-[0.2px] border-zinc-500 Signin rounded-sm w-70 h-7 ' type="text" id='Email ' placeholder='  Enter your username   ' />
     <br />     <br />

             <label htmlFor="Password" className=' text-white text-[12px] ml-10'>Password</label>
             <br />
             <input   className=' text-white   text-[13px]  ml-10 border-[0.2px] Signin rounded-sm  w-70 h-7  border-zinc-500' type="text" id='Password ' placeholder='  Enter your password                 ' />
     <br />     <br /> 
        <button className='bg-[#A5D9D0] text-black w-70 h-7 ml-10 rounded-sm text-[11px] font-bold'>Signin</button>
        </div>
    </div>
);
}   // End of Signin component   
export default Signin; // Export the Signin component