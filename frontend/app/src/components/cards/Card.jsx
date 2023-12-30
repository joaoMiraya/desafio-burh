import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { CiCircleList } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatarData } from '../../javascript/main';
import { Tooltip } from 'react-tooltip'
import axios from 'axios';


function Card({ data }) {
    Card.propTypes = {
        data: PropTypes.object.isRequired,
    };
    const [color, setColor] = useState('');
    const [date, setDate] = useState('');

    //VERIFICA A DISCIPLINA E DEFINE A COR DO CARD
    useEffect(() => {
        switch (data.disciplina) {
            case "Biologia":
                setColor('#CC4090')
                break;
            case "Artes":
                setColor('#05A2C2')
                break;
            case "Geografia":
                setColor('#C26719')
                break;
            case "Sociologia":
                setColor('#9B19C2')
                break;
            default:
                setColor('#c1c1c1')
        }
        setDate(formatarData(data.createdAt))
    }, [data.disciplina, data.createdAt])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/resultado/${id}`)
            .then(res => {
                console.log(res.data);
                window.location.reload();
            }).catch(err => {
                console.log(err);
                alert('Erro ao deletar nota!');
            })
    };

    return (
        <>
            <div className={`w-[9rem] h-[9rem] flex flex-col justify-between rounded-3xl relative`} style={{ backgroundColor: color }}>
                <button className='cursor-pointer absolute right-[-25px] top-0 text-red-500'
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Remover"
                    data-tooltip-place="top"
                    onClick={() => handleDelete(data.id)}
                >
                    <Tooltip id="my-tooltip" />
                    <FaRegTrashAlt size={25} />
                </button>
                <span className='flex flex-col gap-2 p-2'>
                    <h3 className='text-lg text-white'>{data.disciplina}</h3>
                    <p className='text-sm font-light text-white'>{date}</p>
                </span>
                <span className='text-red-400 flex items-center bg-black/60 p-1 w-full mb-6'>
                    <span className='flex items-center gap-2 text-sm'>
                        <CiCircleList size={20} />
                        <p>Nota: {data.nota}</p>
                    </span>
                </span>
            </div>
        </>
    )
}

export default Card;