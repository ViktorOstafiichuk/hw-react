import {useForm} from "react-hook-form";
import {userService} from "../services";

const UserForm = ({setUsers}) =>  {
    const {register, reset, handleSubmit, formState:{errors, isValid}}= useForm({
        mode:'all',
        defaultValues: {
            name: 'name',
            surname: 'surname',
            email: 'email'
        }
    });
    const submit = (obj) => {
        userService.createUser(obj).then(({data})=> setUsers(users => [...users, data]))
    }

return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name", {require: {value:true, message: 'Eror'}})}/>
        {
            errors.name && <span>{errors.name.message}</span>
        }
        <input type="text" {...register('surname')}/>
        <input type="text" {...register('email')}/>
        <button>click</button>
    </form>
)}


export {UserForm};
