import {FaTrash , FaEdit} from "react-icons/fa";

const Table = ({data , setData}) => {

    function remove(index) {
        let newData = [...data];
        newData.splice(index , 1);
        setData(newData);
    }

    function edit(index) {
        let newName = prompt("Edit your name:" , data[index].name);
        let newFamily = prompt("Edit your family:" , data[index].family);
        let newEmail = prompt("Edit your email:" , data[index].email);
        let newPhone = prompt("Edit your phone:" , data[index].phone);

        let user = {
            name: newName,
            family: newFamily,
            email: newEmail,
            phone: newPhone
        }

        let newData = [...data];
        newData.splice(index , 1 , user);
        setData(newData);
    }


    return(
        <table className="table text-right">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">حذف</th>
                        <th scope="col" className="text-center">ویرایش</th>
                        <th scope="col" className="text-center">#</th>
                        <th scope="col" className="text-center">نام</th>
                        <th scope="col" className="text-center">نام خانوادگی</th>
                        <th scope="col" className="text-center">ایمیل</th>
                        <th scope="col" className="text-center">تلفن</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        data.map((item , index) => (
                            <tr>
                                <td scope="col" className="text-center" onClick={() => remove(index)}><FaTrash /></td>
                                <td scope="col" className="text-center" onClick={() => edit(index)}><FaEdit /></td>
                                <td scope="col" className="text-center">{index}</td>
                                <td scope="col" className="text-center">{item.name}</td>
                                <td scope="col" className="text-center">{item.family}</td>
                                <td scope="col" className="text-center">{item.email}</td>
                                <td scope="col" className="text-center">{item.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
        </table>
    )
}

export default Table;