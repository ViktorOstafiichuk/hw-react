export default function UserDetail(props){
    let {userDetail} = props;

    return (
        <div className='userDetail'>
            <h1>{Object.keys(userDetail)[1]} -- {userDetail['name']}</h1>
            <h1>{Object.keys(userDetail)[0]} -- {userDetail['id']}</h1>
            <ul>
                <li>{Object.keys(userDetail)[2]} -- {userDetail['username']}</li>
                <li>{Object.keys(userDetail)[3]} -- {userDetail['email']}</li>
                <li>{Object.keys(userDetail)[4]}
                    <ol>
                        <li>{userDetail['address']['street']}</li>
                        <li>{userDetail['address']['suite']}</li>
                        <li>{userDetail['address']['city']}</li>
                        <li>{userDetail['address']['zipcode']}</li>
                        <li>{(Object.keys(userDetail['address'])[4])}
                            <ul>
                                <li>{Object.keys(userDetail['address']['geo'])[0]} -- {userDetail['address']['geo']['lat']}</li>
                            </ul>
                        </li>
                    </ol></li>



            </ul>
        </div>
    );
}
