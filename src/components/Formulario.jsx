
import React from 'react'
import { useForm } from 'react-hook-form';

export const Formulario = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <>
        <form className='form'>
                <div className='form_container'>
                <div className='form_group'>
                    <label className='form_title'><h2>Computer Visio</h2></label>
                        <label>Insert URL or type prompt:</label>
                        <input type="text" name="titulo" className='form_input' ></input>
                        <input type="file" name='file'></input>
                        <span className='form_line'></span>
                    
                        <button className='form_submit' type="submit">Analyze</button>
                        <button className='form_submit' type="submit">Generate</button>
                </div>    
                </div>
        </form>
    </>)
}
