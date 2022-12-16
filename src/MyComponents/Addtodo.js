import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export const Addtodo = ({addTodo}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const onSubmit = (e)=> {
    if(!e.title || !e.desc) {
      alert("Title and Descriptin are required. Please Fill!!");
    } else {
      addTodo(title, desc);
      setDesc('');
      setTitle('');
    }
  }
 
  return (
    <>
    <div className='addtodo-div mt-5'>
    <h3 className='mb-4'>Add Your Plans Here</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Plan Title</label>
          <input type="text" className="form-control inputGreyborder-md border-left-0 pl-3" id="title" {...register("title", { required: true, maxLength: 20 })}  value={title} onChange={(e)=>{setTitle(e.target.value)}} />
          {errors.title && <p>Please Enter The Title!!</p>}
        </div>
        </Form.Field>
        <Form.Field>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" className="form-control inputGreyborder-md border-left-0 pl-3" id="desc" {...register("desc", { required: true})} value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
          {errors.desc && <p>Please Enter The Description!!</p>}
        </div>
        </Form.Field>
        <Button type="submit" className="btn btn-success">Submit</Button>
      </Form>
      <h2 className='mb-4 mt-5'>Your Plan Lists</h2>
    </div>
   
    </>
  )
}
