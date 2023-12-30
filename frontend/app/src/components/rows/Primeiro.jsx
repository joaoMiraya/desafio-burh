import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../cards/Card";
import Button from "../utils/Button";
import Modal from "../utils/Modal";



function Primeiro() {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/resultado/list/PRIMEIRO');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (

        <>
            <span className='flex justify-between my-6'>
                <p className='text-white font-semibold'>Bimestre 1</p>
                <Button setOpen={setOpen} />
            </span>
            <div className='flex justify-center flex-wrap gap-8 md:gap-12'>
                {data?.map((item) => {
                    return (
                        <Card key={item.id} data={item} />
                    )
                })}
            </div>

            <Modal open={open} setOpen={setOpen} bimestre={'PRIMEIRO'} text={'Bimestre 1'} />
        </>
    )
}

export default Primeiro;