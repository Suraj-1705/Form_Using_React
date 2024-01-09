import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India", 
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotification:"",





})


function changeHandler(event){
  // destructring
    const {name,value,type,checked} = event.target

    setFormData( prevFormData => {
        return {
            ...prevFormData,
            [name] : type === "checkbox"? checked:value
        }
    }) 
}

function submitHandler(event){
    event.preventDefault();
    console.log("finally printing the form data");
    console.log(formData);
}


  return (
    <div className='flex items-center justify-center w-full h-full'> 
   
        
        <form onSubmit={submitHandler} className='flex flex-col items-center h-auto w-2/4		mt-5 mb-5 rounded border-2 max shadow-2xl'>
      
        
        {/* FIRST NAME */}
        <label htmlFor='firstName' className='w-full  px-8 pt-6'>First Name</label>
        <input 
        type='text'
        name='firstName'
        placeholder='Enter your first name'
        id='firstName'
        value={formData.firstName}
        onChange={changeHandler}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

        />
       

        {/* LAST NAME */}
        
        <label htmlFor='lastName'  className='w-full px-8'>Last Name</label>
        <input 
        type='text'
        name='lastName'
        placeholder='Enter your last name'
        id='lastName'
        value={formData.lastName}
        onChange={changeHandler}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

        
        />
       
       
        
        {/* EMAIL */}
       
        <label htmlFor='email'  className='w-full px-8'>Email Address</label>
        <input 
        type='email'
        name='email'
        placeholder='Enter your email'
        id='email'
        value={formData.name}
        onChange={changeHandler}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

        />
       
        
        <label htmlFor='country' className='w-full px-8'>Country</label>
        
        <select
        name='country'
        id='country'
        onChange={changeHandler}
        value={formData.country}
        className='  w-11/12  
        mr-3 ml-3 py-2 px-2  border  
        border-sky-300	 rounded mb-2'
              
        >
            <option>India</option>
            <option>Russia</option>
            <option>us</option>
            <option>America</option>
        </select>
       
        

      {/* STREET ADDRESS */}

        <label htmlFor='streetAddress' className='w-full px-8'>Street Address </label>
        {/* <br/> */}
        <input 
        type='text'
        name='streetAddress'
        placeholder='Enter your street address'
        id='streetAddress'
        onChange={changeHandler}
        value={formData.streetAddress}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

        
        />
   
      {/* city */}
      <label htmlFor='firstName' className='w-full px-8'>City</label>
        <input 
        type='text'
        name='city'
        placeholder='Enter your city'
        id='city'
        value={formData.city}
        onChange={changeHandler}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

      />
     

       {/*state */}
       <label htmlFor='state' className='w-full px-8'>State</label>
        <input 
        type='text'
        name='state'
        placeholder='Enter your state'
        id='state'
        value={formData.state}
        onChange={changeHandler}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

        />
      

       {/* postal code*/}
       <label htmlFor='postalCode'  className='w-full px-8'>Postal Code</label>
        <input 
        type='text'
        name='postalCode'
        placeholder='Enter your postalCode'
        id='postalCode'
        value={formData.postalCode}
        onChange={changeHandler}
        className=' text-sm text-gray-base w-11/12  
        mr-3 ml-3 py-5 px-4 h-1 border  
        border-sky-300	 rounded mb-2'

        />
      

        <fieldset  className='w-full px-8'>

          <legend className='font-semibold'>By Email</legend>
          
          <div className='flex'>
              <input 
              type='checkbox'
              name='comments'
              id='comments'
              checked={formData.comments}
              onChange={changeHandler}
              className='mr-3 ml-3'
            

              />
              
              <div className='pt-2'>
                <label htmlFor='comments' className=' ml-2 font-semibold'>Comments</label>
                <p className='ml-2 text-gray-500'>Get notified when someones post a comment on a posting</p>
              </div>
          </div>


          <div className='flex'>
              <input 
              type='checkbox'
              name='candidates'
              id='candidates'
              checked={formData.candidates}
              onChange={changeHandler}
              className='mr-3 ml-3'
              

              />
              
              <div>
                <label htmlFor='candidates' className=' ml-2 font-semibold'>Candidates</label>
                <p className='ml-2 text-gray-500'>Get notified when a candidate applies for a job</p>
              </div>
          </div>


          <div className='flex'>
              <input 
              type='checkbox'
              name='offers'
              id='offers'
              checked={formData.offers}
              onChange={changeHandler}
              className='mr-3 ml-3'
              

              />
              
              <div>
                <label htmlFor='offers' className=' ml-2 font-semibold'>Offers</label>
                <p className='ml-2 text-gray-500'>Get notified when a candidate accepts or rejects an offer</p>
              </div>
          </div>
        </fieldset>

         <br/> 

        <fieldset  className='w-full px-8'>
          <legend className='font-semibold'>Push Notifications</legend>
          <p className='text-gray-500'>These are delivered to your mobile phone via sms</p>
          <input
          type='radio'
          name='pushNotification'
          value="everything"
          id='pushEverything'
          onChange={changeHandler}
          className='mr-3 ml-3'
          />
          <label htmlFor='pushEverything ' className='font-semibold'>Everything</label>
          <br/>
          <input
          type='radio'
          name='pushNotification'
          value="Same as email"
          id='pushEmail'
          onChange={changeHandler}
          className='mr-3 ml-3'
          />
          <label htmlFor='pushEmail' className='font-semibold'>Same as email</label>

          <br/>
          <input
          type='radio'
          name='pushNotification'
          value="No such notifications"
          id='pushNothing'
          onChange={changeHandler}
          className='mr-3 ml-3'
          />
          <label htmlFor='pushNothing' className='font-semibold'>No such notifications</label>


        </fieldset>
        <br/>
        <br/>
        <button
        className='bg-blue-500 rounded text-white py-2 px-11 font-bold'
        
        >Save</button>
      
      </form>
      </div>

    
      // </div>
  );
}

export default App;
