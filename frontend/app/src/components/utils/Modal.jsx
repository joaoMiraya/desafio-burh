import Proptypes from 'prop-types';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { gerarIdAleatorio } from '../../javascript/main';

function Modal({ text, bimestre, open, setOpen }) {
    Modal.propTypes = {
        text: Proptypes.string.isRequired,
        bimestre: Proptypes.string.isRequired,
        open: Proptypes.bool.isRequired,
        setOpen: Proptypes.func.isRequired,
    };

    const [nota, setNota] = useState(0.0);
    const [disciplina, setDisciplina] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const notaToFloat = parseFloat(nota);
        if (typeof notaToFloat !== 'number' || notaToFloat < 0 || notaToFloat > 10) {
            alert('Nota inválida!');
            return;
        } else if (disciplina === '') {
            alert('Selecione uma disciplina!');
            return;
        }
        const data = {
            id: gerarIdAleatorio(8),
            nota: notaToFloat,
            disciplina: disciplina,
            bimestre: bimestre
        };
        axios.post('http://localhost:3001/resultado/create', data)
            .then(res => {
                console.log(res.data);
                window.location.reload();
                setOpen(false);
            }).catch(err => {
                console.log(err);
                alert('Erro ao cadastrar nota!');
            })
    };

    return (

        <div className={` ${open ? 'flex' : 'hidden'} justify-center items-center absolute top-0 md:w-screen h-screen px-2 z-10 bg-black/60`}>
            <div className="bg-[#0F0F0F] relative p-4 z-20">
                <button onClick={() => setOpen(false)} className='absolute top-2 right-2 text-white'>
                    <IoMdClose size={25} />
                </button>
                <h2 className='text-white font-semibold text-3xl'>{text}</h2>
                <p className='text-white my-4'>Disciplina</p>
                <div className='flex justify-center items-center my-4 gap-4 text-white flex-wrap px-4'>
                    <button onClick={() => setDisciplina('Biologia')} className='flex-grow hover:opacity-70 py-2 px-4 rounded-2xl bg-[#CC4090]'>Biologia</button>
                    <button onClick={() => setDisciplina('Artes')} className='flex-grow hover:opacity-70 py-2 px-4 rounded-2xl bg-[#05A2C2]'>Artes</button>
                    <button onClick={() => setDisciplina('Geografia')} className='flex-grow hover:opacity-70 py-2 px-4 rounded-2xl bg-[#C26719]'>Geografia</button>
                    <button onClick={() => setDisciplina('Sociologia')} className='flex-grow hover:opacity-70 py-2 px-4 rounded-2xl bg-[#9B19C2]'>Sociologia</button>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col text-white gap-2' >
                    <label className='text-sm font-thin' htmlFor="nota">Nota:</label>
                    <input
                        type="number"
                        id='nota'
                        name='nota'
                        required
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        className='w-20 pl-2 h-10 bg-transparent border-[1px] border-solid border-stone-600 rounded-lg'
                    />
                    <span className='flex justify-end p-4'>
                        <button type='submit' className='bg-[#E9FF1A] py-2 px-4 text-black font-semibold rounded-lg'>Confirmar</button>
                    </span>
                </form>

            </div>

        </div>
    )
}

export default Modal;