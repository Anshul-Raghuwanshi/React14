import {useForm} from 'react-hook-form';

const App = () => {
  const {register,handleSubmit, watch, formState:{errors}} = useForm();
  const SubmitHandler = (data) => {
    console.log(data);
    
  }
  // console.log(watch("username"));
  console.log(errors);
  
  return (
    <>
      <h1 className="text-3xl ">Register utls</h1>
      <form onSubmit={handleSubmit(SubmitHandler)} className="p-5">
        <input type="text" placeholder="username"{...register("username",{
          required:"username field is required",
          maxLength:8,
          minLength:4
        })} />
      {errors.username?.type == "required" &&(
        <p className="text-red-300 mt-3">
        {errors.username.message}
      </p>)}


      {errors.username?.type == "maxlength" && (
        <p className="text-red-300 mt-3">
        {errors.username.message}
      </p>)}

        <input type="radio"
        defaultValue= "male" 
        {...register("gender")} />Male
        <br />
        <input type="radio"
        defaultValue= "female"
        {...register("gender")} />Female
       <br />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
