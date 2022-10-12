import css from './Car.module.css';
import {userService} from "../../services/user.service";

const Car = ({user, setUsers, setUsersForUpdate}) => {
    const {id, name, username, email, address, phone, website, company} = user;
    const deleteCar = async () => {
        await userService.deleteById(id);
        setUsers(user => {
            const index = user.findIndex(value => value.id === id);
            user.splice(index, 1);
            console.log([...user]);
            return [...user];
        });
    };

    return (
        <div className={css.Car}>
            <div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>username:{username}</div>
                <div>email:{email}</div>
                <ol> address:
                    <li>{address['street']}</li>
                    <li>{address['suite']}</li>
                    <li>{address['city']}</li>
                    <li>{address['zipcode']}</li>
                    <ul>geo
                        <li>{address['geo']['lat']}</li>
                        <li>{address['geo']['lng']}</li>
                    </ul>
                </ol>
                <div>phone:{phone}</div>
                <div>website:{website}</div>
                <ul>company:
                <li>{company['name']}</li>
                <li>{company['catchPhrase']}</li>
                <li>{company['bs']}</li>
                </ul>
            </div>
            <div className={css.tools}>
                <button onClick={() => setUsersForUpdate(user)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car};
